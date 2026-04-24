import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const escayolaFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Hacéis trabajos de escayola además de pladur?',
      en: 'Do you also do escayola plastering besides drywall?',
    },
    respuesta: {
      es: 'Sí. Somos especialistas tanto en pladur (placa de yeso laminado) como en escayola (yeso tradicional y escayola proyectada). Muchos de nuestros proyectos combinan ambos materiales: pladur para tabiques y techos, y escayola para acabados decorativos, molduras y restauraciones en edificios antiguos.',
      en: 'Yes. We are specialists in both drywall (gypsum plasterboard) and escayola (traditional plaster and sprayed plaster). Many of our projects combine both materials: drywall for partitions and ceilings, and escayola for decorative finishes, mouldings and restorations in heritage buildings.',
    },
  },
  {
    pregunta: {
      es: '¿Qué tipos de escayola instaláis?',
      en: 'What kinds of escayola do you install?',
    },
    respuesta: {
      es: 'Instalamos escayola en placas (para techos continuos lisos), escayola decorativa con molduras, cornisas y rosetones, escayola proyectada (para grandes superficies con acabado rápido), y escayola de restauración para reproducir elementos ornamentales en edificios históricos de Menorca.',
      en: 'We install panel escayola (for smooth continuous ceilings), decorative escayola with mouldings, cornices and ceiling roses, sprayed escayola (for large areas with a quick finish), and restoration escayola to reproduce ornamental elements in Menorca\'s heritage buildings.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto cuesta la escayola en Menorca?',
      en: 'How much does escayola cost in Menorca?',
    },
    respuesta: {
      es: 'El precio depende del tipo de escayola y la complejidad. Un techo de escayola lisa arranca desde 25€/m². Las molduras y cornisas desde 12€/m lineal. La escayola decorativa con relieves o restauración requiere presupuesto personalizado. El presupuesto es gratuito y sin compromiso.',
      en: 'The price depends on the type of escayola and complexity. A smooth escayola ceiling starts from €25/m². Mouldings and cornices from €12 per linear metre. Decorative escayola with relief work or restoration requires a tailored quote. The quote is free and no-obligation.',
    },
  },
  {
    pregunta: {
      es: '¿Es mejor el pladur o la escayola para techos?',
      en: 'Is drywall or escayola better for ceilings?',
    },
    respuesta: {
      es: 'Depende del objetivo. El pladur es más versátil: permite integrar aislamiento, iluminación empotrada y instalaciones. La escayola da un acabado más noble y tradicional, ideal para restauraciones o estilos clásicos. En muchos proyectos combinamos ambos: pladur con acabado de escayola para obtener lo mejor de cada material.',
      en: 'It depends on the objective. Drywall is more versatile: it lets you integrate insulation, recessed lighting and services. Escayola delivers a nobler, more traditional finish, ideal for restorations or classical styles. In many projects we combine both: drywall with an escayola finish to get the best of each material.',
    },
  },
  {
    pregunta: {
      es: '¿Restauráis techos de escayola antiguos en Maó?',
      en: 'Do you restore old escayola ceilings in Maó?',
    },
    respuesta: {
      es: 'Sí. Tenemos amplia experiencia restaurando techos de escayola en edificios históricos del centro de Maó, especialmente en barrios como La Calatrava, Sant Pere y el Puig de Sant Pere. Reproducimos molduras, cornisas y elementos ornamentales con moldes tradicionales para mantener la estética original del edificio.',
      en: 'Yes. We have extensive experience restoring escayola ceilings in heritage buildings in central Maó, particularly in neighbourhoods such as La Calatrava, Sant Pere and Puig de Sant Pere. We reproduce mouldings, cornices and ornamental elements using traditional moulds to preserve the building\'s original aesthetic.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto tarda la instalación de un techo de escayola?',
      en: 'How long does an escayola ceiling installation take?',
    },
    respuesta: {
      es: 'Un techo de escayola lisa de 50 m² se instala en 2-3 jornadas. La escayola decorativa con molduras puede requerir 4-5 días adicionales. La escayola proyectada es más rápida: un techo de 80 m² en una sola jornada. El tiempo de secado es de 24-48 horas antes de pintar.',
      en: 'A 50 m² smooth escayola ceiling is installed in 2-3 working days. Decorative escayola with mouldings may require an additional 4-5 days. Sprayed escayola is faster: an 80 m² ceiling in a single day. Drying time is 24-48 hours before painting.',
    },
  },
]

export const getEscayolaFaqs = (lang: Lang = 'es'): FAQ[] =>
  escayolaFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const escayolaFaqs: FAQ[] = getEscayolaFaqs('es')
export const escayolaFaqsEn: FAQ[] = getEscayolaFaqs('en')
