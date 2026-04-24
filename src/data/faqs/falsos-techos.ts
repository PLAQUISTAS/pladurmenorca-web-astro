import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const falsosTechosFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Cuánto cuesta un falso techo de pladur en Menorca?',
      en: 'How much does a drywall false ceiling cost in Menorca?',
    },
    respuesta: {
      es: 'El precio de un falso techo de pladur en Menorca parte desde 29€/m² para un techo sencillo de una capa sin aislamiento. Un falso techo con aislamiento térmico/acústico cuesta entre 35€ y 55€/m². Techos curvos, con iluminación integrada o formas especiales pueden llegar a 70-90€/m². El presupuesto incluye estructura, placas, tratamiento de juntas y acabado listo para pintar.',
      en: 'The price of a drywall false ceiling in Menorca starts at €29/m² for a simple single-layer ceiling without insulation. A false ceiling with thermal/acoustic insulation costs €35-55/m². Curved ceilings, ceilings with integrated lighting or special shapes can reach €70-90/m². The quote includes frame, boards, joint treatment and a finish ready to paint.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto baja un falso techo de pladur?',
      en: 'How much does a drywall false ceiling drop from the original?',
    },
    respuesta: {
      es: 'El mínimo técnico es de 10 cm (estructura + placa). Lo habitual en pisos es entre 10 y 20 cm. Si hay instalaciones que alojar (aire acondicionado, ventilación, eléctrica) puede necesitar 20-30 cm. En viviendas con techos de más de 2,80m no suele ser problema. En techos altos (3m+) un falso techo mejora la proporción y el confort térmico.',
      en: 'The technical minimum is 10 cm (frame + board). In flats it is typically between 10 and 20 cm. If services must be housed (air conditioning, ventilation, electrical) it may need 20-30 cm. In homes with ceilings over 2.80 m it is rarely an issue. In tall ceilings (3 m+) a false ceiling improves the proportion and thermal comfort.',
    },
  },
  {
    pregunta: {
      es: '¿Se puede hacer un falso techo en un piso con altura de 2,60 m?',
      en: 'Can a false ceiling be installed in a flat with 2.60 m ceiling height?',
    },
    respuesta: {
      es: 'Sí, es posible. Con una bajada de solo 10 cm el techo quedaría a 2,50 m, que es la altura mínima habitable según la normativa española. Si necesitas pasar instalaciones, puede bajar a 2,40 m. Lo evaluamos caso por caso en la visita técnica para optimizar al máximo el espacio.',
      en: 'Yes, it is possible. With a drop of just 10 cm the ceiling would be at 2.50 m, the minimum habitable height under Spanish regulations. If services must run through, it may drop to 2.40 m. We assess it case by case on the technical visit to optimise space to the maximum.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto tiempo tarda la instalación de un falso techo?',
      en: 'How long does a false ceiling installation take?',
    },
    respuesta: {
      es: 'Un techo de 50m² sencillo se instala en 1-2 jornadas. Techos con instalación eléctrica, aislamiento o formas especiales pueden requerir 3-5 días. El tratamiento de juntas necesita 24-48h de secado antes de pintar. Un equipo de 2 instaladores puede completar entre 40 y 60m² por día en techos rectos.',
      en: 'A simple 50 m² ceiling is installed in 1-2 working days. Ceilings with electrical services, insulation or special shapes can require 3-5 days. Joint treatment needs 24-48 h of drying before painting. A two-installer team can complete 40-60 m² per day on flat ceilings.',
    },
  },
  {
    pregunta: {
      es: '¿Se puede integrar iluminación LED en un falso techo de pladur?',
      en: 'Can LED lighting be integrated into a drywall false ceiling?',
    },
    respuesta: {
      es: 'Sí, es una de las mayores ventajas del falso techo de pladur. Se pueden instalar downlights empotrados, tiras LED perimetrales en Cove Lighting, plafones empotrados y focos direccionales. La estructura interior se refuerza en los puntos de anclaje de las luminarias. La instalación eléctrica va completamente oculta sobre el falso techo.',
      en: 'Yes, it is one of the greatest advantages of a drywall false ceiling. Recessed downlights, perimeter LED strips in Cove Lighting, recessed panels and directional spots can be installed. The inner frame is reinforced at luminaire anchor points. The electrical installation is fully hidden above the false ceiling.',
    },
  },
  {
    pregunta: {
      es: '¿El falso techo de pladur aguanta humedad en baños?',
      en: 'Does a drywall false ceiling cope with humidity in bathrooms?',
    },
    respuesta: {
      es: 'Sí, utilizando placa hidrófuga (placa verde) que resiste la humedad sin deformarse. En baños sin ventana o con ducha, se recomienda placa hidrófuga + tratamiento de juntas con sellador. Para techos de ducha directa, podemos combinar placa hidrófuga con una capa de impermeabilización líquida. Es la solución estándar en hoteles de Menorca.',
      en: 'Yes, using moisture-resistant board (green) that withstands humidity without deforming. In windowless bathrooms or those with a shower, we recommend moisture-resistant board + joint treatment with sealant. For ceilings directly above showers, we can combine moisture-resistant board with a coat of liquid waterproofing. It is the standard solution in Menorca hotels.',
    },
  },
  {
    pregunta: {
      es: '¿Sirve el falso techo para aislar del ruido de arriba?',
      en: 'Does a false ceiling insulate against noise from the flat above?',
    },
    respuesta: {
      es: 'Sí, aunque depende del tipo de ruido. Para ruido aéreo (voces, televisión) un falso techo con lana mineral de 50mm y placa doble reduce entre 35 y 45 dB. Para ruido de impacto (pasos, caídas) es necesario un sistema de techo descolgado con suspensiones antivibratorias. La solución completa más eficiente combina falso techo acústico + suelo flotante en la vivienda superior.',
      en: 'Yes, although it depends on the type of noise. For airborne noise (voices, television) a false ceiling with 50 mm mineral wool and double board reduces 35-45 dB. For impact noise (footsteps, drops) a decoupled ceiling system with anti-vibration hangers is needed. The most effective full solution combines an acoustic false ceiling + a floating floor in the flat above.',
    },
  },
  {
    pregunta: {
      es: '¿Se puede hacer un falso techo curvo o con formas especiales?',
      en: 'Can false ceilings be made curved or with special shapes?',
    },
    respuesta: {
      es: 'Sí. Con placas de pladur de 6,5mm o 9,5mm de espesor se pueden crear curvas de radio mínimo 1m. Para curvas más cerradas se utilizan placas especiales flexibles o se entalla el dorso de la placa. Realizamos techos curvos, abovedados, con diedros, escalonados y con huecos para lucernarios. Son muy habituales en reformas de vivienda de alto nivel.',
      en: 'Yes. With 6.5 mm or 9.5 mm drywall boards you can create curves with a minimum 1 m radius. For tighter curves, special flexible boards are used or the back of the board is scored. We execute curved, vaulted, angled, stepped ceilings and ones with openings for skylights. They are common in high-end home renovations.',
    },
  },
  {
    pregunta: {
      es: '¿Qué mantenimiento necesita un falso techo de pladur?',
      en: 'What maintenance does a drywall false ceiling need?',
    },
    respuesta: {
      es: 'Prácticamente ninguno. El falso techo de pladur no requiere mantenimiento específico. Las juntas se resienten si hay movimientos estructurales importantes del edificio, pero en condiciones normales duran décadas sin intervención. Las revisiones recomendadas: comprobar que no hay manchas de humedad (indican filtraciones superiores) y verificar que los downlights funcionan correctamente.',
      en: 'Practically none. A drywall false ceiling needs no specific maintenance. Joints can suffer if the building has significant structural movement, but under normal conditions they last decades without intervention. Recommended checks: verify there are no damp stains (they indicate leaks from above) and that the downlights work correctly.',
    },
  },
  {
    pregunta: {
      es: '¿Se puede desmontar un falso techo de pladur?',
      en: 'Can a drywall false ceiling be dismantled?',
    },
    respuesta: {
      es: 'Sí, es completamente reversible. Se desmonta cortando las placas y retirando la estructura metálica. No daña el techo original. Esto lo diferencia de otros sistemas como el escayolado proyectado. Si en el futuro necesitas acceder a instalaciones (tuberías, cables) se puede abrir un registro o desmontar parcialmente y reconstruir después.',
      en: 'Yes, it is fully reversible. It is dismantled by cutting the boards and removing the metal frame. It does not damage the original ceiling. This sets it apart from other systems such as sprayed plaster. If you later need access to services (pipes, cables) you can open an access hatch or partially dismantle and rebuild afterwards.',
    },
  },
]

export const getFalsosTechosFaqs = (lang: Lang = 'es'): FAQ[] =>
  falsosTechosFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const falsosTechosFaqs: FAQ[] = getFalsosTechosFaqs('es')
export const falsosTechosFaqsEn: FAQ[] = getFalsosTechosFaqs('en')
