import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const aislamientoTermicoFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Cuánto se ahorra en electricidad con aislamiento térmico de pladur?',
      en: 'How much do you save on electricity with drywall thermal insulation?',
    },
    respuesta: {
      es: 'En Menorca, donde el consumo de aire acondicionado en verano es muy alto, un buen aislamiento térmico puede reducir la factura eléctrica entre un 20 y un 35%. En un piso de 80 m² esto supone un ahorro de 300 a 600 € anuales. La amortización de la inversión suele estar entre 5 y 10 años.',
      en: 'In Menorca, where summer air-conditioning consumption is very high, good thermal insulation can cut the electricity bill by 20-35%. In an 80 m² flat this means savings of €300-600 per year. The payback period for the investment is typically 5-10 years.',
    },
  },
  {
    pregunta: {
      es: '¿El aislamiento de pladur mejora la certificación energética?',
      en: 'Does drywall insulation improve the energy rating?',
    },
    respuesta: {
      es: 'Sí. Al mejorar la transmitancia U de los cerramientos, mejora la calificación energética del inmueble. Esto puede subir la calificación de una E o D a una C o incluso B, lo que aumenta el valor del inmueble entre un 5 y un 15% y facilita su venta o alquiler.',
      en: 'Yes. By improving the U-value of the envelope, the property\'s energy rating improves. This can raise the rating from E or D to C or even B, which increases property value by 5-15% and makes it easier to sell or rent.',
    },
  },
  {
    pregunta: {
      es: '¿Qué tipo de aislamiento térmico es mejor para Menorca?',
      en: 'Which type of thermal insulation is best for Menorca?',
    },
    respuesta: {
      es: 'Depende del caso. El EPS es la opción más económica para paredes estándar. La lana de roca es ideal si necesitas también aislamiento acústico. El XPS se recomienda para cubiertas o zonas con riesgo de humedad. En Menorca, zona climática B3, con 60-80 mm de aislante se alcanza la transmitancia exigida por el CTE.',
      en: 'It depends on the case. EPS is the most economical option for standard walls. Rock wool is ideal if you also need acoustic insulation. XPS is recommended for roofs or damp-prone areas. In Menorca, climate zone B3, 60-80 mm of insulation meets the transmittance required by the CTE.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto cuesta el aislamiento térmico con pladur en Menorca?',
      en: 'How much does drywall thermal insulation cost in Menorca?',
    },
    respuesta: {
      es: 'El precio del trasdosado térmico con pladur en Menorca empieza desde 35 €/m² instalado, incluyendo estructura metálica, aislante y placa de yeso. El coste total para un piso de 80 m² suele estar entre 4.000 y 6.000 €. Existen subvenciones que pueden cubrir hasta el 60% del coste.',
      en: 'The price of a thermal drywall lining in Menorca starts at €35/m² installed, including metal frame, insulation and plasterboard. The total cost for an 80 m² flat is typically €4,000-6,000. Grants are available that can cover up to 60% of the cost.',
    },
  },
  {
    pregunta: {
      es: '¿Se pierde mucho espacio con un trasdosado térmico?',
      en: 'Do you lose much space with a thermal wall lining?',
    },
    respuesta: {
      es: 'La pérdida de superficie es de 5 a 10 cm por pared tratada. En un piso de 80 m² aislando las cuatro fachadas se pierden entre 1 y 2 m² de superficie útil. Es un sacrificio mínimo comparado con el ahorro energético del 20-35% que se obtiene.',
      en: 'The loss of floor area is 5-10 cm per treated wall. In an 80 m² flat insulating all four facades, 1-2 m² of usable area are lost. It is a minimal sacrifice compared with the 20-35% energy savings obtained.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto tarda la instalación de aislamiento térmico?',
      en: 'How long does thermal insulation installation take?',
    },
    respuesta: {
      es: 'La instalación de aislamiento térmico con trasdosado de pladur en una habitación de 20 m² suele tardar entre 1 y 2 días. Para un piso completo de 80 m² el plazo es de 3 a 5 días laborables, dependiendo del estado de los cerramientos y del tipo de aislante.',
      en: 'Installing thermal insulation with a drywall lining in a 20 m² room typically takes 1-2 days. For a full 80 m² flat the timeline is 3-5 working days, depending on the condition of the walls and the type of insulation.',
    },
  },
  {
    pregunta: {
      es: '¿Hay subvenciones para aislamiento térmico en Baleares?',
      en: 'Are there grants for thermal insulation in the Balearic Islands?',
    },
    respuesta: {
      es: 'Sí. Existen varias ayudas: el programa PIREP Balears cubre hasta el 80% en rehabilitación energética de edificios, el programa PREE hasta el 40% en mejora de cerramientos, y hay deducciones de hasta el 60% en el IRPF por obras de mejora energética. También hay préstamos ICO a bajo interés.',
      en: 'Yes. Several grants are available: the PIREP Balears programme covers up to 80% for building energy retrofits, the PREE programme covers up to 40% for envelope upgrades, and there are income tax (IRPF) deductions of up to 60% for energy-efficiency works. Low-interest ICO loans are also available.',
    },
  },
  {
    pregunta: {
      es: '¿El aislamiento térmico funciona también en invierno?',
      en: 'Does thermal insulation also work in winter?',
    },
    respuesta: {
      es: 'Sí. Aunque en Menorca el mayor consumo energético es en verano por el aire acondicionado, el aislamiento también reduce las necesidades de calefacción en invierno. Los inviernos menorquines son húmedos y con tramontana, por lo que la calefacción se usa 3-4 meses al año. El aislamiento reduce ambas partidas de la factura eléctrica.',
      en: 'Yes. Although in Menorca the highest energy consumption is in summer due to air conditioning, insulation also reduces heating needs in winter. Menorcan winters are damp and windy (tramontana), so heating is used 3-4 months a year. Insulation reduces both items on the electricity bill.',
    },
  },
  {
    pregunta: {
      es: '¿Es necesario pedir permiso a la comunidad para instalar aislamiento interior?',
      en: 'Do I need the owners\' association\'s permission to install interior insulation?',
    },
    respuesta: {
      es: 'No. El trasdosado térmico interior es una obra de mejora dentro de tu vivienda que no afecta a elementos comunes del edificio ni a la fachada exterior. No requiere permiso de la comunidad de propietarios ni licencia de obras del ayuntamiento en la mayoría de los casos.',
      en: 'No. An interior thermal lining is an upgrade inside your home that does not affect common elements of the building or the exterior facade. It does not require owners\' association permission or a council building permit in most cases.',
    },
  },
  {
    pregunta: {
      es: '¿Qué espesor de aislante necesito en Menorca?',
      en: 'What insulation thickness do I need in Menorca?',
    },
    respuesta: {
      es: 'Según el CTE-HE para la zona climática B3 de Menorca, la transmitancia máxima en muros es de 0,38 W/m²K. Para alcanzarla con un trasdosado de pladur se necesitan habitualmente entre 60 y 80 mm de aislante (EPS o lana de roca). El espesor exacto depende del cerramiento existente y se calcula en la visita técnica.',
      en: 'Under CTE-HE for Menorca\'s climate zone B3, the maximum wall transmittance is 0.38 W/m²K. To meet it with a drywall lining, typically 60-80 mm of insulation (EPS or rock wool) are needed. The exact thickness depends on the existing wall and is calculated on the technical visit.',
    },
  },
]

export const getAislamientoTermicoFaqs = (lang: Lang = 'es'): FAQ[] =>
  aislamientoTermicoFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const aislamientoTermicoFaqs: FAQ[] = getAislamientoTermicoFaqs('es')
export const aislamientoTermicoFaqsEn: FAQ[] = getAislamientoTermicoFaqs('en')
