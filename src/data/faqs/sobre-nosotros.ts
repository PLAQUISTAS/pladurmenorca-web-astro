import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const sobreNosotrosFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Cuántos años lleva Pladur Menorca en el sector?',
      en: 'How long has Pladur Menorca been in the industry?',
    },
    respuesta: {
      es: 'Pladur Menorca fue fundada en 2004. Llevamos más de 20 años especializados exclusivamente en sistemas de yeso laminado (pladur) en la isla de Menorca. Desde entonces hemos completado más de 6.000 proyectos en toda la isla.',
      en: 'Pladur Menorca was founded in 2004. For over 20 years we have specialised exclusively in gypsum plasterboard (drywall) systems, with service on Menorca delivered through our parent company Plaquistas y Acabados SL. Since launch we have completed more than 6,000 projects across the Balearics.',
    },
  },
  {
    pregunta: {
      es: '¿Qué marcas de pladur utilizáis?',
      en: 'Which drywall brands do you use?',
    },
    respuesta: {
      es: 'Trabajamos exclusivamente con las tres marcas líderes del sector: Placo (Saint-Gobain), Knauf y Lafarge. Son fabricantes europeos de referencia con certificaciones de calidad contrastadas. Nunca utilizamos materiales de segunda o marcas blancas.',
      en: 'We work exclusively with the three leading brands in the sector: Placo (Saint-Gobain), Knauf and Lafarge. These are reference European manufacturers with proven quality certifications. We never use second-grade or own-label materials.',
    },
  },
  {
    pregunta: {
      es: '¿Qué garantía ofrecéis en vuestros trabajos?',
      en: 'What warranty do you offer on your work?',
    },
    respuesta: {
      es: 'Todos nuestros trabajos incluyen una garantía de 1 año que cubre defectos de instalación y materiales. Además, al utilizar materiales de primeras marcas, contamos con el respaldo técnico y las garantías propias del fabricante sobre cada producto instalado.',
      en: 'All our work includes a 1-year warranty covering installation and material defects. In addition, by using premium brands we have the technical backing and manufacturer warranties on every product installed.',
    },
  },
  {
    pregunta: {
      es: '¿Trabajáis en toda Menorca?',
      en: 'Do you work across all of Menorca?',
    },
    respuesta: {
      es: 'Sí. Realizamos proyectos en todos los municipios de la isla: Maó, Ciutadella, Ferreries, Alaior, Alaior, Es Mercadal, Sant Lluís, Es Migjorn Gran, Es Castell, Ferreries y el resto de localidades. Disponemos de equipos de montaje que se desplazan a cualquier punto de Menorca, y el presupuesto es siempre gratuito y sin compromiso.',
      en: 'Yes. We deliver projects in every municipality on the island: Maó, Ciutadella, Ferreries, Alaior, Es Mercadal, Sant Lluís, Es Migjorn Gran and Es Castell, plus the rest of the localities. Our installation crews travel to any point in Menorca, and the quote is always free and no-obligation.',
    },
  },
  {
    pregunta: {
      es: '¿Cuántos trabajadores tiene Pladur Menorca?',
      en: 'How many people work at Pladur Menorca?',
    },
    respuesta: {
      es: 'Actualmente contamos con un equipo de más de 50 trabajadores especializados en sistemas de yeso laminado. Todos nuestros operarios están certificados por los fabricantes (Placo Saint-Gobain y Knauf) y reciben formación continua en los centros técnicos de estas marcas.',
      en: 'We currently have a team of more than 50 workers specialised in gypsum plasterboard systems. All our installers are certified by the manufacturers (Placo Saint-Gobain and Knauf) and receive ongoing training at those brands\' technical centres.',
    },
  },
]

export const getSobreNosotrosFaqs = (lang: Lang = 'es'): FAQ[] =>
  sobreNosotrosFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const sobreNosotrosFaqs: FAQ[] = getSobreNosotrosFaqs('es')
export const sobreNosotrosFaqsEn: FAQ[] = getSobreNosotrosFaqs('en')
