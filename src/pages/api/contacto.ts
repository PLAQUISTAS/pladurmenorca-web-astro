import type { APIRoute } from 'astro'
export const prerender = false
import { z } from 'zod'
import { siteConfig } from '@/data/site'
import { sendEmail, type GmailCredentials } from '@/lib/gmail'
import { checkRateLimit } from '@/lib/rate-limit'
import {
  buildClientConfirmationHtml,
  buildClientConfirmationText,
  buildInternalNotificationHtml,
  buildInternalNotificationText,
} from '@/lib/email-templates'

const ACCEPTED_EXTENSIONS = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png', 'zip', 'xls', 'xlsx']
const MAX_FILE_SIZE = 25 * 1024 * 1024 // 25MB
const MAX_FILES = 5
const MIN_SUBMIT_TIME_MS = 3000 // 3 seconds minimum

const SENDER_NAME = 'Pladur Menorca'
const INTERNAL_RECIPIENT = 'info@plaquistas.com'

function getFileExtension(filename: string): string {
  return filename.split('.').pop()?.toLowerCase() ?? ''
}

const contactoSchema = z.object({
  nombre: z.string().min(2).max(100),
  telefono: z.string().min(7).max(20).regex(/^[+\d\s\-().]{7,20}$/),
  email: z.string().email().max(200).optional().or(z.literal('')),
  descripcion: z.string().max(2000).optional(),
  mensaje: z.string().max(2000).optional(),
  tipo: z.enum(['presupuesto', 'contacto', 'rapido']).optional(),
  privacidad: z.union([z.literal(true), z.literal('true')]).optional(),
  paginaOrigen: z.string().max(200).optional(),
  // Anti-spam fields (not stored)
  _hp: z.string().max(0, 'spam').optional(), // honeypot — must be empty
  _t: z.string().optional(), // timestamp
})

type ContactoData = z.infer<typeof contactoSchema>

interface FileAttachment {
  filename: string
  content: ArrayBuffer | Uint8Array
  contentType?: string
}

function getClientIp(request: Request): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    '0.0.0.0'
  )
}

function getMimeType(filename: string): string {
  const ext = getFileExtension(filename)
  const map: Record<string, string> = {
    pdf: 'application/pdf',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    zip: 'application/zip',
  }
  return map[ext] || 'application/octet-stream'
}

async function parseRequest(request: Request): Promise<{
  data: Record<string, unknown>
  files: FileAttachment[]
}> {
  const contentType = request.headers.get('content-type') ?? ''

  if (contentType.includes('multipart/form-data')) {
    const formData = await request.formData()
    const data: Record<string, unknown> = {}
    const files: FileAttachment[] = []

    for (const [key, value] of formData.entries()) {
      if (key === 'archivos' && value instanceof File) {
        if (value.size > 0) {
          if (value.size > MAX_FILE_SIZE) continue
          if (!ACCEPTED_EXTENSIONS.includes(getFileExtension(value.name))) continue
          if (files.length >= MAX_FILES) continue
          const arrayBuffer = await value.arrayBuffer()
          files.push({
            filename: value.name,
            content: new Uint8Array(arrayBuffer),
            contentType: getMimeType(value.name),
          })
        }
      } else {
        if (key === 'privacidad') {
          data[key] = value === 'true' ? 'true' : value
        } else {
          data[key] = typeof value === 'string' ? value : String(value)
        }
      }
    }

    return { data, files }
  }

  const body = await request.json()
  return { data: body as Record<string, unknown>, files: [] }
}

export const POST: APIRoute = async ({ request }) => {
  const gmailCredentials: GmailCredentials = {
    clientId: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN || '',
  }
  const SENDER_EMAIL = process.env.GMAIL_SENDER_EMAIL || 'info@plaquistas.com'

  // 1. Rate limiting
  const ip = getClientIp(request)
  const { allowed, remaining } = checkRateLimit(ip)

  if (!allowed) {
    return new Response(
      JSON.stringify({ error: 'Demasiadas solicitudes. Por favor, espera unos minutos.' }),
      { status: 429, headers: { 'Content-Type': 'application/json', 'X-RateLimit-Remaining': String(remaining) } }
    )
  }

  // 2. Parse request
  let parsed: { data: Record<string, unknown>; files: FileAttachment[] }
  try {
    parsed = await parseRequest(request)
  } catch (err) {
    console.error('[API /contacto] Parse error:', err instanceof Error ? err.message : err)
    return new Response(
      JSON.stringify({ error: 'Request body invalido.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }

  // 3. Validate
  const result = contactoSchema.safeParse(parsed.data)
  if (!result.success) {
    if (import.meta.env.DEV) {
      console.log('[API /contacto] Validation errors:', result.error.flatten().fieldErrors)
    }
    return new Response(
      JSON.stringify({ error: 'Datos del formulario invalidos.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }

  const data = result.data

  // 4. Honeypot check — if filled, silently return success (bot trap)
  if (data._hp) {
    return new Response(
      JSON.stringify({ success: true, message: 'Solicitud recibida.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  }

  // 5. Timing check — reject if submitted faster than 3 seconds
  if (data._t) {
    const submittedAt = parseInt(data._t, 10)
    if (!isNaN(submittedAt) && Date.now() - submittedAt < MIN_SUBMIT_TIME_MS) {
      return new Response(
        JSON.stringify({ success: true, message: 'Solicitud recibida.' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      )
    }
  }

  // 6. Send emails
  const contactData = {
    nombre: data.nombre,
    telefono: data.telefono,
    email: data.email,
    descripcion: data.descripcion,
    mensaje: data.mensaje,
    tipo: data.tipo,
    paginaOrigen: data.paginaOrigen,
  }

  const attachmentNames = parsed.files.map(f => f.filename)
  const fromAddress = `${SENDER_NAME} <${SENDER_EMAIL}>`

  // 6a. Internal notification — must succeed
  const internalResult = await sendEmail({
    to: INTERNAL_RECIPIENT,
    from: fromAddress,
    replyTo: data.email || undefined,
    subject: `PLADUR MENORCA : ${data.nombre} — ${data.tipo === 'presupuesto' ? 'Presupuesto' : 'Contacto'}`,
    html: buildInternalNotificationHtml(contactData, {
      hasAttachments: parsed.files.length > 0,
      attachmentNames,
      ip,
      paginaOrigen: data.paginaOrigen,
    }),
    text: buildInternalNotificationText(contactData, {
      hasAttachments: parsed.files.length > 0,
      attachmentNames,
      paginaOrigen: data.paginaOrigen,
    }),
    attachments: parsed.files.length > 0
      ? parsed.files.map(f => ({ filename: f.filename, content: f.content, contentType: f.contentType }))
      : undefined,
  }, gmailCredentials)

  if (!internalResult.success) {
    console.error('[API /contacto] Error enviando notificacion interna:', internalResult.error)
    return new Response(
      JSON.stringify({ success: false, error: `Error al enviar el mensaje. Por favor, llámanos al ${siteConfig.phone}.` }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }

  // 6b. Client confirmation
  if (data.email) {
    try {
      await sendEmail({
        to: data.email,
        from: fromAddress,
        subject: 'Hemos recibido tu solicitud — Pladur Menorca',
        html: buildClientConfirmationHtml(contactData),
        text: buildClientConfirmationText(contactData),
      }, gmailCredentials)
    } catch (err) {
      console.error('[API /contacto] Error enviando confirmacion al cliente:', err)
    }
  }

  return new Response(
    JSON.stringify({ success: true, message: 'Solicitud enviada correctamente.' }),
    { status: 200, headers: { 'Content-Type': 'application/json', 'X-RateLimit-Remaining': String(remaining) } }
  )
}
