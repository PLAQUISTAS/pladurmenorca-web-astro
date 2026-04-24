import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const ignifugoFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Qué es el pladur ignífugo y en qué se diferencia del estándar?',
      en: 'What is fire-resistant drywall and how does it differ from standard?',
    },
    respuesta: {
      es: 'El pladur ignífugo (tipo FOC) es una placa de yeso laminado reforzada con fibra de vidrio y aditivos que retardan la acción del fuego. A diferencia de la placa estándar (blanca), la placa ignífuga (rosa) mantiene su integridad estructural entre 30 y 240 minutos bajo exposición directa al fuego, dependiendo de la configuración del sistema.',
      en: 'Fire-resistant drywall (type FOC) is a plasterboard reinforced with fibreglass and additives that retard fire. Unlike the standard (white) board, the fire-resistant (pink) board retains its structural integrity for 30 to 240 minutes under direct fire exposure, depending on system configuration.',
    },
  },
  {
    pregunta: {
      es: '¿En qué casos es obligatorio usar pladur ignífugo en Menorca?',
      en: 'When is fire-resistant drywall mandatory in Menorca?',
    },
    respuesta: {
      es: 'Es obligatorio en sectorización de hoteles y establecimientos públicos (EI-60 mínimo entre plantas), garajes subterráneos (EI-120), medianeras entre locales comerciales, protección de estructura metálica, conductos de ventilación que atraviesan sectores de incendio y pasos de instalaciones entre sectores. El CTE DB-SI y la normativa balear lo regulan.',
      en: 'Mandatory in hotel and public premises compartmentation (EI-60 minimum between floors), underground car parks (EI-120), party walls between retail units, steel structure protection, ventilation ducts crossing fire compartments and service penetrations between compartments. Regulated by CTE DB-SI and Balearic regulations.',
    },
  },
  {
    pregunta: {
      es: '¿Qué resistencia al fuego se puede alcanzar con pladur ignífugo?',
      en: 'What fire resistance can be achieved with fire-resistant drywall?',
    },
    respuesta: {
      es: 'Desde EI-30 con una sola placa FOC hasta EI-240 con sistemas de doble o triple placa reforzada. Las configuraciones más habituales son: EI-60 para sectorización de hoteles, EI-90 para medianeras de locales y EI-120 para garajes y muros cortafuegos.',
      en: 'From EI-30 with a single FOC board up to EI-240 with double or triple reinforced-board systems. The most common configurations are: EI-60 for hotel compartmentation, EI-90 for retail party walls, and EI-120 for car parks and firewalls.',
    },
  },
  {
    pregunta: {
      es: '¿Qué documentación se entrega tras la instalación?',
      en: 'What documentation is provided after installation?',
    },
    respuesta: {
      es: 'Entregamos certificado de los materiales instalados (Knauf, Placo o Pladur), declaración de prestaciones (DoP) de cada producto, ficha técnica con clasificación de reacción al fuego y fotografías del proceso para el archivo del proyecto. Esta documentación es necesaria para la legalización de la actividad.',
      en: 'We provide a certificate of the installed materials (Knauf, Placo or Pladur), Declaration of Performance (DoP) for each product, datasheet with reaction-to-fire classification and process photographs for the project file. This documentation is required for activity legalisation.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto cuesta instalar pladur ignífugo en Menorca?',
      en: 'How much does fire-resistant drywall cost in Menorca?',
    },
    respuesta: {
      es: 'Un tabique ignífugo simple (EI-30) parte de 38€/m². Para EI-60 con doble placa, entre 48 y 65€/m². Un muro cortafuegos EI-120 se sitúa entre 65 y 90€/m². El revestimiento ignífugo de vigas o pilares metálicos cuesta entre 55 y 80€ por metro lineal. El sellado de pasos de instalaciones, entre 30 y 80€ por unidad.',
      en: 'A simple fire-resistant partition (EI-30) starts from €38/m². For EI-60 with double board, €48-65/m². An EI-120 firewall ranges €65-90/m². Fire encasement of steel beams or columns costs €55-80 per linear metre. Fire-stopping of service penetrations: €30-80 per unit.',
    },
  },
]

export const getIgnifugoFaqs = (lang: Lang = 'es'): FAQ[] =>
  ignifugoFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const ignifugoFaqs: FAQ[] = getIgnifugoFaqs('es')
export const ignifugoFaqsEn: FAQ[] = getIgnifugoFaqs('en')
