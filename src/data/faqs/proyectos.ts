import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const proyectosFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Cuántos proyectos habéis realizado en Menorca?',
      en: 'How many projects have you delivered in Menorca?',
    },
    respuesta: {
      es: 'Desde 2004 hemos completado más de 6.000 proyectos de pladur en toda la isla de Menorca. Incluyen desde reformas de pisos de 40 m² en Maó hasta villas de lujo en Ciutadella, oficinas, locales comerciales y reformas completas de hoteles en zona turística.',
      en: 'Since 2004 we have completed over 6,000 drywall projects across Menorca through our parent company. These range from 40 m² flat renovations in Maó to luxury villas in Ciutadella, offices, commercial premises and full hotel refurbishments in tourist areas.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto tarda un proyecto medio de pladur?',
      en: 'How long does an average drywall project take?',
    },
    respuesta: {
      es: 'Depende del alcance. Un falso techo de un salón (25-30 m²) se completa en 2-3 días. Una redistribución completa de un piso de 80 m² con tabiques, techos y aislamiento suele llevar entre 7 y 10 días laborables. Antes de empezar, siempre acordamos un calendario de ejecución detallado.',
      en: 'It depends on the scope. A living-room false ceiling (25-30 m²) is completed in 2-3 days. A full layout change in an 80 m² flat with partitions, ceilings and insulation typically takes 7-10 working days. Before starting we always agree a detailed execution schedule.',
    },
  },
  {
    pregunta: {
      es: '¿Puedo ver ejemplos de trabajos similares al mío?',
      en: 'Can I see examples of jobs similar to mine?',
    },
    respuesta: {
      es: 'Sí. En nuestra galería mostramos una selección representativa de proyectos reales. Si deseas ver trabajos similares al tuyo en detalle (mismo tipo de vivienda, misma zona o mismo servicio), contacta con nosotros y te facilitaremos referencias y fotos de proyectos comparables.',
      en: 'Yes. Our gallery shows a representative selection of real projects. If you would like to see detailed references similar to yours (same type of home, same area or same service), contact us and we will share comparable project references and photos.',
    },
  },
  {
    pregunta: {
      es: '¿Hacéis proyectos en toda la isla?',
      en: 'Do you carry out projects across the whole island?',
    },
    respuesta: {
      es: 'Sí. Cubrimos los 8 municipios de Menorca: Maó, Ciutadella, Alaior, Ferreries, Es Mercadal, Sant Lluís, Es Migjorn Gran y Es Castell, además de núcleos costeros y urbanizaciones turísticas de toda la isla. Damos presupuesto sin compromiso independientemente de la ubicación del proyecto.',
      en: 'Yes. We cover all 8 Menorca municipalities: Maó, Ciutadella, Alaior, Ferreries, Es Mercadal, Sant Lluís, Es Migjorn Gran and Es Castell, plus coastal settlements and tourist developments across the island. We issue a no-obligation quote regardless of the project location.',
    },
  },
]

export const getProyectosFaqs = (lang: Lang = 'es'): FAQ[] =>
  proyectosFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const proyectosFaqs: FAQ[] = getProyectosFaqs('es')
export const proyectosFaqsEn: FAQ[] = getProyectosFaqs('en')
