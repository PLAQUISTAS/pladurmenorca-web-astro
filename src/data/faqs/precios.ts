import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const preciosFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Por qué el pladur en Menorca es más caro que en la Península?',
      en: 'Why is drywall more expensive in Menorca than on mainland Spain?',
    },
    respuesta: {
      es: 'Los materiales de construcción en Menorca tienen un sobrecoste por transporte marítimo de entre el 10 y el 20 % respecto a la Península. La placa y la perfilería llegan en ferry desde Barcelona o Valencia, y los fabricantes no tienen stock permanente en la isla para gamas técnicas (acústica, cortafuego). Además, el mercado laboral balear tiene costes más elevados. A pesar de ello, el pladur sigue siendo un 25-40 % más económico que la obra tradicional de ladrillo en coste total (materiales + mano de obra + escombros + tiempo).',
      en: 'Building materials in Menorca carry a 10-20% surcharge over mainland prices due to sea freight. Board and profiles arrive by ferry from Barcelona or Valencia, and manufacturers do not keep permanent island stock for technical ranges (acoustic, fire-rated). On top of that, the Balearic labour market runs at higher costs. Even so, drywall remains 25-40% cheaper than traditional brickwork in total cost (materials + labour + debris + time).',
    },
  },
  {
    pregunta: {
      es: '¿El presupuesto que enviáis es vinculante?',
      en: 'Are your quotes binding?',
    },
    respuesta: {
      es: 'Sí. Nuestros presupuestos son cerrados: el precio final no cambia salvo que el cliente solicite cambios en el proyecto o aparezcan imprevistos no visibles en la visita técnica (humedades ocultas, forjados en mal estado) que se comunican por escrito antes de continuar la obra. No hay sorpresas al final del trabajo.',
      en: 'Yes. Our quotes are fixed: the final price does not change unless the client requests project changes or unforeseen issues appear that were not visible during the technical visit (hidden damp, slabs in poor condition), which are reported in writing before work continues. No surprises at the end of the job.',
    },
  },
  {
    pregunta: {
      es: '¿Incluís el IVA en los presupuestos?',
      en: 'Do your quotes include VAT?',
    },
    respuesta: {
      es: 'Todos nuestros presupuestos indican claramente el precio sin IVA y con IVA (21 % general, 10 % reducido en rehabilitación de vivienda habitual con más de 2 años de antigüedad según Ley 37/1992). Trabajamos siempre con factura y no aceptamos pagos en negro.',
      en: 'All our quotes clearly show the price without VAT and with VAT (21% standard, 10% reduced for renovation of a main dwelling over 2 years old per Spanish VAT Law 37/1992). We always invoice and do not accept off-the-books payments.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto tiempo tarda el presupuesto tras la visita técnica?',
      en: 'How long does the quote take after the technical visit?',
    },
    respuesta: {
      es: 'Enviamos el presupuesto detallado y cerrado entre 24 y 48 horas después de la visita técnica. Para proyectos complejos con múltiples partidas (reforma integral, obra hotelera, obra nueva) puede ampliarse a 72 horas. Si necesitas el presupuesto para un plazo concreto (licencia de obra, financiación), avísanos y lo priorizamos.',
      en: 'We send the detailed, fixed quote within 24-48 hours of the technical visit. For complex projects with multiple line items (full renovation, hotel work, new build) this may extend to 72 hours. If you need the quote by a specific deadline (building permit, financing), let us know and we will prioritise it.',
    },
  },
  {
    pregunta: {
      es: '¿Qué formas de pago aceptáis?',
      en: 'What payment methods do you accept?',
    },
    respuesta: {
      es: 'Aceptamos transferencia bancaria, Bizum (hasta el límite diario) y efectivo (siempre con factura). El pago habitual se estructura en: 30-40 % de señal al inicio de la obra para compra de materiales, 30 % a mitad de ejecución y el resto a la entrega con el visto bueno del cliente. En obras pequeñas (<2.000 €) suele hacerse al 50 %/50 %.',
      en: 'We accept bank transfer, Bizum (up to the daily limit) and cash (always invoiced). Standard payment is structured as: 30-40% deposit at the start of the works for materials, 30% mid-execution and the balance on handover with the client\'s sign-off. On small jobs (<€2,000) we typically split it 50/50.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto tiempo es válido el presupuesto?',
      en: 'How long is the quote valid?',
    },
    respuesta: {
      es: 'Nuestros presupuestos tienen una validez de 30 días desde la emisión. Pasado ese plazo pueden sufrir variaciones si los proveedores han actualizado precios de placa o perfilería (sube anual típicamente entre el 3 y el 6 %). En la práctica, si nos contratas dentro de los 60 días siguientes respetamos el precio original siempre que los materiales no hayan tenido subidas extraordinarias.',
      en: 'Our quotes are valid for 30 days from issue. After that period they may vary if suppliers have updated board or profile prices (typical annual rise of 3-6%). In practice, if you hire us within the following 60 days we honour the original price provided materials have not had extraordinary price rises.',
    },
  },
  {
    pregunta: {
      es: '¿Hay descuento por obras grandes o recomendar clientes?',
      en: 'Do you offer discounts for large jobs or client referrals?',
    },
    respuesta: {
      es: 'En proyectos de más de 500 m² aplicamos descuento por economía de escala (5-15 % según volumen). Para promotoras, constructoras y estudios con los que trabajamos de forma recurrente disponemos de tarifa B2B preferente. Si nos recomiendas un cliente que contrate con nosotros, descontamos un porcentaje de tu próxima obra.',
      en: 'On projects over 500 m² we apply an economy-of-scale discount (5-15% depending on volume). For developers, builders and studios we work with on a recurring basis we offer preferred B2B rates. If you refer a client who hires us, we discount a percentage off your next job.',
    },
  },
]

export const getPreciosFaqs = (lang: Lang = 'es'): FAQ[] =>
  preciosFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const preciosFaqs: FAQ[] = getPreciosFaqs('es')
export const preciosFaqsEn: FAQ[] = getPreciosFaqs('en')
