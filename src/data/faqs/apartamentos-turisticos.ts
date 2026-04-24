import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const apartamentosTuristicosFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿En cuánto tiempo se puede reformar un apartamento turístico con pladur?',
      en: 'How long does it take to renovate a holiday apartment with drywall?',
    },
    respuesta: {
      es: 'Dependiendo del alcance, entre 3 días y 2 semanas. Un falso techo completo se instala en 2-3 días. Una reforma integral (techo + tabiques + aislamiento) para un apartamento de 60-80 m² puede completarse en 7-10 días hábiles. Garantizamos plazos por contrato.',
      en: 'Depending on scope, between 3 days and 2 weeks. A full false ceiling is installed in 2-3 days. A full refurbishment (ceiling + partitions + insulation) for a 60-80 m² apartment can be completed in 7-10 working days. We guarantee deadlines by contract.',
    },
  },
  {
    pregunta: {
      es: '¿Cuándo es el mejor momento para reformar un apartamento turístico en Menorca?',
      en: 'When is the best time to renovate a holiday apartment in Menorca?',
    },
    respuesta: {
      es: 'La ventana óptima es de octubre a marzo, cuando la ocupación turística es baja. Recomendamos contactar en septiembre para planificar la reforma y tener todo listo antes de Semana Santa. En temporada baja tenemos más disponibilidad y los plazos son más flexibles.',
      en: 'The optimal window is October to March, when tourist occupancy is low. We recommend contacting us in September to plan the renovation and have everything ready before Easter. In low season we have more availability and schedules are more flexible.',
    },
  },
  {
    pregunta: {
      es: '¿El aislamiento acústico con pladur mejora las valoraciones en Airbnb y Booking?',
      en: 'Does drywall acoustic insulation improve Airbnb and Booking ratings?',
    },
    respuesta: {
      es: 'Sí. El ruido es una de las quejas más frecuentes en las reseñas de apartamentos turísticos. Un buen aislamiento acústico con pladur (45-55 dB de reducción) puede eliminar esta queja y mejorar la puntuación media del alojamiento, lo que se traduce directamente en más reservas y mejores precios.',
      en: 'Yes. Noise is one of the most frequent complaints in holiday apartment reviews. Good drywall acoustic insulation (45-55 dB reduction) can remove this complaint and raise the property\'s average rating, which translates directly into more bookings and higher prices.',
    },
  },
  {
    pregunta: {
      es: '¿Se puede vivir o alquilar el apartamento durante la reforma?',
      en: 'Can the apartment be lived in or rented out during the renovation?',
    },
    respuesta: {
      es: 'No es recomendable durante los días de obra activa por el polvo de yeso y el ruido de las herramientas. Sin embargo, el pladur genera mucho menos molestias que la obra tradicional: no hay demoliciones, no hay cemento y la limpieza final es rápida.',
      en: 'Not advisable during active work days because of gypsum dust and tool noise. However, drywall causes far less disruption than traditional wet trades: no demolition, no cement and a quick final clean-up.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto cuesta reformar un apartamento turístico con pladur?',
      en: 'How much does it cost to renovate a holiday apartment with drywall?',
    },
    respuesta: {
      es: 'Un falso techo completo con iluminación LED para un apartamento de 50 m² cuesta entre 1.500 y 2.500€. Añadir aislamiento acústico entre vecinos puede sumar entre 1.800 y 4.000€ dependiendo de la superficie. Reforma integral (techo + aislamiento + redistribución): entre 5.000 y 12.000€.',
      en: 'A full false ceiling with LED lighting for a 50 m² apartment costs between €1,500 and €2,500. Adding acoustic insulation between neighbours can add €1,800 to €4,000 depending on area. Full refurbishment (ceiling + insulation + layout): between €5,000 and €12,000.',
    },
  },
  {
    pregunta: {
      es: '¿Trabajáis en todas las zonas turísticas de Menorca?',
      en: 'Do you cover all tourist areas in Menorca?',
    },
    respuesta: {
      es: 'Sí. Cubrimos todas las zonas con alta concentración de apartamentos turísticos: Cala en Bosc y Son Xoriguer (Ciutadella), Cala Santandria, Punta Prima y Binibeca (Sant Lluís), Arenal d’en Castell y Son Parc (Es Mercadal), Son Bou y Cala en Porter (Alaior), Santa Galdana y Cala Mitjana (Ferreries), Sant Tomàs (Es Migjorn Gran), y el entorno del Port de Maó. El desplazamiento del equipo se incluye de forma transparente en el presupuesto cerrado.',
      en: 'Yes. We cover all areas with a high concentration of holiday apartments: Cala en Bosc and Son Xoriguer (Ciutadella), Cala Santandria, Punta Prima and Binibeca (Sant Lluís), Arenal d’en Castell and Son Parc (Es Mercadal), Son Bou and Cala en Porter (Alaior), Cala Galdana and Cala Mitjana (Ferreries), Sant Tomàs (Es Migjorn Gran), and the Port de Maó area. Crew travel is included transparently in the fixed quote.',
    },
  },
]

export const getApartamentosTuristicosFaqs = (lang: Lang = 'es'): FAQ[] =>
  apartamentosTuristicosFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const apartamentosTuristicosFaqs: FAQ[] = getApartamentosTuristicosFaqs('es')
export const apartamentosTuristicosFaqsEn: FAQ[] = getApartamentosTuristicosFaqs('en')
