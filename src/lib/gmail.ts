const TOKEN_URL = 'https://oauth2.googleapis.com/token'
const GMAIL_SEND_URL = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send'

const FETCH_TIMEOUT_MS = 15_000
const MAX_RETRIES = 2
const INITIAL_BACKOFF_MS = 500

// ── Token cache ──────────────────────────────────────────────
let tokenCache: { token: string; expiresAt: number } | null = null

function getCachedToken(): string | null {
  if (tokenCache && Date.now() < tokenCache.expiresAt) {
    return tokenCache.token
  }
  tokenCache = null
  return null
}

function cacheToken(token: string, expiresInSeconds: number): void {
  // Shave 60s off to avoid using an almost-expired token
  tokenCache = { token, expiresAt: Date.now() + (expiresInSeconds - 60) * 1000 }
}

function invalidateToken(): void {
  tokenCache = null
}

// ── Fetch with retry + timeout ───────────────────────────────
async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries = MAX_RETRIES,
): Promise<Response> {
  let lastError: Error | null = null

  for (let attempt = 0; attempt <= retries; attempt++) {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)

    try {
      const res = await fetch(url, { ...options, signal: controller.signal })
      clearTimeout(timer)
      return res
    } catch (err) {
      clearTimeout(timer)
      lastError = err instanceof Error ? err : new Error(String(err))

      if (attempt < retries) {
        const backoff = INITIAL_BACKOFF_MS * 2 ** attempt
        await new Promise((r) => setTimeout(r, backoff))
      }
    }
  }

  throw lastError!
}

// ── Credentials interface ────────────────────────────────────
export interface GmailCredentials {
  clientId: string
  clientSecret: string
  refreshToken: string
}

// ── OAuth2 access token ──────────────────────────────────────
async function getAccessToken(credentials?: GmailCredentials): Promise<string | null> {
  const cached = getCachedToken()
  if (cached) return cached

  const clientId = credentials?.clientId
  const clientSecret = credentials?.clientSecret
  const refreshToken = credentials?.refreshToken

  if (!clientId || !clientSecret || !refreshToken) {
    return null
  }

  const res = await fetchWithRetry(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    if (text.includes('invalid_grant')) {
      console.error('[Gmail] Refresh token revocado o expirado. Regenerar en Google Cloud Console.')
    }
    throw new Error(`OAuth2 token refresh failed (${res.status}): ${text}`)
  }

  const data = (await res.json()) as { access_token: string; expires_in?: number }
  const expiresIn = data.expires_in ?? 3600
  cacheToken(data.access_token, expiresIn)
  return data.access_token
}

// ── Base64 helpers (no Buffer dependency) ────────────────────
function toBase64(str: string): string {
  return btoa(unescape(encodeURIComponent(str)))
}

function uint8ToBase64(bytes: Uint8Array): string {
  let binary = ''
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

// ── MIME message builder ─────────────────────────────────────
interface EmailMessage {
  to: string
  from: string
  subject: string
  html: string
  text: string
  replyTo?: string
  attachments?: Array<{
    filename: string
    content: ArrayBuffer | Uint8Array
    contentType?: string
  }>
}

function buildMimeMessage(msg: EmailMessage): string {
  const boundary = `boundary_${Date.now()}_${Math.random().toString(36).slice(2)}`
  const hasAttachments = msg.attachments && msg.attachments.length > 0

  const headers = [
    `From: ${msg.from}`,
    `To: ${msg.to}`,
    `Subject: =?UTF-8?B?${toBase64(msg.subject)}?=`,
    'MIME-Version: 1.0',
  ]

  if (msg.replyTo) {
    headers.push(`Reply-To: ${msg.replyTo}`)
  }

  if (hasAttachments) {
    headers.push(`Content-Type: multipart/mixed; boundary="${boundary}"`)

    const textBoundary = `text_${boundary}`
    let body = headers.join('\r\n') + '\r\n\r\n'

    // Text alternative part
    body += `--${boundary}\r\n`
    body += `Content-Type: multipart/alternative; boundary="${textBoundary}"\r\n\r\n`

    // Plain text
    body += `--${textBoundary}\r\n`
    body += 'Content-Type: text/plain; charset=UTF-8\r\n'
    body += 'Content-Transfer-Encoding: base64\r\n\r\n'
    body += toBase64(msg.text) + '\r\n'

    // HTML
    body += `--${textBoundary}\r\n`
    body += 'Content-Type: text/html; charset=UTF-8\r\n'
    body += 'Content-Transfer-Encoding: base64\r\n\r\n'
    body += toBase64(msg.html) + '\r\n'

    body += `--${textBoundary}--\r\n`

    // Attachments
    for (const att of msg.attachments!) {
      const ct = att.contentType || 'application/octet-stream'
      body += `--${boundary}\r\n`
      body += `Content-Type: ${ct}; name="${att.filename}"\r\n`
      body += `Content-Disposition: attachment; filename="${att.filename}"\r\n`
      body += 'Content-Transfer-Encoding: base64\r\n\r\n'
      body += uint8ToBase64(new Uint8Array(att.content)) + '\r\n'
    }

    body += `--${boundary}--`
    return body
  }

  // No attachments — multipart/alternative only
  const altBoundary = `alt_${boundary}`
  headers.push(`Content-Type: multipart/alternative; boundary="${altBoundary}"`)

  let body = headers.join('\r\n') + '\r\n\r\n'

  body += `--${altBoundary}\r\n`
  body += 'Content-Type: text/plain; charset=UTF-8\r\n'
  body += 'Content-Transfer-Encoding: base64\r\n\r\n'
  body += toBase64(msg.text) + '\r\n'

  body += `--${altBoundary}\r\n`
  body += 'Content-Type: text/html; charset=UTF-8\r\n'
  body += 'Content-Transfer-Encoding: base64\r\n\r\n'
  body += toBase64(msg.html) + '\r\n'

  body += `--${altBoundary}--`
  return body
}

function toUrlSafeBase64(raw: string): string {
  return btoa(unescape(encodeURIComponent(raw)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

// ── Send email (with 401 retry) ──────────────────────────────
export async function sendEmail(msg: EmailMessage, credentials?: GmailCredentials): Promise<{ success: boolean; error?: string }> {
  let accessToken: string | null
  try {
    accessToken = await getAccessToken(credentials)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Error desconocido'
    console.error('[Gmail] Error obteniendo access token:', message)
    return { success: false, error: message }
  }

  if (!accessToken) {
    console.error('[Gmail] Credenciales no configuradas. Variables requeridas: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN')
    return { success: false, error: 'Credenciales de email no configuradas' }
  }

  const raw = toUrlSafeBase64(buildMimeMessage(msg))

  async function attempt(token: string): Promise<Response> {
    return fetchWithRetry(GMAIL_SEND_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ raw }),
    })
  }

  try {
    let res = await attempt(accessToken)

    // If 401, token might have just expired — refresh once and retry
    if (res.status === 401) {
      invalidateToken()
      try {
        accessToken = await getAccessToken(credentials)
      } catch {
        return { success: false, error: 'Token expirado y no se pudo renovar' }
      }
      if (!accessToken) {
        return { success: false, error: 'Token expirado y no se pudo renovar' }
      }
      res = await attempt(accessToken)
    }

    if (!res.ok) {
      const text = await res.text()
      throw new Error(`Gmail API error (${res.status}): ${text}`)
    }

    return { success: true }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Error desconocido'
    console.error('[Gmail] Error al enviar email:', message)
    return { success: false, error: message }
  }
}
