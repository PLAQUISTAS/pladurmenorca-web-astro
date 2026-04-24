import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const santLluisFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Qué zonas de Sant Lluís cubrís?',
      en: 'Which Sant Lluís areas do you cover?',
    },
    respuesta: {
      es: 'Todo el municipio: centro de Sant Lluís, Punta Prima, Binibeca Vell, Binissafuller, S\'Algar y Alcaufar.',
      en: 'The whole municipality: central Sant Lluís, Punta Prima, Binibeca Vell, Binissafuller, S\'Algar and Alcaufar.',
    },
  },
  {
    pregunta: {
      es: '¿Ofrecéis atención en inglés para propietarios expatriados?',
      en: 'Do you offer English-language service for expat owners?',
    },
    respuesta: {
      es: 'Sí. Sant Lluís tiene una comunidad expatriada británica importante. Atendemos en español e inglés por WhatsApp, email y videollamada. Enviamos presupuestos y fotos de avance en ambos idiomas.',
      en: 'Yes. Sant Lluís has a substantial British expat community. We serve in Spanish and English via WhatsApp, email and video call. We send quotes and progress photos in both languages.',
    },
  },
  {
    pregunta: {
      es: '¿Trabajáis en villas de Punta Prima y Binibeca?',
      en: 'Do you work on villas in Punta Prima and Binibeca?',
    },
    respuesta: {
      es: 'Sí. Las villas costeras requieren acabados de gama alta: falsos techos decorativos, aislamiento térmico y acústico reforzado, pladur hidrófugo en baños, trasdosados con lana mineral y pequeñas redistribuciones con tabiques ligeros.',
      en: 'Yes. Coastal villas call for high-end finishes: decorative false ceilings, reinforced thermal and acoustic insulation, moisture-resistant drywall in bathrooms, linings with mineral wool and minor redistributions with lightweight partitions.',
    },
  },
  {
    pregunta: {
      es: '¿Cómo se gestiona una reforma cuando el propietario está fuera de Menorca?',
      en: 'How do you manage a refurbishment when the owner is off-island?',
    },
    respuesta: {
      es: 'Es nuestro día a día. Coordinamos entrega de llaves con administradores o gestores locales, enviamos fotos/vídeos del avance por WhatsApp o email y cerramos el proyecto por videollamada. La confianza se genera con comunicación constante.',
      en: 'It is our day-to-day. We coordinate key handover with local property managers or agencies, send progress photos/videos via WhatsApp or email and close out the project by video call. Trust is built through constant communication.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto cuesta aislar acústicamente una villa pareada?',
      en: 'How much does it cost to acoustically insulate a semi-detached villa?',
    },
    respuesta: {
      es: 'El aislamiento acústico entre viviendas pareadas exige una solución específica (montantes desvinculados + doble placa + lana mineral + banda resiliente). Precio orientativo: 60-110 €/m² de pared medianera, dependiendo del nivel de reducción exigido.',
      en: 'Acoustic insulation between semi-detached homes calls for a specific solution (decoupled studs + double board + mineral wool + resilient band). Indicative price: €60-€110/m² of party wall, depending on the required reduction level.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto tarda una reforma en temporada baja?',
      en: 'How long does a refurbishment take in low season?',
    },
    respuesta: {
      es: 'Entre octubre y abril tenemos más disponibilidad. Una reforma media de apartamento dura 2-3 semanas, una villa 4-8 semanas. Planificamos con plazo cerrado.',
      en: 'From October to April we have more availability. An average flat refurbishment takes 2-3 weeks, a villa 4-8 weeks. We plan with a fixed timeline.',
    },
  },
  {
    pregunta: {
      es: '¿Ofrecéis garantía?',
      en: 'Do you offer a warranty?',
    },
    respuesta: {
      es: 'Sí: 1 año de garantía en mano de obra y garantía de fabricante en materiales (Placo, Knauf, Lafarge).',
      en: 'Yes: 1-year workmanship warranty and manufacturer warranty on materials (Placo, Knauf, Lafarge).',
    },
  },
]

export const getSantLluisFaqs = (lang: Lang = 'es'): FAQ[] =>
  santLluisFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const santLluisFaqs: FAQ[] = getSantLluisFaqs('es')
export const santLluisFaqsEn: FAQ[] = getSantLluisFaqs('en')
