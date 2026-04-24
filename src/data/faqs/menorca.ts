import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const menorcaFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿En qué municipios de Menorca trabajáis?',
      en: 'Which Menorca municipalities do you cover?',
    },
    respuesta: {
      es: 'Trabajamos en los 8 municipios de Menorca: Maó, Ciutadella, Alaior, Ferreries, Es Mercadal, Sant Lluís, Es Migjorn Gran y Es Castell. También cubrimos los núcleos costeros y urbanizaciones turísticas de toda la isla: Cala en Bosc, Son Xoriguer, Punta Prima, Binibeca, Arenal d’en Castell, Son Parc, Son Bou, Cala en Porter, Santa Galdana, Cala Mitjana, Fornells, Cala Llonga o Sant Tomàs, entre otros.',
      en: 'We work in all 8 Menorca municipalities: Maó, Ciutadella, Alaior, Ferreries, Es Mercadal, Sant Lluís, Es Migjorn Gran and Es Castell. We also cover the coastal settlements and tourist developments across the island: Cala en Bosc, Son Xoriguer, Punta Prima, Binibeca, Arenal d\'en Castell, Son Parc, Son Bou, Cala en Porter, Santa Galdana, Cala Mitjana, Fornells, Cala Llonga and Sant Tomàs, among others.',
    },
  },
  {
    pregunta: {
      es: '¿Cómo se calcula el coste de desplazamiento?',
      en: 'How is the travel cost calculated?',
    },
    respuesta: {
      es: 'El desplazamiento va incluido de forma transparente dentro del presupuesto cerrado. Nuestra SL matriz está en Mallorca, así que los equipos se desplazan a Menorca por proyecto: en lugar de aplicar un cargo sorpresa al final de la obra, el coste logístico queda reflejado desde el primer momento en el presupuesto, junto con materiales y mano de obra. El precio que ves es el precio que pagas. El presupuesto es siempre gratuito y sin compromiso, sea cual sea el municipio.',
      en: 'Travel is included transparently within the fixed quote. Our parent company is based in Mallorca, so crews travel to Menorca on a per-project basis: instead of adding a surprise charge at the end, the logistics cost is reflected upfront in the quote alongside materials and labour. The price you see is the price you pay. The quote is always free and no-obligation, regardless of the municipality.',
    },
  },
  {
    pregunta: {
      es: '¿Los precios del pladur varían según el municipio?',
      en: 'Do drywall prices vary by municipality?',
    },
    respuesta: {
      es: 'Las tarifas por m² son las mismas en toda Menorca: falsos techos desde 29 €/m², tabiques desde 45 €/m² y aislamiento acústico desde 6 €/m². El presupuesto se ajusta según la complejidad del proyecto, los materiales y la logística (desplazamiento del equipo y transporte de materiales, incluidos de forma transparente). El precio que ves es el precio que pagas.',
      en: 'The €/m² rates are the same across Menorca: false ceilings from €29/m², partitions from €45/m² and acoustic insulation from €6/m². The quote is adjusted by project complexity, materials and logistics (crew travel and materials transport, transparently included). The price you see is the price you pay.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto tardáis en acudir a una visita técnica fuera de Maó?',
      en: 'How long do you take for a site visit outside Maó?',
    },
    respuesta: {
      es: 'Normalmente concertamos la visita técnica en 24-72 horas para cualquier punto de Menorca. Organizamos las visitas por zonas para ser eficientes: un día en la zona oeste (Ciutadella, Ferreries y Cala en Bosc), otro en el centro-norte (Es Mercadal, Fornells, Son Parc) y otro en el entorno de Maó (Sant Lluís, Es Castell, Binibeca).',
      en: 'We usually book the site visit within 24-72 hours anywhere in Menorca. We organise visits by zone for efficiency: one day in the west (Ciutadella, Ferreries and Cala en Bosc), another in the central-north (Es Mercadal, Fornells, Son Parc) and another around Maó (Sant Lluís, Es Castell, Binibeca).',
    },
  },
  {
    pregunta: {
      es: '¿Podéis hacer reformas de pladur en fincas rústicas o llocs?',
      en: 'Can you carry out drywall renovations on rural fincas or llocs?',
    },
    respuesta: {
      es: 'Sí. Tenemos experiencia en reformas de llocs (fincas rústicas tradicionales menorquinas), cases senyorials y casas de campo aisladas de toda la isla. El pladur es especialmente adecuado para estas propiedades porque permite modernizar interiores y mejorar el aislamiento sin alterar la estructura original de marès o piedra.',
      en: 'Yes. We have experience renovating llocs (traditional Menorcan rural fincas), cases senyorials and detached country houses across the island. Drywall is especially well suited to these properties because it lets you modernise interiors and improve insulation without touching the original marès or stone structure.',
    },
  },
  {
    pregunta: {
      es: '¿Qué diferencia hay entre vuestro servicio en Maó y en el resto de la isla?',
      en: 'Is there any difference between your service in Maó and the rest of the island?',
    },
    respuesta: {
      es: 'Ninguna en calidad, materiales, tarifas por m² ni garantía. La única diferencia práctica es logística: en Maó y municipios adyacentes (Sant Lluís, Es Castell, Alaior) podemos empezar obras con mayor inmediatez, mientras que en Ciutadella y núcleos costeros más alejados planificamos el transporte de materiales con 1-2 días de antelación. El coste logístico correspondiente queda reflejado en el presupuesto cerrado de cada proyecto.',
      en: 'None in terms of quality, materials, €/m² rates or warranty. The only practical difference is logistics: in Maó and adjacent municipalities (Sant Lluís, Es Castell, Alaior) we can start jobs more immediately, whereas in Ciutadella and more distant coastal settlements we plan materials transport 1-2 days ahead. The corresponding logistics cost is reflected in each project\'s fixed quote.',
    },
  },
]

export const getMenorcaFaqs = (lang: Lang = 'es'): FAQ[] =>
  menorcaFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const menorcaFaqs: FAQ[] = getMenorcaFaqs('es')
export const menorcaFaqsEn: FAQ[] = getMenorcaFaqs('en')
