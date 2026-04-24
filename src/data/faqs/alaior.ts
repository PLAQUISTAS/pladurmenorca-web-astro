import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const alaiorFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Trabajáis en Alaior y las urbanizaciones costeras del sur?',
      en: 'Do you work in Alaior and the southern coastal developments?',
    },
    respuesta: {
      es: 'Sí. Cubrimos el casco urbano de Alaior y las urbanizaciones costeras: Son Bou, Torre Solí, Cala en Porter y Sa Plana.',
      en: 'Yes. We cover central Alaior and the coastal developments: Son Bou, Torre Solí, Cala en Porter and Sa Plana.',
    },
  },
  {
    pregunta: {
      es: '¿Qué retos tiene reformar casas de pueblo tradicionales en Alaior?',
      en: 'What challenges come with refurbishing traditional village houses in Alaior?',
    },
    respuesta: {
      es: 'Las casas de pueblo de Alaior suelen tener paredes gruesas y techos bajos. El pladur permite modernizar sin aumentar cargas: falsos techos continuos, tabiques ligeros para redistribuir sin sobrecargar forjados y trasdosados con aislamiento térmico sin perder espacio interior.',
      en: 'Alaior village houses usually have thick walls and low ceilings. Drywall lets us modernise without adding load: continuous false ceilings, lightweight partitions to redistribute without overloading slabs, and linings with thermal insulation without sacrificing interior space.',
    },
  },
  {
    pregunta: {
      es: '¿Hacéis reformas de apartamentos en Son Bou y Torre Solí?',
      en: 'Do you refurbish flats in Son Bou and Torre Solí?',
    },
    respuesta: {
      es: 'Sí. Trabajamos en urbanizaciones de Son Bou y Torre Solí con aislamiento acústico entre apartamentos (muy demandado por el uso turístico), pladur hidrófugo en baños, falsos techos con LED y pequeñas redistribuciones para optimizar planta.',
      en: 'Yes. We work in the Son Bou and Torre Solí developments with acoustic insulation between flats (highly requested for holiday use), moisture-resistant drywall in bathrooms, LED-integrated false ceilings and minor layout redistributions to optimise the floor plan.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto cuesta aislar acústicamente un apartamento en Son Bou?',
      en: 'How much does it cost to acoustically insulate a flat in Son Bou?',
    },
    respuesta: {
      es: 'El aislamiento acústico de una pared medianera entre apartamentos parte desde 7 €/m² como suplemento al trasdosado base. Un sistema completo de alta reducción (45-55 dB) en pared y techo puede costar entre 40 € y 80 €/m² según exigencia y superficie.',
      en: 'Acoustic insulation of a party wall between flats starts from €7/m² as an add-on to the base lining. A full high-reduction system (45-55 dB) on wall and ceiling can run €40-€80/m² depending on performance and area.',
    },
  },
  {
    pregunta: {
      es: '¿Cuál es vuestro tiempo de respuesta en Alaior?',
      en: 'What is your response time in Alaior?',
    },
    respuesta: {
      es: 'Concertamos visita técnica en 24-72 horas y entregamos presupuesto detallado en 24-48 horas tras la visita. Las obras con fecha crítica (temporada turística, apertura de comercio) se priorizan.',
      en: 'We book the site visit within 24-72 hours and deliver a detailed quote within 24-48 hours after the visit. Jobs with critical deadlines (tourist season, shop opening) are prioritised.',
    },
  },
  {
    pregunta: {
      es: '¿Trabajáis con propietarios que residen fuera de Menorca?',
      en: 'Do you work with owners who live outside Menorca?',
    },
    respuesta: {
      es: 'Sí, es habitual en las urbanizaciones costeras. Enviamos fotos y vídeos del avance, mantenemos contacto por WhatsApp/email y coordinamos entregas de llaves con administradores o empresas de gestión.',
      en: 'Yes, it is standard in the coastal developments. We send photos and videos of progress, stay in touch via WhatsApp/email and coordinate key handovers with property managers or letting agencies.',
    },
  },
  {
    pregunta: {
      es: '¿Ofrecéis garantía y certificaciones?',
      en: 'Do you offer a warranty and certifications?',
    },
    respuesta: {
      es: '1 año de garantía en mano de obra y garantía de fabricante en materiales (Placo, Knauf, Lafarge). Emitimos certificados para cumplimiento DB-SI (cortafuegos EI-30/EI-60/EI-90/EI-120) cuando el proyecto lo requiere.',
      en: '1-year workmanship warranty and manufacturer warranty on materials (Placo, Knauf, Lafarge). We issue certificates for DB-SI compliance (EI-30/EI-60/EI-90/EI-120 firebreaks) when the project requires it.',
    },
  },
]

export const getAlaiorFaqs = (lang: Lang = 'es'): FAQ[] =>
  alaiorFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const alaiorFaqs: FAQ[] = getAlaiorFaqs('es')
export const alaiorFaqsEn: FAQ[] = getAlaiorFaqs('en')
