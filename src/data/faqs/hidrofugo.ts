import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const hidrofugoFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿La placa verde de pladur se puede mojar directamente?',
      en: 'Can green drywall board get directly wet?',
    },
    respuesta: {
      es: 'No. La placa hidrófuga (tipo H1) es resistente a la humedad ambiental pero no es impermeable. Su absorción de agua es inferior al 5% tras 2 horas de inmersión (frente al 30% de la placa estándar), lo que la hace ideal para baños y cocinas. Pero necesita un acabado protector: azulejo, pintura antihumedad Clase 3 o revestimiento vinílico.',
      en: 'No. Moisture-resistant board (type H1) resists ambient humidity but is not waterproof. Its water absorption is below 5% after 2 hours of immersion (vs 30% for standard board), making it ideal for bathrooms and kitchens. But it requires a protective finish: tiles, Class 3 anti-damp paint or vinyl cladding.',
    },
  },
  {
    pregunta: {
      es: '¿Se puede usar placa verde para el techo de la ducha?',
      en: 'Can green board be used on the shower ceiling?',
    },
    respuesta: {
      es: 'Sí, siempre que el baño tenga ventilación adecuada (natural o extractor) y se aplique pintura antihumedad Clase 3 o superior. Es la solución más habitual en reformas de baños de apartamentos turísticos y hoteles en Menorca, donde el falso techo hidrófugo permite integrar la iluminación LED y ocultar la extracción.',
      en: 'Yes, provided the bathroom has adequate ventilation (natural or extractor fan) and Class 3 or higher anti-damp paint is applied. It is the most common solution in bathroom renovations for holiday apartments and hotels in Menorca, where the moisture-resistant false ceiling allows LED lighting to be integrated and extraction to be hidden.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto dura la placa hidrófuga de pladur?',
      en: 'How long does moisture-resistant drywall last?',
    },
    respuesta: {
      es: 'La vida útil de la placa hidrófuga es idéntica a la del edificio si la instalación es correcta. Los aditivos hidrófugos no se degradan con el tiempo. Lo que puede fallar es el sellado perimetral o las juntas si no se tratan adecuadamente, por eso es importante que la instalación la realice un profesional.',
      en: 'The service life of moisture-resistant board matches the building\'s when installation is correct. Moisture-resistant additives do not degrade over time. What can fail is the perimeter sealing or the joints if not properly treated, which is why professional installation is important.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto cuesta instalar pladur hidrófugo en un baño en Menorca?',
      en: 'How much does moisture-resistant drywall cost in a bathroom in Menorca?',
    },
    respuesta: {
      es: 'Un trasdosado hidrófugo para un baño de 6-8 m² de pared cuesta entre 170 y 320€. Un falso techo hidrófugo para un baño de 4-5 m² cuesta entre 120 y 225€. La reforma completa de paredes y techo de un baño estándar con placa verde se sitúa entre 400 y 800€, sin incluir azulejo ni pintura.',
      en: 'A moisture-resistant wall lining for a bathroom with 6-8 m² of walls costs €170-320. A moisture-resistant false ceiling for a 4-5 m² bathroom costs €120-225. Full walls + ceiling renovation of a standard bathroom with green board is €400-800, excluding tiles and paint.',
    },
  },
  {
    pregunta: {
      es: '¿Qué diferencia hay entre placa verde y placa estándar blanca?',
      en: 'What is the difference between green board and standard white board?',
    },
    respuesta: {
      es: 'La diferencia está en el tratamiento del núcleo de yeso. La placa verde (tipo H1 según norma EN 520) incorpora aditivos hidrófugos y celulosa tratada que reducen la absorción de agua por debajo del 5%. La placa estándar blanca (tipo A) absorbe más del 30%. Visualmente se distinguen por el color: verde la hidrófuga, blanca la estándar.',
      en: 'The difference lies in the treatment of the gypsum core. Green board (type H1 per EN 520) incorporates moisture-resistant additives and treated cellulose that reduce water absorption below 5%. Standard white board (type A) absorbs more than 30%. They are visually distinguished by colour: green for moisture-resistant, white for standard.',
    },
  },
]

export const getHidrofugoFaqs = (lang: Lang = 'es'): FAQ[] =>
  hidrofugoFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const hidrofugoFaqs: FAQ[] = getHidrofugoFaqs('es')
export const hidrofugoFaqsEn: FAQ[] = getHidrofugoFaqs('en')
