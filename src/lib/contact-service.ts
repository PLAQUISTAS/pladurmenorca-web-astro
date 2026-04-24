// Servicio compartido de envío de solicitudes de contacto / presupuesto.
// Usado por /api/contacto (formulario web) y /api/mcp (herramienta MCP).
import { siteConfig } from '@/data/site'
import { sendEmail, type GmailCredentials } from '@/lib/gmail'
import { checkRateLimit } from '@/lib/rate-limit'
import {
  buildClientConfirmationHtml,
  buildClientConfirmationText,
  buildInternalNotificationHtml,
  buildInternalNotificationText,
} from '@/lib/email-templates'

const SENDER_NAME = 'Pladur Menorca'
const INTERNAL_RECIPIENT = 'info@plaquistas.com'

export interface ContactInput {
  nombre: string
  telefono: string
  email?: string
  descripcion?: string
  mensaje?: string
  tipo?: 'presupuesto' | 'contacto' | 'rapido'
  paginaOrigen?: string
  lang?: 'es' | 'en'
}

export interface FileAttachment {
  filename: string
  content: ArrayBuffer | Uint8Array
  contentType?: string
}

export interface SubmitContext {
  ip: string
  userAgent: string
  viaApi: boolean
  files?: FileAttachment[]
}

export type SubmitResult =
  | { ok: true; remaining: number; message: string }
  | { ok: false; status: 429 | 500; error: string; remaining?: number }

function gmailCredentials(): GmailCredentials {
  return {
    clientId: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN || '',
  }
}

export async function submitContactRequest(
  input: ContactInput,
  ctx: SubmitContext
): Promise<SubmitResult> {
  const lang: 'es' | 'en' = input.lang === 'en' ? 'en' : 'es'
  const { allowed, remaining } = checkRateLimit(ctx.ip)
  if (!allowed) {
    return {
      ok: false,
      status: 429,
      error: lang === 'en'
        ? 'Too many requests. Max 20 per IP every 24h. Email us directly at info@plaquistas.com.'
        : 'Demasiadas solicitudes. Máximo 20 por IP cada 24h. Escríbenos directamente a info@plaquistas.com.',
      remaining: 0,
    }
  }

  const senderEmail = process.env.GMAIL_SENDER_EMAIL || 'info@plaquistas.com'
  const fromAddress = `${SENDER_NAME} <${senderEmail}>`
  const files = ctx.files ?? []
  const attachmentNames = files.map(f => f.filename)

  const emailMeta = {
    hasAttachments: files.length > 0,
    attachmentNames,
    ip: ctx.ip,
    paginaOrigen: input.paginaOrigen,
    viaApi: ctx.viaApi,
    userAgent: ctx.userAgent,
  }

  const internalResult = await sendEmail({
    to: INTERNAL_RECIPIENT,
    from: fromAddress,
    replyTo: input.email || undefined,
    subject: `${ctx.viaApi ? '[API] ' : ''}${lang === 'en' ? '[EN] ' : ''}PLADUR MENORCA : ${input.nombre} — ${input.tipo === 'presupuesto' ? 'Presupuesto' : 'Contacto'}`,
    html: buildInternalNotificationHtml(input, emailMeta),
    text: buildInternalNotificationText(input, emailMeta),
    attachments: files.length > 0
      ? files.map(f => ({ filename: f.filename, content: f.content, contentType: f.contentType }))
      : undefined,
  }, gmailCredentials())

  if (!internalResult.success) {
    console.error('[contact-service] Error enviando notificacion interna:', internalResult.error)
    return {
      ok: false,
      status: 500,
      error: lang === 'en'
        ? `There was an error sending your request. Please call us at ${siteConfig.phone}.`
        : `Error al enviar la solicitud. Por favor, llámanos al ${siteConfig.phone}.`,
      remaining,
    }
  }

  if (input.email) {
    try {
      await sendEmail({
        to: input.email,
        from: fromAddress,
        subject: lang === 'en'
          ? "We've received your request — Pladur Menorca"
          : 'Hemos recibido tu solicitud — Pladur Menorca',
        html: buildClientConfirmationHtml(input),
        text: buildClientConfirmationText(input),
      }, gmailCredentials())
    } catch (err) {
      console.error('[contact-service] Error enviando confirmacion al cliente:', err)
    }
  }

  return {
    ok: true,
    remaining,
    message: lang === 'en' ? 'Request sent successfully.' : 'Solicitud enviada correctamente.',
  }
}

/**
 * Heurística para detectar si una solicitud viene de agente/API vs navegador.
 */
export function detectViaApi(userAgent: string, paginaOrigen?: string): boolean {
  const looksLikeBrowser = /mozilla|chrome|safari|firefox|edge|opera/i.test(userAgent)
    && !/bot|crawler|spider|curl|python|postman|agent/i.test(userAgent)
  const hasInternalOrigen = typeof paginaOrigen === 'string' && paginaOrigen.startsWith('/')
  return !looksLikeBrowser || !hasInternalOrigen
}

export function getClientIp(request: Request): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    '0.0.0.0'
  )
}
