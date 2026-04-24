import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const tabiquesFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Cuánto cuesta un tabique de pladur en Menorca?',
      en: 'How much does a drywall partition cost in Menorca?',
    },
    respuesta: {
      es: 'El precio de un tabique de pladur en Menorca parte desde 45€/m² para un tabique sencillo de una capa por cara. Un tabique acústico de doble capa con aislamiento de lana de roca puede costar entre 65€ y 90€/m². El precio final depende de la altura, el tipo de placa, el aislamiento y si incluye instalación eléctrica o de fontanería empotrada.',
      en: 'The price of a drywall partition in Menorca starts at €45/m² for a simple partition with one layer per side. A double-layer acoustic partition with rock wool insulation can cost €65-90/m². The final price depends on height, board type, insulation and whether it includes recessed electrical or plumbing services.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto tarda en instalarse un tabique de pladur?',
      en: 'How long does it take to install a drywall partition?',
    },
    respuesta: {
      es: 'Un tabique de pladur de 10 m lineales (2,5 m de altura) se instala en aproximadamente 1 jornada. Incluyendo perfilería, placas, aislamiento, cinta de juntas y primera mano de pasta, un equipo de 2 instaladores puede completar entre 15 y 25 m² por día. El acabado final (masilla, lijado) requiere 1-2 días adicionales de secado antes de imprimar y pintar.',
      en: 'A drywall partition of 10 linear metres (2.5 m high) is installed in roughly 1 working day. Including framing, boards, insulation, joint tape and a first filler coat, a two-installer team can complete 15-25 m² per day. The final finish (skim, sanding) requires an extra 1-2 days of drying before priming and painting.',
    },
  },
  {
    pregunta: {
      es: '¿Es estructural el tabique de pladur? ¿Aguanta peso?',
      en: 'Is a drywall partition structural? Does it hold weight?',
    },
    respuesta: {
      es: 'El tabique de pladur no es estructural: no soporta cargas del edificio. Sin embargo, puede aguantar cargas suspendidas importantes con los anclajes adecuados. Un tabique estándar soporta hasta 15kg por punto con tarugos especiales para pladur. Para cargas mayores (estanterías cargadas, TV grandes, muebles de baño) se refuerza la estructura interior con perfilería adicional o se instalan anclajes químicos.',
      en: 'A drywall partition is not structural: it does not carry the building\'s loads. However, it can hold significant suspended loads with the right fixings. A standard partition supports up to 15 kg per point with drywall-specific plugs. For heavier loads (loaded shelves, large TVs, bathroom units) the inner frame is reinforced with extra framing or chemical anchors are fitted.',
    },
  },
  {
    pregunta: {
      es: '¿Qué aislamiento acústico tiene un tabique de pladur?',
      en: 'What acoustic insulation does a drywall partition provide?',
    },
    respuesta: {
      es: 'Un tabique sencillo de pladur (1 placa por cara) ofrece un aislamiento acústico de Rw 33-40 dB. Un tabique de doble placa con lana de roca de 50mm alcanza Rw 50-57 dB, comparable a un tabique de ladrillo revocado. Para máxima insonorización (habitaciones de música, despachos) se instalan tabiques dobles con cámara de aire y lana mineral, superando los 60 dB.',
      en: 'A simple drywall partition (1 board per side) offers Rw 33-40 dB of acoustic insulation. A double-board partition with 50 mm rock wool reaches Rw 50-57 dB, comparable to a rendered brick partition. For maximum soundproofing (music rooms, offices) double-frame partitions with an air cavity and mineral wool are installed, exceeding 60 dB.',
    },
  },
  {
    pregunta: {
      es: '¿Se puede poner pladur en un baño o cocina?',
      en: 'Can drywall be used in a bathroom or kitchen?',
    },
    respuesta: {
      es: 'Sí. Para zonas húmedas como baños, cocinas y lavanderías se utiliza placa de yeso laminado hidrófugo (placa verde), que incorpora aditivos repelentes al agua. Esta placa cumple la norma EN 520 tipo H2 y resiste la humedad sin deformarse ni perder propiedades mecánicas. Se combina con junta tratada con sellador impermeable en las zonas de mayor exposición al agua.',
      en: 'Yes. For wet areas such as bathrooms, kitchens and laundries we use moisture-resistant plasterboard (green), which incorporates water-repellent additives. This board meets EN 520 type H2 and resists humidity without deforming or losing its mechanical properties. It is combined with joint treatment using waterproof sealant in areas most exposed to water.',
    },
  },
  {
    pregunta: {
      es: '¿Puedo demoler un tabique de pladur yo mismo?',
      en: 'Can I demolish a drywall partition myself?',
    },
    respuesta: {
      es: 'Técnicamente sí al no ser estructura portante, pero es importante verificar antes que no pasan instalaciones eléctricas, de fontanería o climatización por su interior. La demolición genera polvo de yeso y escombros que hay que gestionar. Si el tabique separa propiedades o comunidades, necesitas permiso de la comunidad y un técnico competente.',
      en: 'Technically yes, as it is not load-bearing, but it is important to check first that no electrical, plumbing or HVAC services run through it. The demolition generates gypsum dust and rubble that must be managed. If the partition separates properties or communities, you need the community\'s permission and a qualified technician.',
    },
  },
  {
    pregunta: {
      es: '¿Qué espesor tiene un tabique de pladur?',
      en: 'How thick is a drywall partition?',
    },
    respuesta: {
      es: 'Los espesores más comunes son: tabique sencillo con perfil de 48mm (total ~72mm con placas de 13mm), tabique estándar con perfil de 70mm (total ~96mm), y tabique acústico con perfil de 100mm (total ~126mm). Comparado con un tabique de ladrillo medio pie (110mm) más enfoscado (140mm total), el de pladur ahorra entre 4 y 14cm de espacio por tabique.',
      en: 'The most common thicknesses are: simple partition with 48 mm stud (total ~72 mm with 13 mm boards), standard partition with 70 mm stud (total ~96 mm), and acoustic partition with 100 mm stud (total ~126 mm). Compared with a half-brick partition (110 mm) plus render (140 mm total), drywall saves 4-14 cm per partition.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto peso aguanta un tabique de pladur?',
      en: 'How much weight can a drywall partition hold?',
    },
    respuesta: {
      es: 'Depende del anclaje: con tarugos de nylon para pladur soporta 10-15kg por punto. Con tarugos metálicos de mariposa o molly, hasta 25kg. Para pesos superiores (mueble de baño, TV grande) se instalan anclajes químicos o se refuerza el tabique con perfilería adicional en la zona de carga. Un tabique de pladur bien instalado y anclado soporta sin problema un mueble de baño completo.',
      en: 'It depends on the fixing: with drywall nylon plugs it holds 10-15 kg per point. With butterfly or Molly metal anchors, up to 25 kg. For heavier loads (bathroom units, large TVs) chemical anchors are used or the partition is reinforced with extra framing in the load area. A properly installed and anchored drywall partition easily holds a full bathroom unit.',
    },
  },
  {
    pregunta: {
      es: '¿Es el pladur resistente al fuego?',
      en: 'Is drywall fire-resistant?',
    },
    respuesta: {
      es: 'Sí. Las placas de yeso laminado estándar ofrecen resistencia al fuego de clase B-s1,d0 (Euroclase). Existen placas ignífugas (tipo RF o F) que contienen fibra de vidrio y vermiculita, logrando resistencias de EI 60 a EI 120 minutos (mantienen su integridad 1-2 horas ante el fuego). Un tabique de doble placa ignífuga con lana de roca es la solución estándar en oficinas, locales comerciales y edificios públicos.',
      en: 'Yes. Standard plasterboard offers class B-s1,d0 (Euroclass) fire reaction. Fire-rated boards (RF or F type) contain fibreglass and vermiculite, achieving EI 60 to EI 120 minute resistance (they keep their integrity for 1-2 hours under fire). A double fire-rated board partition with rock wool is the standard solution in offices, retail premises and public buildings.',
    },
  },
  {
    pregunta: {
      es: '¿Necesito licencia de obras para instalar un tabique de pladur?',
      en: 'Do I need a building permit to install a drywall partition?',
    },
    respuesta: {
      es: 'Para tabiquería interior de distribución (sin afectar estructura ni fachada) normalmente no se necesita licencia de obras mayor, pero sí puede requerir una comunicación previa de obra menor según el ayuntamiento. En Menorca, los municipios como Maó, Ciutadella o Alaior exigen comunicación previa para reformas interiores. Nosotros gestionamos toda la documentación necesaria si lo necesitas.',
      en: 'For interior partition work (not affecting structure or facade) a major works permit is not normally required, but a minor works notification may be needed depending on the town hall. In Menorca, municipalities such as Maó, Ciutadella or Alaior require a prior notification for interior renovations. We handle all the necessary paperwork if you need it.',
    },
  },
]

export const getTabiquesFaqs = (lang: Lang = 'es'): FAQ[] =>
  tabiquesFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const tabiquesFaqs: FAQ[] = getTabiquesFaqs('es')
export const tabiquesFaqsEn: FAQ[] = getTabiquesFaqs('en')
