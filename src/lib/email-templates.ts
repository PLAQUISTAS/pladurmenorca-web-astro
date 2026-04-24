import { siteConfig } from '@/data/site'

// Clean premium palette — no glossy
const C = {
  heading: '#2D2D2D',
  body: '#555555',
  muted: '#888888',
  light: '#AAAAAA',
  white: '#FFFFFF',
  bgOuter: '#F2F1EF',
  bgCard: '#FFFFFF',
  headerBg: '#2D2D2D',
  bgAlt: '#F7F6F4',
  accent: '#ff5e2b',
  border: '#E5E2DD',
  borderLight: '#EDEBE8',
}

const LEGAL_FOOTER = `
<p style="margin: 0 0 2px; font-size: 12px; font-weight: 700; color: ${C.heading};">
  PLAQUISTAS Y ACABADOS SL
</p>
<p style="margin: 0; font-size: 11px; color: ${C.muted}; line-height: 1.5;">
  CIF: B16648487
</p>
<p style="margin: 12px 0 0; font-size: 10px; color: ${C.light}; line-height: 1.55;">
  Informaci\u00f3n sobre el tratamiento de datos personales en PLAQUISTAS Y ACABADOS, SL: Los datos personales se obtienen para formar parte de ficheros responsabilidad de PLAQUISTAS Y ACABADOS, SL (CIF: B16648487), \u00fanico destinatario de la informaci\u00f3n aportada voluntariamente por usted. Estos ficheros se utilizan para la gesti\u00f3n de contactos y correos electr\u00f3nicos, as\u00ed como la resoluci\u00f3n de consultas y comunicados v\u00eda telem\u00e1tica, lo cual no podr\u00e1 llevarse a cabo sin los datos personales. Los derechos de acceso, rectificaci\u00f3n, cancelaci\u00f3n y oposici\u00f3n podr\u00e1n ser ejercidos mediante escrito dirigido a Carrer Jacint Verdaguer 37, Esc A, 4, 2 &mdash; info@plaquistas.com.
</p>
<p style="margin: 10px 0 0; font-size: 10px; color: ${C.light}; line-height: 1.55;">
  Esta comunicaci\u00f3n es confidencial y va dirigida exclusivamente a la persona / puesto / departamento / entidad que figura/n como destinatario. Nuestra entidad cuenta con las medidas exigidas reglamentariamente para garantizar la seguridad de los datos.
</p>`

interface ContactData {
  nombre: string
  telefono: string
  email?: string
  descripcion?: string
  mensaje?: string
  tipo?: string
  paginaOrigen?: string
}

// ─────────────────────────────────────────────────────────
// EMAIL 1: Confirmación al cliente
// ─────────────────────────────────────────────────────────

export function buildClientConfirmationHtml(data: ContactData): string {
  const isPresupuesto = data.tipo === 'presupuesto'
  const firstName = data.nombre.split(' ')[0]

  return `
<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Hemos recibido tu solicitud — Pladur Menorca</title>
  <!--[if mso]>
  <style>table { border-collapse: collapse; }</style>
  <![endif]-->
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@1,700&display=swap');
    @media only screen and (max-width: 620px) {
      .outer-td { padding: 16px 12px !important; }
      .card { border-radius: 12px !important; }
      .header-td { padding: 24px 20px !important; }
      .body-td { padding: 24px 20px 8px !important; }
      .footer-td { padding: 20px !important; }
      .info-td { padding: 14px 16px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: ${C.bgOuter}; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: ${C.bgOuter};">
    <tr>
      <td align="center" class="outer-td" style="padding: 40px 16px;">
        <table role="presentation" class="card" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: ${C.bgCard}; border-radius: 16px; overflow: hidden;">

          <!-- Header with typography -->
          <tr>
            <td class="header-td" align="center" style="background-color: ${C.headerBg}; padding: 32px 40px;">
              <p style="margin: 0; color: ${C.white}; line-height: 1;">
                <span style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-weight: 700; font-style: italic; font-size: 26px; letter-spacing: 3px;">PLADUR MENORCA</span>
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td class="body-td" style="padding: 36px 40px 8px;">

              <h2 style="margin: 0 0 8px; font-size: 21px; font-weight: 700; color: ${C.heading};">
                \u00a1Hola ${escapeHtml(firstName)}!
              </h2>
              <p style="margin: 0 0 28px; font-size: 14px; color: ${C.body}; line-height: 1.65;">
                Hemos recibido tu solicitud correctamente. Nuestro equipo la revisar\u00e1 y te contactar\u00e1 lo antes posible.
              </p>

              <!-- Timeline -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 28px;">
                ${step(1, 'Solicitud recibida', 'Hemos registrado tu solicitud con todos los datos proporcionados.', true)}
                ${step(2, 'Revisi\u00f3n del equipo', 'Nuestro equipo t\u00e9cnico revisar\u00e1 los detalles de tu proyecto.', false)}
                ${step(3, 'Visita t\u00e9cnica', isPresupuesto ? 'En caso necesario coordinamos una visita para tomar medidas exactas in situ.' : 'Te llamaremos o escribiremos para resolver tu consulta.', false)}
                ${step(4, 'Presupuesto detallado', 'Recibir\u00e1s un presupuesto cerrado, sin sorpresas, en 24-48h.', false, true)}
              </table>

              <!-- Info box -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius: 10px; background-color: ${C.bgAlt}; border-left: 3px solid ${C.heading};">
                <tr>
                  <td class="info-td" style="padding: 16px 20px;">
                    <p style="margin: 0 0 4px; font-size: 13px; font-weight: 700; color: ${C.heading};">
                      \u00bfNecesitas algo urgente?
                    </p>
                    <p style="margin: 0 0 6px; font-size: 12px; color: ${C.body}; line-height: 1.5;">
                      Ll\u00e1manos al <a href="tel:${siteConfig.phoneRaw}" style="color: ${C.heading}; font-weight: 600; text-decoration: none;">${siteConfig.phone}</a> o escr\u00edbenos por <a href="https://wa.me/${siteConfig.whatsapp}" style="color: ${C.heading}; font-weight: 600; text-decoration: none;">WhatsApp</a>.
                    </p>
                    <p style="margin: 0; font-size: 12px; color: ${C.body}; line-height: 1.5;">
                      Tambi\u00e9n puedes escribirnos a <a href="mailto:info@plaquistas.com" style="color: ${C.heading}; font-weight: 600; text-decoration: none;">info@plaquistas.com</a> o visitarnos en <a href="https://www.pladurmenorca.com" style="color: ${C.heading}; font-weight: 600; text-decoration: none;">www.pladurmenorca.com</a>.
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="footer-td" style="padding: 28px 40px 32px; border-top: 1px solid ${C.borderLight};">
              ${LEGAL_FOOTER}
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim()
}

function step(num: number, title: string, desc: string, active: boolean, isLast = false): string {
  const bg = active ? C.headerBg : C.bgAlt
  const color = active ? C.white : C.muted
  const border = active ? '' : `border: 1px solid ${C.border};`

  return `
    <tr>
      <td style="padding: 0 0 ${isLast ? '0' : '14px'} 0;">
        <table role="presentation" cellpadding="0" cellspacing="0">
          <tr>
            <td style="vertical-align: top; padding-right: 14px;" width="34">
              <div style="width: 30px; height: 30px; border-radius: 50%; background-color: ${bg}; ${border} color: ${color}; font-size: 12px; font-weight: 700; text-align: center; line-height: ${active ? '30px' : '28px'};">
                ${active ? '&#10003;' : num}
              </div>
            </td>
            <td style="vertical-align: top;">
              <p style="margin: 0 0 2px; font-size: 13px; font-weight: 700; color: ${C.heading};">${title}</p>
              <p style="margin: 0; font-size: 12px; color: ${C.body}; line-height: 1.5;">${desc}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`
}

export function buildClientConfirmationText(data: ContactData): string {
  const name = data.nombre.split(' ')[0]
  return `\u00a1Hola ${name}!

Hemos recibido tu solicitud correctamente.

Pr\u00f3ximos pasos:
1. \u2713 Solicitud recibida
2. Revisi\u00f3n del equipo t\u00e9cnico
3. Visita t\u00e9cnica
4. Presupuesto detallado en 24-48h

\u00bfNecesitas algo urgente? Ll\u00e1manos al ${siteConfig.phone} o escr\u00edbenos por WhatsApp.
Tambi\u00e9n puedes escribirnos a info@plaquistas.com o visitarnos en www.pladurmenorca.com

---
PLAQUISTAS Y ACABADOS SL
CIF: B16648487
www.pladurmenorca.com`
}

// ─────────────────────────────────────────────────────────
// EMAIL 2: Notificaci\u00f3n interna
// ─────────────────────────────────────────────────────────

export function buildInternalNotificationHtml(
  data: ContactData,
  meta: { hasAttachments: boolean; attachmentNames?: string[]; ip?: string; paginaOrigen?: string }
): string {
  const tipoLabel = data.tipo === 'presupuesto' ? 'Presupuesto completo' : data.tipo === 'rapido' ? 'Contacto r\u00e1pido (CTA)' : 'Contacto'
  const now = new Date()
  const dateStr = now.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
  const timeStr = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })

  const rows: Array<{ label: string; value: string }> = [
    { label: 'Nombre', value: data.nombre },
    { label: 'Tel\u00e9fono', value: data.telefono },
    { label: 'Email', value: data.email || '(no proporcionado)' },
    { label: 'Descripci\u00f3n', value: data.descripcion || data.mensaje || '(sin descripci\u00f3n)' },
    { label: 'Tipo formulario', value: tipoLabel },
  ]

  if (meta.paginaOrigen) {
    rows.push({ label: 'P\u00e1gina origen', value: meta.paginaOrigen })
  }

  if (meta.hasAttachments && meta.attachmentNames) {
    rows.push({ label: 'Archivos adjuntos', value: meta.attachmentNames.join(', ') })
  }

  if (meta.ip) {
    rows.push({ label: 'IP', value: meta.ip })
  }

  const rowsHtml = rows
    .map(
      ({ label, value }, i) => `
      <tr>
        <td style="padding: 11px 16px; font-weight: 600; color: #404040; font-size: 13px; border-bottom: 1px solid #E8E4DF; width: 35%; vertical-align: top; background-color: ${i % 2 === 0 ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)'};">${label}</td>
        <td style="padding: 11px 16px; color: #737373; font-size: 13px; border-bottom: 1px solid #E8E4DF; word-break: break-word; background-color: ${i % 2 === 0 ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)'};">${escapeHtml(value)}</td>
      </tr>`
    )
    .join('')

  return `
<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>PLADUR MENORCA \u2014 ${escapeHtml(data.nombre)}</title>
  <!--[if mso]>
  <style>table { border-collapse: collapse; }</style>
  <![endif]-->
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,700&display=swap');
    @media only screen and (max-width: 620px) {
      .outer-td { padding: 12px 8px !important; }
      .header-td { padding: 20px 16px !important; }
      .body-td { padding: 16px !important; }
      .actions-td { padding: 16px !important; }
      .btn-td { display: block !important; padding: 0 0 8px !important; width: 100% !important; }
      .btn-td a { display: block !important; text-align: center !important; }
      .summary-td { padding: 12px 16px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #FDFCFB; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #FDFCFB;">
    <tr>
      <td align="center" class="outer-td" style="padding: 32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #FFFFFF; border-radius: 24px; overflow: hidden; border: 1px solid rgba(232,228,223,0.5); box-shadow: 0 2px 12px rgba(97,74,68,0.06);">

          <!-- Header -->
          <tr>
            <td class="header-td" style="background-color: #404040; padding: 24px 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin: 0 0 14px; color: #FFFFFF; line-height: 1;">
                      <span style="font-family: 'Inter', sans-serif; font-weight: 700; font-style: italic; font-size: 18px; letter-spacing: 2px;">PLADUR MENORCA</span>
                    </p>
                    <h1 style="margin: 0 0 10px; font-size: 18px; font-weight: 700; color: #FFFFFF; line-height: 1.3;">${escapeHtml(data.nombre)}</h1>
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-right: 10px;">
                          <span style="display: inline-block; padding: 3px 10px; border-radius: 8px; font-size: 11px; font-weight: 600; color: #404040; background-color: #F0F0F0;">${tipoLabel}</span>
                        </td>
                        <td>
                          <span style="font-size: 11px; color: rgba(255,255,255,0.5);">${dateStr} &middot; ${timeStr}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Summary bar -->
          <tr>
            <td class="summary-td" style="padding: 14px 28px; background-color: #FDFCFB; border-bottom: 1px solid #E8E4DF;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size: 12px; color: #737373;">
                    <span style="font-weight: 600; color: #333333;">${escapeHtml(data.telefono)}</span>
                    ${data.email ? `&nbsp;&middot;&nbsp; <span style="color: #404040;">${escapeHtml(data.email)}</span>` : ''}
                    ${meta.hasAttachments ? `&nbsp;&middot;&nbsp; <span style="color: #404040; font-weight: 600;">${meta.attachmentNames?.length || 0} archivo${(meta.attachmentNames?.length || 0) > 1 ? 's' : ''} adjunto${(meta.attachmentNames?.length || 0) > 1 ? 's' : ''}</span>` : ''}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Data table -->
          <tr>
            <td class="body-td" style="padding: 24px 28px 12px;">
              <p style="margin: 0 0 12px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #737373;">Datos de la solicitud</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #E8E4DF; border-radius: 12px; overflow: hidden;">
                ${rowsHtml}
              </table>
            </td>
          </tr>

          <!-- Quick actions -->
          <tr>
            <td class="actions-td" style="padding: 16px 28px 28px;">
              <p style="margin: 0 0 12px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #737373;">Acciones r\u00e1pidas</p>
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="btn-td" style="padding-right: 8px;">
                    <a href="tel:${data.telefono.replace(/[\s\-()]/g, '')}"
                       style="display: inline-block; padding: 10px 20px; background-color: #333333; color: #FFFFFF; text-decoration: none; font-size: 12px; font-weight: 700; border-radius: 12px;">
                      Llamar
                    </a>
                  </td>
                  ${data.email ? `
                  <td class="btn-td" style="padding-right: 8px;">
                    <a href="mailto:${data.email}?subject=Re: Tu solicitud \u2014 Pladur Menorca"
                       style="display: inline-block; padding: 10px 20px; background-color: #404040; color: #FFFFFF; text-decoration: none; font-size: 12px; font-weight: 700; border-radius: 12px;">
                      Email
                    </a>
                  </td>` : ''}
                  <td class="btn-td">
                    <a href="https://wa.me/${data.telefono.replace(/[\s\-+()]/g, '')}?text=Hola%20${encodeURIComponent(data.nombre.split(' ')[0])},%20soy%20de%20Pladur%20Menorca.%20Hemos%20recibido%20tu%20solicitud."
                       style="display: inline-block; padding: 10px 20px; background-color: #F5F3F0; color: #404040; text-decoration: none; font-size: 12px; font-weight: 700; border-radius: 12px; border: 1px solid rgba(232,228,223,0.6);">
                      WhatsApp
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 14px 28px; background-color: #FDFCFB; border-top: 1px solid #E8E4DF;">
              <p style="margin: 0; font-size: 10px; color: #737373;">
                Generado autom\u00e1ticamente por pladurmenorca.com &middot; ${dateStr}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim()
}

export function buildInternalNotificationText(
  data: ContactData,
  meta: { hasAttachments: boolean; attachmentNames?: string[]; paginaOrigen?: string }
): string {
  return `NUEVA SOLICITUD \u2014 ${data.tipo === 'presupuesto' ? 'PRESUPUESTO' : data.tipo === 'rapido' ? 'CONTACTO R\u00c1PIDO' : 'CONTACTO'}
${'='.repeat(50)}

Nombre: ${data.nombre}
Tel\u00e9fono: ${data.telefono}
Email: ${data.email || '(no proporcionado)'}
Descripci\u00f3n: ${data.descripcion || data.mensaje || '(sin descripci\u00f3n)'}
Tipo: ${data.tipo || 'contacto'}
${meta.paginaOrigen ? `P\u00e1gina origen: ${meta.paginaOrigen}\n` : ''}${meta.hasAttachments ? `Archivos: ${meta.attachmentNames?.join(', ')}\n` : ''}
---
Generado por pladurmenorca.com`
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br />')
}
