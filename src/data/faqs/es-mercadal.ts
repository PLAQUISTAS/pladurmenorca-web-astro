import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const esMercadalFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Qué zonas de Es Mercadal cubrís?',
      en: 'Which Es Mercadal areas do you cover?',
    },
    respuesta: {
      es: 'Todo el municipio: Es Mercadal centro, Fornells, Arenal d\'en Castell, Son Parc y Platges de Fornells.',
      en: 'The whole municipality: central Es Mercadal, Fornells, Arenal d\'en Castell, Son Parc and Platges de Fornells.',
    },
  },
  {
    pregunta: {
      es: '¿Trabajáis en restaurantes y locales de Fornells?',
      en: 'Do you work in restaurants and premises in Fornells?',
    },
    respuesta: {
      es: 'Sí. Fornells concentra restauración gastronómica de nivel y locales náuticos. Realizamos tabiquería para distribución, falsos techos registrables para climatización, aislamiento acústico entre sala y cocina, pladur hidrófugo para zonas húmedas y tabiques cortafuegos (EI-60/EI-90) exigidos por normativa.',
      en: 'Yes. Fornells concentrates top-tier gastronomic restaurants (famous for its caldereta de langosta) and nautical premises. We install partition walls for layout, accessible false ceilings for HVAC, acoustic insulation between dining room and kitchen, moisture-resistant drywall for wet areas and fire-rated partitions (EI-60/EI-90) required by regulation.',
    },
  },
  {
    pregunta: {
      es: '¿Hacéis reformas en villas de Son Parc?',
      en: 'Do you refurbish villas in Son Parc?',
    },
    respuesta: {
      es: 'Sí. Son Parc concentra villas y apartamentos residenciales alrededor del campo de golf. Trabajamos en reformas integrales con falsos techos decorativos, aislamiento térmico y acústico, pladur hidrófugo en baños y redistribuciones completas.',
      en: 'Yes. Son Parc hosts villas and residential flats around the golf course. We handle full renovations with decorative false ceilings, thermal and acoustic insulation, moisture-resistant drywall in bathrooms and complete layout redistributions.',
    },
  },
  {
    pregunta: {
      es: '¿Cómo se combate la humedad por proximidad al mar en Fornells?',
      en: 'How do you tackle sea-proximity damp in Fornells?',
    },
    respuesta: {
      es: 'En entornos costeros como Fornells recomendamos placa hidrófuga (H1/H2 — "placa verde") en baños, cocinas y zonas con condensación. La estructura metálica que usamos es galvanizada de alta resistencia para tolerar la humedad salina.',
      en: 'In coastal settings like Fornells we recommend moisture-resistant board (H1/H2 — the "green board") in bathrooms, kitchens and areas prone to condensation. The metal framing we use is high-grade galvanised to withstand salt-laden damp.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto cuesta un falso techo en Es Mercadal?',
      en: 'How much does a false ceiling cost in Es Mercadal?',
    },
    respuesta: {
      es: 'Un falso techo continuo básico parte de 30 €/m². Con aislamiento acústico: 36-52 €/m². Con integración LED: 48-77 €/m². El presupuesto es gratuito y sin compromiso.',
      en: 'A basic continuous false ceiling starts at €30/m². With acoustic insulation: €36-€52/m². With LED integration: €48-€77/m². The quote is free and no-obligation.',
    },
  },
  {
    pregunta: {
      es: '¿Cuál es el plazo habitual para una reforma en Son Parc?',
      en: 'What is the typical timeline for a Son Parc refurbishment?',
    },
    respuesta: {
      es: 'Una reforma de apartamento (2-3 habitaciones) suele tardar 2-4 semanas. Una reforma integral de villa grande, 5-8 semanas. Damos plazo cerrado y lo cumplimos.',
      en: 'A flat refurbishment (2-3 bedrooms) usually takes 2-4 weeks. A full renovation of a large villa, 5-8 weeks. We give a fixed timeline and we stick to it.',
    },
  },
  {
    pregunta: {
      es: '¿Ofrecéis certificados para cumplimiento CTE-HR o DB-SI?',
      en: 'Do you issue certificates for CTE-HR or DB-SI compliance?',
    },
    respuesta: {
      es: 'Sí. Emitimos certificados de instalación para sistemas acústicos CTE-HR (hoteles, apartamentos) y cortafuegos DB-SI (restaurantes, locales). Trabajamos con materiales y sistemas certificados Placo y Knauf.',
      en: 'Yes. We issue installation certificates for CTE-HR acoustic systems (hotels, flats) and DB-SI firebreaks (restaurants, commercial premises). We work with certified Placo and Knauf materials and systems.',
    },
  },
]

export const getEsMercadalFaqs = (lang: Lang = 'es'): FAQ[] =>
  esMercadalFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const esMercadalFaqs: FAQ[] = getEsMercadalFaqs('es')
export const esMercadalFaqsEn: FAQ[] = getEsMercadalFaqs('en')
