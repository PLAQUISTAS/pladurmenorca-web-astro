import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const instalacionFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Qué tipos de placa de pladur existen?',
      en: 'What types of drywall (pladur) board are there?',
    },
    respuesta: {
      es: 'Las principales son: placa estándar (A/BA) para uso general, placa hidrófuga (H, verde) para baños y cocinas, placa cortafuego (F/DF, rosa) con clasificación EI-30 a EI-120, placa acústica (AC) de alta densidad para aislamiento acústico y placa de alta dureza (AD/Impact) para zonas con tráfico intenso. La elección depende del uso, la normativa aplicable y las condiciones del espacio.',
      en: 'The main ones are: standard board (A/BA) for general use, moisture-resistant board (H, green) for bathrooms and kitchens, fire-rated board (F/DF, pink) with EI-30 to EI-120 classification, acoustic board (AC) of high density for sound insulation, and high-hardness board (AD/Impact) for high-traffic areas. The choice depends on the use, applicable regulations and the conditions of the space.',
    },
  },
  {
    pregunta: {
      es: '¿Cuáles son las marcas de pladur más usadas?',
      en: 'Which drywall brands are most used?',
    },
    respuesta: {
      es: 'En España las tres marcas de referencia son Saint-Gobain Placo (Pladur®, que ha dado nombre genérico al sistema), Knauf y Lafarge. Las tres cumplen UNE-EN 520 y ofrecen prestaciones equivalentes en placa estándar. Las diferencias surgen en sistemas técnicos especiales (acústicos, cortafuego de alta clasificación), donde cada fabricante tiene soluciones propietarias.',
      en: 'In Spain, the three reference brands are Saint-Gobain Placo (Pladur®, which has given the generic name to the system), Knauf and Lafarge. All three meet UNE-EN 520 and offer equivalent performance in standard board. Differences appear in special technical systems (acoustic, high-rating fire-resistant), where each manufacturer has proprietary solutions.',
    },
  },
  {
    pregunta: {
      es: '¿El pladur aguanta cuadros y muebles colgados?',
      en: 'Can drywall hold pictures and wall-mounted furniture?',
    },
    respuesta: {
      es: 'Sí, con los anclajes adecuados. Para objetos ligeros hasta 5 kg (cuadros, espejos pequeños) bastan tacos específicos para pladur (Fischer HM o similares). Para cargas medias de 10-30 kg (estanterías, televisores) se utilizan tacos de expansión tipo Toggler o Molly. Para cargas pesadas (armarios empotrados, calentadores, sanitarios suspendidos) se refuerza la estructura metálica con perfiles adicionales y travesaños antes de colocar la placa. Este refuerzo se planifica durante la visita técnica.',
      en: 'Yes, with suitable fixings. For light objects up to 5 kg (pictures, small mirrors) drywall-specific plugs (Fischer HM or similar) are enough. For medium loads of 10-30 kg (shelves, televisions) expansion anchors of the Toggler or Molly type are used. For heavy loads (fitted wardrobes, boilers, wall-hung sanitaryware) the metal frame is reinforced with additional studs and cross-rails before fitting the board. This reinforcement is planned during the technical visit.',
    },
  },
  {
    pregunta: {
      es: '¿Puedo pintar el pladur directamente?',
      en: 'Can I paint drywall directly?',
    },
    respuesta: {
      es: 'Sí, pero siempre tras aplicar una mano de imprimación selladora. El pladur tiene una superficie porosa que absorbe la pintura de forma irregular si no se imprima previamente: unas zonas quedan mates y otras satinadas, generando un acabado heterogéneo. Nosotros dejamos el trabajo con juntas tratadas (pasta y cinta), superficies lijadas y listas para imprimar y pintar por parte del equipo de pintura.',
      en: 'Yes, but always after applying a coat of sealer primer. Drywall has a porous surface that absorbs paint unevenly if not primed first: some areas stay matt and others satin, producing a patchy finish. We leave the work with joints treated (filler and tape) and surfaces sanded, ready for the painting team to prime and paint.',
    },
  },
  {
    pregunta: {
      es: '¿Se puede instalar pladur en viviendas habitadas?',
      en: 'Can drywall be installed in occupied homes?',
    },
    respuesta: {
      es: 'Sí, y es uno de los mayores valores del sistema. Al ser instalación en seco no se generan escombros voluminosos, polvo de obra pesada ni olor. Sectorizamos la vivienda con plásticos de protección, trabajamos en una zona y liberamos las demás. Un falso techo de salón (20 m²) puede instalarse en una jornada con el cliente en casa. Para reformas de varios días coordinamos horarios con el propietario.',
      en: 'Yes, and it is one of the greatest strengths of the system. As a dry installation there is no bulky rubble, no heavy construction dust and no odour. We section off the home with protective plastic, work in one area and leave the rest free. A living-room false ceiling (20 m²) can be installed in one day with the client at home. For multi-day renovations we coordinate schedules with the owner.',
    },
  },
  {
    pregunta: {
      es: '¿Cómo se pasan las instalaciones eléctricas por pladur?',
      en: 'How are electrical services routed through drywall?',
    },
    respuesta: {
      es: 'Las instalaciones eléctricas, de fontanería, ventilación y climatización se pasan por el hueco creado por la estructura metálica antes de cerrar con placa. Coordinamos con electricista y fontanero para que dejen cables y tuberías replanteados en la posición definitiva. En falsos techos se instalan cajas de derivación registrables y se respetan las separaciones del REBT. Los empotrados de mecanismos se hacen con caja universal para pladur (tipo KU68).',
      en: 'Electrical, plumbing, ventilation and HVAC services are routed through the cavity created by the metal frame before closing with board. We coordinate with the electrician and plumber so cables and pipes are left set out in their final position. In false ceilings, accessible junction boxes are installed and REBT separations are respected. Switches and sockets are recessed with a universal drywall box (KU68 type).',
    },
  },
  {
    pregunta: {
      es: '¿Qué herramientas se usan para instalar pladur?',
      en: 'What tools are used to install drywall?',
    },
    respuesta: {
      es: 'Las principales son: atornillador de impacto con embrague limitador (para no romper el cartón), cizalla o cúter para cortar placas, cepillo de carpintero para chaflanes, espátulas de 10-40 cm para pastas, saco de lija con grano 120-220, láser autonivelante para replanteo de techos y tijeras para perfilería metálica. Todo el equipo es profesional y lo aportamos nosotros; el cliente no necesita disponer de nada.',
      en: 'The main ones are: impact screwdriver with depth-limiting clutch (to avoid tearing the paper), shears or knife for cutting boards, a carpenter\'s plane for chamfers, 10-40 cm trowels for fillers, sanding pad with 120-220 grit, self-levelling laser for ceiling set-out, and snips for metal framing. All the equipment is professional and we bring it ourselves; the client does not need to provide anything.',
    },
  },
]

export const getInstalacionFaqs = (lang: Lang = 'es'): FAQ[] =>
  instalacionFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const instalacionFaqs: FAQ[] = getInstalacionFaqs('es')
export const instalacionFaqsEn: FAQ[] = getInstalacionFaqs('en')
