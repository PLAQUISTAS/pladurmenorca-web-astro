import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const ciutadellaFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Trabajáis en todo el municipio de Ciutadella?',
      en: 'Do you work across the whole Ciutadella municipality?',
    },
    respuesta: {
      es: 'Sí, cubrimos todo el municipio: Casco Histórico, Cala en Bosc, Son Xoriguer, Cala Santandria, Son Oleo, Cala Blanca y Sa Caleta.',
      en: 'Yes, we cover the whole municipality: Old Town, Cala en Bosc, Son Xoriguer, Cala Santandria, Son Oleo, Cala Blanca and Sa Caleta.',
    },
  },
  {
    pregunta: {
      es: '¿Realizáis trabajos en edificios del casco histórico protegido?',
      en: 'Do you work in buildings within the listed old town?',
    },
    respuesta: {
      es: 'Sí. Somos especialistas en intervenciones compatibles con la protección patrimonial: reposición de techos de escayola y molduras, trasdosados interiores que respetan fachadas catalogadas, instalación de pladur en distribuciones nuevas sin agresión a la estructura original.',
      en: 'Yes. We specialise in heritage-compatible interventions: replacing plaster ceilings and cornices, interior linings that respect listed façades, and drywall installations for new layouts without damaging the original structure.',
    },
  },
  {
    pregunta: {
      es: '¿Hacéis reformas de villas en Cala en Bosc y Son Xoriguer?',
      en: 'Do you refurbish villas in Cala en Bosc and Son Xoriguer?',
    },
    respuesta: {
      es: 'Sí, es una parte importante de nuestro trabajo en Ciutadella. Las villas de la costa sur demandan acabados de gama media-alta: falsos techos decorativos, aislamiento térmico por trasdosado interior, pladur hidrófugo en baños y aislamiento acústico entre dormitorios.',
      en: 'Yes, it is a key part of our Ciutadella workload. South-coast villas call for mid-to-high-end finishes: decorative false ceilings, interior thermal linings, moisture-resistant drywall in bathrooms and acoustic insulation between bedrooms.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto cuesta un falso techo de pladur en Ciutadella?',
      en: 'How much does a drywall false ceiling cost in Ciutadella?',
    },
    respuesta: {
      es: 'Desde 30 €/m² para un techo continuo básico, hasta 52 €/m² para techos con aislamiento acústico reforzado. Los falsos techos decorativos con molduras o integración LED pueden alcanzar los 77 €/m². El presupuesto es siempre gratuito y sin compromiso.',
      en: 'From €30/m² for a basic continuous ceiling, up to €52/m² for ceilings with reinforced acoustic insulation. Decorative false ceilings with cornices or integrated LED can reach €77/m². The quote is always free and no-obligation.',
    },
  },
  {
    pregunta: {
      es: '¿Podéis reformar apartamentos turísticos entre temporadas?',
      en: 'Can you refurbish holiday rentals between seasons?',
    },
    respuesta: {
      es: 'Sí. Planificamos las obras entre noviembre y marzo con plazos comprometidos para llegar a tiempo a la siguiente temporada. Coordinamos visitas, materiales y equipo para minimizar tiempos y garantizar apertura puntual.',
      en: 'Yes. We schedule works between November and March with committed deadlines to be ready for the following season. We coordinate visits, materials and crew to minimise downtime and guarantee a punctual opening.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto tarda una reforma completa en Ciutadella?',
      en: 'How long does a full refurbishment take in Ciutadella?',
    },
    respuesta: {
      es: 'Una reforma integral de villa puede tardar entre 2 y 6 semanas según superficie y alcance. Una reforma de apartamento turístico entre 1 y 3 semanas. Damos plazo cerrado en el presupuesto y lo cumplimos.',
      en: 'A full villa renovation can take 2 to 6 weeks depending on size and scope. A holiday-rental refurbishment takes 1 to 3 weeks. We give a fixed timeline in the quote and we stick to it.',
    },
  },
  {
    pregunta: {
      es: '¿Trabajáis con arquitectos y estudios de Ciutadella?',
      en: 'Do you work with Ciutadella architects and studios?',
    },
    respuesta: {
      es: 'Sí. Colaboramos habitualmente con arquitectos y estudios para ejecutar sus proyectos: fichas técnicas, replanteos, certificados de instalación para DB-SI cuando corresponde, y coordinación con otros gremios.',
      en: 'Yes. We regularly partner with architects and studios to deliver their projects: technical datasheets, on-site layout, installation certificates for DB-SI where applicable, and coordination with other trades.',
    },
  },
  {
    pregunta: {
      es: '¿Ofrecéis garantía en los trabajos en Ciutadella?',
      en: 'Do you offer a warranty on Ciutadella projects?',
    },
    respuesta: {
      es: 'Sí: 1 año de garantía en mano de obra, más la garantía de fabricante en materiales (Placo, Knauf, Lafarge). Respuesta rápida ante incidencias dentro del período de garantía.',
      en: 'Yes: 1-year workmanship warranty, plus the manufacturer warranty on materials (Placo, Knauf, Lafarge). Quick response to any issue within the warranty period.',
    },
  },
]

export const getCiutadellaFaqs = (lang: Lang = 'es'): FAQ[] =>
  ciutadellaFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const ciutadellaFaqs: FAQ[] = getCiutadellaFaqs('es')
export const ciutadellaFaqsEn: FAQ[] = getCiutadellaFaqs('en')
