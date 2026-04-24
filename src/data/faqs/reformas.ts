import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const reformasFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Qué tipo de reformas hace vuestra empresa?',
      en: 'What kind of renovations does your company do?',
    },
    respuesta: {
      es: 'Nos especializamos exclusivamente en reformas con sistemas de pladur (yeso laminado): redistribución de espacios con tabiques, instalación de falsos techos, mejora del aislamiento acústico y térmico, y trasdosados. No realizamos reformas de cocinas, baños ni fontanería.',
      en: 'We specialise exclusively in renovations with drywall (plasterboard) systems: space redistribution with partitions, false-ceiling installation, acoustic and thermal insulation upgrades, and wall linings. We do not carry out kitchen, bathroom or plumbing renovations.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto cuesta una reforma de piso con pladur?',
      en: 'How much does a drywall flat renovation cost?',
    },
    respuesta: {
      es: 'Una reforma media de 80m² con falso techo y redistribución de tabiques puede costar entre 6.000 y 15.000€ dependiendo de la complejidad. Lo mejor es pedir presupuesto personalizado: es gratis y lo recibirás en 24-48h.',
      en: 'An average 80 m² renovation with a false ceiling and partition redistribution can cost €6,000-15,000 depending on complexity. The best option is to request a personalised quote: it is free and you will receive it within 24-48 h.',
    },
  },
]

export const getReformasFaqs = (lang: Lang = 'es'): FAQ[] =>
  reformasFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const reformasFaqs: FAQ[] = getReformasFaqs('es')
export const reformasFaqsEn: FAQ[] = getReformasFaqs('en')
