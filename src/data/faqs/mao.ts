import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const maoFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Trabajáis en todos los barrios de Maó?',
      en: 'Do you work in every Maó neighbourhood?',
    },
    respuesta: {
      es: 'Sí, trabajamos en todos los barrios de Maó: Centro Histórico, Puerto de Maó, Sant Climent, Trepucó, Malbúger, Cala Llonga y el entorno hasta Es Castell. El desplazamiento dentro del término municipal es siempre gratuito.',
      en: 'Yes, we work in every Maó neighbourhood: Old Town, Port de Maó, Sant Climent, Trepucó, Malbúger, Cala Llonga and the surroundings up to Es Castell. Travel within the municipality is always free of charge.',
    },
  },
  {
    pregunta: {
      es: '¿Podéis acceder a pisos del casco antiguo de Maó con escaleras estrechas?',
      en: 'Can you access flats in Maó\'s old town with narrow staircases?',
    },
    respuesta: {
      es: 'Sí. Tenemos experiencia trabajando en edificios del casco antiguo de Maó, con escaleras estrechas, sin ascensor y espacios complicados. Usamos material de pequeño formato y herramientas que permiten trabajar en cualquier tipo de acceso sin problema.',
      en: 'Yes. We have experience working in buildings in Maó\'s old town, with narrow staircases, no lift and tricky spaces. We use small-format materials and tools that allow us to work in any type of access without issue.',
    },
  },
  {
    pregunta: {
      es: '¿Qué tipo de trabajos de pladur hacéis en Maó?',
      en: 'What types of drywall work do you carry out in Maó?',
    },
    respuesta: {
      es: 'Realizamos toda la gama: tabiques de distribución para separar habitaciones, falsos techos con iluminación LED integrada, trasdosados de fachada para aislar del ruido y del viento del norte, aislamiento acústico entre viviendas, reformas integrales de pisos y locales comerciales. También instalamos placa hidrófuga en baños y cocinas.',
      en: 'We cover the full range: partition walls to split rooms, false ceilings with integrated LED lighting, façade linings to insulate from noise and the northern tramuntana wind, acoustic insulation between flats, full renovations of homes and commercial premises. We also install moisture-resistant board in bathrooms and kitchens.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto cuesta un tabique de pladur en Maó?',
      en: 'How much does a drywall partition cost in Maó?',
    },
    respuesta: {
      es: 'En Maó, un tabique de pladur sencillo parte desde 46 €/m² instalado. Un tabique acústico de doble capa con aislamiento cuesta entre 53 € y 60 €/m². El precio incluye estructura metálica, placas, tratamiento de juntas y acabado listo para pintar. Ofrecemos presupuesto gratuito y sin compromiso en todo el municipio.',
      en: 'In Maó, a simple drywall partition starts from €46/m² installed. A double-layer acoustic partition with insulation runs €53-€60/m². The price includes metal framing, boards, joint treatment and a paint-ready finish. We offer a free no-obligation quote anywhere in the municipality.',
    },
  },
  {
    pregunta: {
      es: '¿Hacéis reformas de locales comerciales y restaurantes del puerto de Maó?',
      en: 'Do you renovate commercial premises and restaurants at the Port de Maó?',
    },
    respuesta: {
      es: 'Sí, es una parte importante de nuestro trabajo. El entorno del Puerto de Maó concentra restaurantes, locales de ocio y comercios donde realizamos tabiquería para distribución, falsos techos con climatización empotrada, aislamiento acústico para cumplir normativa municipal de ruido y tabiques ignífugos certificados (EI-60/EI-90).',
      en: 'Yes, it is a significant part of our work. The Port de Maó area concentrates restaurants, leisure venues and shops where we install partition walls for layout, false ceilings with integrated HVAC, acoustic insulation to comply with the municipal noise by-law, and certified fire-rated partitions (EI-60/EI-90).',
    },
  },
  {
    pregunta: {
      es: '¿Cuál es el tiempo de respuesta para un presupuesto en Maó?',
      en: 'What is the quote turnaround time in Maó?',
    },
    respuesta: {
      es: 'Normalmente concertamos la visita técnica en 24-72 horas y enviamos el presupuesto detallado en 24 horas tras la visita. Si la obra tiene fecha límite (reforma entre temporadas, apertura de local), priorizamos la respuesta.',
      en: 'We usually book the site visit within 24-72 hours and send the detailed quote within 24 hours after the visit. If the job has a hard deadline (between-season refurbishment, shop opening), we prioritise the response.',
    },
  },
  {
    pregunta: {
      es: '¿Trabajáis en edificios con comunidad de propietarios?',
      en: 'Do you work in buildings with a homeowners\' association?',
    },
    respuesta: {
      es: 'Sí, habitualmente. Coordinamos con el administrador de fincas y cumplimos los horarios de obra marcados por la comunidad. En el casco antiguo de Maó las comunidades suelen tener restricciones de horario y ruido; nos adaptamos y garantizamos limpieza diaria de la zona de trabajo.',
      en: 'Yes, routinely. We coordinate with the property manager and comply with the work hours set by the association. In Maó\'s old town, associations usually impose time and noise restrictions; we adapt and guarantee daily cleaning of the work area.',
    },
  },
  {
    pregunta: {
      es: '¿Ofrecéis garantía en los trabajos realizados en Maó?',
      en: 'Do you offer a warranty on work carried out in Maó?',
    },
    respuesta: {
      es: 'Sí. Todos nuestros trabajos incluyen garantía de 1 año en mano de obra. Los materiales (Placo, Knauf, Lafarge) tienen garantía del fabricante. Damos respuesta rápida ante cualquier incidencia dentro del período de garantía. Somos la empresa de pladur con estructura empresarial consolidada y respaldo de +6.000 proyectos en Baleares.',
      en: 'Yes. All our work includes a 1-year workmanship warranty. Materials (Placo, Knauf, Lafarge) carry a manufacturer warranty. We respond quickly to any issue during the warranty period. We are the drywall company with a consolidated corporate structure backed by more than 6,000 projects across the Balearics.',
    },
  },
]

export const getMaoFaqs = (lang: Lang = 'es'): FAQ[] =>
  maoFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const maoFaqs: FAQ[] = getMaoFaqs('es')
export const maoFaqsEn: FAQ[] = getMaoFaqs('en')
