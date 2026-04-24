import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const esMigjornGranFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Cubrís Es Migjorn Gran a pesar de ser un municipio pequeño?',
      en: 'Do you cover Es Migjorn Gran despite being a small municipality?',
    },
    respuesta: {
      es: 'Sí. Atendemos Es Migjorn Gran pueblo y las urbanizaciones costeras (Santo Tomás, Sant Adeodat) con el mismo equipo y plazos que en el resto de Menorca.',
      en: 'Yes. We serve Es Migjorn Gran village and the coastal developments (Sant Tomàs, Sant Adeodat) with the same crew and timelines as the rest of Menorca.',
    },
  },
  {
    pregunta: {
      es: '¿Qué trabajos hacéis en Santo Tomás?',
      en: 'What work do you carry out in Sant Tomàs?',
    },
    respuesta: {
      es: 'En Santo Tomás y Sant Adeodat predominan apartamentos vacacionales de gama media-alta. Realizamos falsos techos, aislamiento acústico, pladur hidrófugo en baños y reformas de cara a la temporada.',
      en: 'In Sant Tomàs and Sant Adeodat, mid-to-high-end holiday flats dominate. We install false ceilings, acoustic insulation, moisture-resistant drywall in bathrooms and season-ready refurbishments.',
    },
  },
  {
    pregunta: {
      es: '¿Cómo tratáis la humedad salina en viviendas de primera línea?',
      en: 'How do you handle salt-laden damp in front-row homes?',
    },
    respuesta: {
      es: 'Placa hidrófuga (H1/H2) en baños y zonas con condensación, estructura metálica galvanizada de alta resistencia, ventilación adecuada y si es necesario barrera de vapor. La humedad salina requiere planteamiento específico desde el diseño.',
      en: 'Moisture-resistant board (H1/H2) in bathrooms and condensation-prone areas, high-grade galvanised metal framing, adequate ventilation and a vapour barrier where necessary. Salt-laden damp demands a specific approach from the design stage.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto cuesta un falso techo con aislamiento en Santo Tomás?',
      en: 'How much does an insulated false ceiling cost in Sant Tomàs?',
    },
    respuesta: {
      es: 'Un falso techo con aislamiento acústico ronda los 36-52 €/m² y con aislamiento térmico combinado 36-60 €/m². El presupuesto es siempre gratuito y sin compromiso.',
      en: 'A false ceiling with acoustic insulation runs around €36-€52/m², and with combined thermal insulation €36-€60/m². The quote is always free and no-obligation.',
    },
  },
  {
    pregunta: {
      es: '¿Ofrecéis plazos ajustados para reformas entre temporadas?',
      en: 'Do you offer tight timelines for between-season refurbishments?',
    },
    respuesta: {
      es: 'Sí. Planificamos obras entre noviembre y marzo con plazos comprometidos para llegar a la siguiente temporada. Coordinamos material y equipo con antelación.',
      en: 'Yes. We schedule works between November and March with committed deadlines to be ready for the next season. We coordinate materials and crew well in advance.',
    },
  },
  {
    pregunta: {
      es: '¿Trabajáis con comunidades de propietarios?',
      en: 'Do you work with homeowners\' associations?',
    },
    respuesta: {
      es: 'Sí. Coordinamos horarios y niveles de ruido con la comunidad, garantizamos limpieza diaria y cumplimos la normativa municipal.',
      en: 'Yes. We coordinate hours and noise levels with the association, guarantee daily cleaning and comply with the municipal by-laws.',
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

export const getEsMigjornGranFaqs = (lang: Lang = 'es'): FAQ[] =>
  esMigjornGranFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const esMigjornGranFaqs: FAQ[] = getEsMigjornGranFaqs('es')
export const esMigjornGranFaqsEn: FAQ[] = getEsMigjornGranFaqs('en')
