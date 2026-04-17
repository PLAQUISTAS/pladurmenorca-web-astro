import type { FAQ } from './types'
import { siteConfig } from '@/data/site'

export const homeFaqs: FAQ[] = [
  {
    pregunta: '¿Cuánto cuesta instalar pladur en Mallorca?',
    respuesta: 'El precio varía según el tipo de trabajo: un falso techo básico empieza desde 29€/m², los tabiques de distribución desde 45€/m² y el aislamiento acústico desde 6€/m². En Mallorca los precios son algo superiores a la Península por los costes logísticos. El mejor precio es el del presupuesto personalizado: lo realizamos gratis y sin compromiso tras una visita técnica.',
  },
  {
    pregunta: '¿Cuánto tiempo tarda una instalación de pladur?',
    respuesta: 'Depende de la superficie y complejidad. Un falso techo de 50m² puede terminarse en 1-2 jornadas. Una reforma completa de piso con tabiques y techos puede llevar entre 1 y 2 semanas. Antes de empezar siempre acordamos plazos concretos y los cumplimos.',
  },
  {
    pregunta: '¿Trabajáis en toda Mallorca o solo en Palma?',
    respuesta: 'Trabajamos en toda la isla de Mallorca, desde Palma y Calvià hasta Alcúdia, Manacor, Felanitx o Pollença. No aplicamos suplemento por desplazamiento dentro de Mallorca para obras a partir de 500€.',
  },
  {
    pregunta: '¿Qué diferencia hay entre pladur y tabique de ladrillo?',
    respuesta: 'El pladur (yeso laminado) es 3-4 veces más rápido de instalar, genera mínimos escombros, pesa un 60% menos, permite pasar instalaciones por el interior y tiene un acabado más liso. El ladrillo aguanta más peso empotrado y tiene mayor inercia térmica. Para distribución de espacios interiores, el pladur es la opción más eficiente en la mayoría de los casos.',
  },
  {
    pregunta: '¿El pladur es adecuado para baños y zonas húmedas?',
    respuesta: 'Sí. Para zonas húmedas utilizamos placa hidrófuga (H), también conocida como placa verde. Esta placa tiene aditivos especiales que repelen la humedad y resisten el vapor de agua. Es la solución estándar para baños, cocinas y cualquier zona en contacto con la humedad.',
  },
  {
    pregunta: '¿Ofrecéis garantía en vuestros trabajos?',
    respuesta: 'Sí, todos nuestros trabajos incluyen garantía de 2 años en mano de obra. Los materiales tienen garantía del fabricante (Placo, Knauf, Lafarge). Si surge cualquier problema durante ese período, lo resolvemos sin coste adicional.',
  },
  {
    pregunta: '¿Necesito obra de albañilería antes de poner pladur?',
    respuesta: 'En la mayoría de los casos no. Una de las grandes ventajas del pladur es que se instala sin obra previa: no hay que picar paredes, no se generan escombros y el espacio queda limpio desde el primer día. Solo en casos concretos (humedades activas, estructuras muy irregulares) puede ser necesaria una pequeña intervención previa.',
  },
  {
    pregunta: '¿Hacéis trabajos de escayola además de pladur?',
    respuesta: 'Sí. Además de ser la empresa líder en pladur de Mallorca, contamos con un equipo especializado en escayola. Realizamos molduras decorativas, cornisas, arcos, columnas, revestimientos continuos y acabados en yeso de alta gama. La escayola es el complemento ideal para proyectos que requieren un acabado premium.',
  },
  {
    pregunta: '¿Cómo pido un presupuesto?',
    respuesta: `Puedes contactarnos por teléfono (${siteConfig.phone}), WhatsApp o rellenando el formulario de esta web. Concertamos una visita técnica gratuita, medimos y enviamos el presupuesto detallado en 24-48 horas. Sin compromiso.`,
  },
]
