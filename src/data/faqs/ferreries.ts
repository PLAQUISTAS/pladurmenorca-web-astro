import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const ferreriesFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Qué zonas de Ferreries cubrís?',
      en: 'Which Ferreries areas do you cover?',
    },
    respuesta: {
      es: 'Todo el municipio de Ferreries: centro urbano, Santa Galdana, Cala Mitjana y Son Morell. Incluye las calas del sur accesibles desde Ferreries.',
      en: 'The whole Ferreries municipality: town centre, Santa Galdana, Cala Mitjana and Son Morell. Including the southern coves accessible from Ferreries.',
    },
  },
  {
    pregunta: {
      es: '¿Trabajáis en villas de Santa Galdana?',
      en: 'Do you work on villas in Santa Galdana?',
    },
    respuesta: {
      es: 'Sí. Santa Galdana es una de las zonas turísticas más demandadas. Realizamos falsos techos decorativos, aislamiento acústico entre dormitorios, pladur hidrófugo en baños y reformas rápidas entre temporadas.',
      en: 'Yes. Santa Galdana is one of the most sought-after tourist areas. We install decorative false ceilings, acoustic insulation between bedrooms, moisture-resistant drywall in bathrooms and fast refurbishments between seasons.',
    },
  },
  {
    pregunta: {
      es: '¿Qué retos tienen las casas de pueblo de Ferreries?',
      en: 'What challenges do Ferreries village houses present?',
    },
    respuesta: {
      es: 'Las casas de pueblo típicas tienen techos bajos y distribuciones compartimentadas. El pladur permite modernizar sin intervenir en la estructura: falsos techos para ocultar instalaciones modernas (climatización, iluminación LED) y tabiques ligeros para redistribuir.',
      en: 'Typical village houses have low ceilings and compartmentalised layouts. Drywall lets us modernise without touching the structure: false ceilings to conceal modern services (HVAC, LED lighting) and lightweight partitions to redistribute.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto cuesta reformar un apartamento turístico en Santa Galdana?',
      en: 'How much does it cost to refurbish a holiday rental in Santa Galdana?',
    },
    respuesta: {
      es: 'Una reforma básica (falsos techos + aislamiento + acabados) parte de 180-250 €/m². Una reforma más ambiciosa (redistribución + materiales premium) puede alcanzar los 400-600 €/m². Damos presupuesto cerrado tras visita técnica.',
      en: 'A basic refurbishment (false ceilings + insulation + finishes) starts at €180-€250/m². A more ambitious refurbishment (redistribution + premium materials) can reach €400-€600/m². We give a fixed quote after the site visit.',
    },
  },
  {
    pregunta: {
      es: '¿Cuál es el tiempo de respuesta para visita y presupuesto?',
      en: 'What is the turnaround for a site visit and quote?',
    },
    respuesta: {
      es: '24-72 horas para concertar visita y 24-48 horas para entregar presupuesto detallado. Las obras con fecha crítica (temporada turística) se priorizan.',
      en: '24-72 hours to book the visit and 24-48 hours to deliver the detailed quote. Jobs with critical deadlines (tourist season) are prioritised.',
    },
  },
  {
    pregunta: {
      es: '¿Coordináis con otros gremios?',
      en: 'Do you coordinate with other trades?',
    },
    respuesta: {
      es: 'Sí. Trabajamos habitualmente con electricistas, fontaneros, carpinteros y pintores. Podemos coordinar la obra completa o intervenir solo en la parte de pladur/escayola según prefiera el cliente.',
      en: 'Yes. We routinely work with electricians, plumbers, joiners and painters. We can coordinate the entire project or intervene only on the drywall/plaster portion, depending on the client\'s preference.',
    },
  },
  {
    pregunta: {
      es: '¿Ofrecéis garantía?',
      en: 'Do you offer a warranty?',
    },
    respuesta: {
      es: 'Sí: 1 año de garantía en mano de obra y garantía de fabricante en materiales (Placo, Knauf, Lafarge). Respuesta rápida ante incidencias.',
      en: 'Yes: 1-year workmanship warranty and manufacturer warranty on materials (Placo, Knauf, Lafarge). Quick response to any issue.',
    },
  },
]

export const getFerreriesFaqs = (lang: Lang = 'es'): FAQ[] =>
  ferreriesFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const ferreriesFaqs: FAQ[] = getFerreriesFaqs('es')
export const ferreriesFaqsEn: FAQ[] = getFerreriesFaqs('en')
