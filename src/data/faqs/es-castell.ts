import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const esCastellFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Qué zonas de Es Castell cubrís?',
      en: 'Which Es Castell areas do you cover?',
    },
    respuesta: {
      es: 'Todo el municipio: centro de Es Castell, Cala Sant Esteve, Sol del Este y Cala Corb, junto al Puerto de Maó.',
      en: 'The whole municipality: central Es Castell, Cala Sant Esteve, Sol del Este, Cala Corb and Cales Fonts, next to the Port de Maó.',
    },
  },
  {
    pregunta: {
      es: '¿Trabajáis en casas coloniales británicas?',
      en: 'Do you work on British colonial houses?',
    },
    respuesta: {
      es: 'Sí. Es Castell conserva arquitectura colonial británica única. Intervenimos respetando la estructura original: reposición de techos con escayola, trasdosados interiores para aislamiento sin alterar fachadas y redistribuciones con tabiques ligeros.',
      en: 'Yes. Es Castell preserves unique 18th-century British colonial architecture. We intervene while respecting the original structure: plaster ceiling restoration, interior linings for insulation without altering façades, and layout redistributions with lightweight partitions.',
    },
  },
  {
    pregunta: {
      es: '¿Ofrecéis atención bilingüe (ES/EN)?',
      en: 'Do you offer bilingual service (ES/EN)?',
    },
    respuesta: {
      es: 'Sí. La comunidad británica y alemana de Es Castell puede contactarnos en español o inglés. Enviamos presupuestos y comunicaciones en el idioma preferido.',
      en: 'Yes. The British and German communities of Es Castell can contact us in Spanish or English. We send quotes and communications in the preferred language.',
    },
  },
  {
    pregunta: {
      es: '¿Qué soluciones proponéis contra la humedad salina?',
      en: 'What solutions do you propose against salt-laden damp?',
    },
    respuesta: {
      es: 'Placa hidrófuga en baños y zonas húmedas, estructura metálica galvanizada, tratamiento de puntos críticos (uniones pared-techo, juntas) y ventilación planificada. Fundamental en primera línea de costa.',
      en: 'Moisture-resistant board in bathrooms and wet areas, galvanised metal framing, treatment of critical points (wall-ceiling junctions, joints) and planned ventilation. Essential on the coastal front row.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto cuesta reformar un baño con pladur hidrófugo?',
      en: 'How much does it cost to refurbish a bathroom with moisture-resistant drywall?',
    },
    respuesta: {
      es: 'El tabique o trasdosado con placa hidrófuga parte de 36 €/m². La reforma completa del baño (con alicatado, sanitarios y fontanería) varía mucho según el acabado y suele moverse entre 4.000 € y 12.000 € por baño.',
      en: 'The partition or lining with moisture-resistant board starts at €36/m². A full bathroom refurbishment (with tiling, sanitaryware and plumbing) varies widely by finish and typically runs €4,000-€12,000 per bathroom.',
    },
  },
  {
    pregunta: {
      es: '¿Cuál es el plazo habitual para una reforma en Es Castell?',
      en: 'What is the typical timeline for an Es Castell refurbishment?',
    },
    respuesta: {
      es: 'Un baño: 1-2 semanas. Un apartamento completo: 3-5 semanas. Una villa grande: 6-10 semanas. Plazo cerrado y cumplido.',
      en: 'A bathroom: 1-2 weeks. A full flat: 3-5 weeks. A large villa: 6-10 weeks. Fixed and delivered timeline.',
    },
  },
  {
    pregunta: {
      es: '¿Ofrecéis garantía?',
      en: 'Do you offer a warranty?',
    },
    respuesta: {
      es: '1 año de garantía en mano de obra y garantía de fabricante en materiales (Placo, Knauf, Lafarge).',
      en: '1-year workmanship warranty and manufacturer warranty on materials (Placo, Knauf, Lafarge).',
    },
  },
]

export const getEsCastellFaqs = (lang: Lang = 'es'): FAQ[] =>
  esCastellFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const esCastellFaqs: FAQ[] = getEsCastellFaqs('es')
export const esCastellFaqsEn: FAQ[] = getEsCastellFaqs('en')
