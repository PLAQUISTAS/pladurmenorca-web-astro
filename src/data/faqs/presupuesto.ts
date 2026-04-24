import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const presupuestoFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Cuánto tarda en llegar el presupuesto?',
      en: 'How long does it take to receive the quote?',
    },
    respuesta: {
      es: 'Tras la visita técnica, enviamos el presupuesto detallado en 24-48 horas. En casos urgentes podemos reducir este plazo. El presupuesto es gratuito y sin compromiso.',
      en: 'After the technical visit, we send the detailed quote within 24-48 hours. For urgent cases we can shorten this lead time. The quote is free and no-obligation.',
    },
  },
]

export const getPresupuestoFaqs = (lang: Lang = 'es'): FAQ[] =>
  presupuestoFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const presupuestoFaqs: FAQ[] = getPresupuestoFaqs('es')
export const presupuestoFaqsEn: FAQ[] = getPresupuestoFaqs('en')
