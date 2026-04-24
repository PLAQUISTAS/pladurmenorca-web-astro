import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const contactoFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Cuánto tardáis en responder a una solicitud de presupuesto?',
      en: 'How long do you take to reply to a quote request?',
    },
    respuesta: {
      es: 'Respondemos a todas las solicitudes en menos de 24 horas en días laborables. Si contactas por teléfono o WhatsApp en horario laboral (lunes a viernes de 8:00 a 18:00, sábados de 8:00 a 14:00), la respuesta es inmediata.',
      en: 'We reply to every request within 24 working hours. If you contact us by phone or WhatsApp during working hours (Monday to Friday 8:00-18:00, Saturdays 8:00-14:00), the reply is immediate.',
    },
  },
  {
    pregunta: {
      es: '¿Qué información necesitáis para preparar un presupuesto?',
      en: 'What information do you need to prepare a quote?',
    },
    respuesta: {
      es: 'Para una primera orientación basta con describir el trabajo (tipo de servicio, superficie aproximada y ubicación). Para el presupuesto definitivo realizamos siempre una visita técnica donde tomamos medidas reales y evaluamos las condiciones del espacio.',
      en: 'For an initial estimate it is enough to describe the job (type of service, approximate area and location). For the final quote we always carry out a technical visit where we take real measurements and assess the space conditions.',
    },
  },
  {
    pregunta: {
      es: '¿Puedo contactar fuera del horario laboral?',
      en: 'Can I contact you outside working hours?',
    },
    respuesta: {
      es: 'Sí. Puedes enviarnos un mensaje por WhatsApp, email o rellenar el formulario en cualquier momento. Te responderemos a primera hora del siguiente día laborable. Nuestro horario de atención es de lunes a viernes de 8:00 a 18:00 y sábados de 8:00 a 14:00.',
      en: 'Yes. You can send us a WhatsApp message, email or fill in the form at any time. We will reply first thing on the next working day. Our opening hours are Monday to Friday 8:00-18:00 and Saturdays 8:00-14:00.',
    },
  },
]

export const getContactoFaqs = (lang: Lang = 'es'): FAQ[] =>
  contactoFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const contactoFaqs: FAQ[] = getContactoFaqs('es')
export const contactoFaqsEn: FAQ[] = getContactoFaqs('en')
