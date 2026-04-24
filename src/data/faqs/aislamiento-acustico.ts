import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const aislamientoAcusticoFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Cuántos decibelios reduce un tabique de pladur con aislamiento acústico?',
      en: 'How many decibels does a drywall partition with acoustic insulation reduce?',
    },
    respuesta: {
      es: 'Un tabique con doble placa y lana mineral de alta densidad puede reducir entre 45 y 55 dB de ruido aéreo, dependiendo de la solución elegida. La normativa CTE-DB-HR exige un mínimo de 50 dBA para paredes entre viviendas. Nuestros sistemas de gama alta con doble estructura y lana de roca de 70mm superan los 60 dB de reducción.',
      en: 'A partition with double board and high-density mineral wool can reduce 45-55 dB of airborne noise depending on the chosen solution. The CTE-DB-HR code requires a minimum of 50 dBA for walls between dwellings. Our high-end systems with a double frame and 70 mm rock wool exceed 60 dB of reduction.',
    },
  },
  {
    pregunta: {
      es: '¿El pladur aísla del ruido de los vecinos de arriba?',
      en: 'Does drywall block noise from neighbours upstairs?',
    },
    respuesta: {
      es: 'Para el ruido de impacto (pasos, arrastres) la solución más eficiente es un suelo flotante con banda perimetral instalado en la vivienda superior. Si solo se puede actuar en la vivienda inferior, instalamos un falso techo descolgado con suspensiones antivibratorias (tipo Isomax o percha acústica) que reduce entre 8 y 15 dB el ruido transmitido por el forjado. La combinación de ambas intervenciones es la más efectiva.',
      en: 'For impact noise (footsteps, dragging) the most effective solution is a floating floor with a perimeter band installed in the flat above. If only the lower flat can be worked on, we install a decoupled false ceiling with anti-vibration hangers (Isomax or acoustic hanger type) that reduces 8-15 dB of noise transmitted through the slab. Combining both interventions is the most effective approach.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto cuesta insonorizar una habitación en Menorca?',
      en: 'How much does it cost to soundproof a room in Menorca?',
    },
    respuesta: {
      es: 'Depende de la superficie y el nivel de aislamiento. Una solución básica para reducir ruido de voces cuesta entre 1.500€ y 3.000€ para una habitación de 15m². Una insonorización profesional para dormitorio (4 paredes + techo + suelo flotante) ronda los 4.000-7.000€. Estudios de grabación o salas de música pueden superar los 10.000€.',
      en: 'It depends on the floor area and the insulation level. A basic solution to reduce voice noise costs €1,500-3,000 for a 15 m² room. Professional bedroom soundproofing (4 walls + ceiling + floating floor) is around €4,000-7,000. Recording studios or music rooms can exceed €10,000.',
    },
  },
  {
    pregunta: {
      es: '¿Qué tipo de aislamiento acústico es mejor: lana de roca o espuma?',
      en: 'Which acoustic insulation is better: rock wool or foam?',
    },
    respuesta: {
      es: 'La lana de roca (lana mineral) es superior como aislamiento acústico porque tiene mayor densidad y absorbe mejor las frecuencias graves. La espuma de poliuretano o melamina es útil para tratamiento acústico interior (reverberación) pero no para aislar ruido entre estancias. En nuestras instalaciones usamos lana de roca de alta densidad (40-80 kg/m³) como estándar.',
      en: 'Rock wool (mineral wool) is superior as acoustic insulation because it has higher density and absorbs low frequencies better. Polyurethane or melamine foam is useful for interior acoustic treatment (reverberation) but not for insulating noise between rooms. In our installations we use high-density rock wool (40-80 kg/m³) as standard.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto tarda insonorizar una habitación?',
      en: 'How long does it take to soundproof a room?',
    },
    respuesta: {
      es: 'Para una habitación de 15-20m², la insonorización completa (4 paredes, techo y suelo flotante) tarda entre 4 y 7 jornadas laborales. Solo paredes y techo: 3-4 jornadas. El tiempo incluye desmontaje si es necesario, instalación de estructura, aislamiento, placas, tratamiento de juntas y limpieza.',
      en: 'For a 15-20 m² room, full soundproofing (4 walls, ceiling and floating floor) takes 4-7 working days. Walls and ceiling only: 3-4 working days. The time includes stripping out if needed, framing installation, insulation, boards, joint treatment and cleaning.',
    },
  },
  {
    pregunta: {
      es: '¿El aislamiento acústico con pladur sirve para ruido de tráfico?',
      en: 'Does drywall acoustic insulation work against traffic noise?',
    },
    respuesta: {
      es: 'Sí, especialmente si las ventanas ya son de doble acristalamiento. Un trasdosado acústico en la fachada con doble placa, lana de roca de 50 mm y banda perimetral desolidarizante puede aportar 10-15 dB adicionales de aislamiento respecto a una fachada sin tratar. Es una solución muy demandada en viviendas junto a carreteras principales de Menorca (Me-1 Maó-Ciutadella, Me-7 a Fornells, Me-20 hacia Sant Lluís) o cerca del aeropuerto.',
      en: 'Yes, especially if the windows are already double-glazed. An acoustic facade lining with double board, 50 mm rock wool and a decoupling perimeter band can add 10-15 dB of insulation compared to an untreated facade. It is a highly sought-after solution in homes next to Menorca\'s main roads (Me-1 Maó-Ciutadella, Me-7 to Fornells, Me-20 towards Sant Lluís) or near the airport.',
    },
  },
  {
    pregunta: {
      es: '¿Qué es un trasdosado acústico?',
      en: 'What is an acoustic wall lining?',
    },
    respuesta: {
      es: 'Un trasdosado acústico es un tabique de pladur que se instala delante de una pared existente, dejando una cámara de aire que se rellena con material absorbente (lana mineral de 40-60 mm). Incluye bandas perimetrales de neopreno o caucho EPDM para desolidarizar la nueva estructura de la pared original, evitando el puente acústico estructural. Es la técnica más eficaz para mejorar el aislamiento de paredes ya construidas sin necesidad de obra húmeda.',
      en: 'An acoustic wall lining is a drywall partition installed in front of an existing wall, leaving an air cavity filled with absorbent material (40-60 mm mineral wool). It includes neoprene or EPDM rubber perimeter bands to decouple the new frame from the original wall, avoiding the structural acoustic bridge. It is the most effective technique to improve the insulation of existing walls without wet trades.',
    },
  },
  {
    pregunta: {
      es: '¿Qué normativa regula el aislamiento acústico?',
      en: 'What regulations govern acoustic insulation?',
    },
    respuesta: {
      es: 'El Documento Básico HR (Protección frente al ruido) del Código Técnico de la Edificación (CTE) establece los niveles mínimos de aislamiento acústico entre recintos. Para paredes entre viviendas exige 50 dBA, para fachadas depende del ruido exterior (desde 30 hasta 42 dBA). En la Comunidad de Baleares se aplica directamente el CTE estatal.',
      en: 'Basic Document HR (Noise Protection) of the Spanish Building Code (CTE) sets the minimum acoustic insulation levels between rooms. For walls between dwellings it requires 50 dBA; for facades it depends on outdoor noise (from 30 to 42 dBA). The Balearic Islands apply the national CTE directly.',
    },
  },
  {
    pregunta: {
      es: '¿Se puede insonorizar un local comercial o bar?',
      en: 'Can a commercial premises or bar be soundproofed?',
    },
    respuesta: {
      es: 'Sí, y en muchos casos es obligatorio por normativa municipal. En Menorca, los locales de ocio nocturno deben cumplir límites de emisión sonora hacia viviendas colindantes. Instalamos tabiques acústicos de alta prestación (EI + Rw 60+ dB), suelos flotantes y techos descolgados. También gestionamos mediciones acústicas pre y post instalación para certificar el cumplimiento.',
      en: 'Yes, and in many cases it is required by municipal regulations. In Menorca, nightlife venues must meet sound emission limits towards neighbouring homes. We install high-performance acoustic partitions (EI + Rw 60+ dB), floating floors and suspended ceilings. We also handle acoustic measurements before and after installation to certify compliance.',
    },
  },
  {
    pregunta: {
      es: '¿Cuál es la diferencia entre aislamiento acústico y acondicionamiento acústico?',
      en: 'What is the difference between acoustic insulation and acoustic conditioning?',
    },
    respuesta: {
      es: 'El aislamiento acústico impide que el ruido pase de una estancia a otra (paredes, techos, suelos). El acondicionamiento acústico mejora la calidad sonora dentro de una misma estancia (paneles absorbentes, techos acústicos). Son complementarios: primero se aísla (evitar que entre/salga ruido) y luego se acondiciona (mejorar el sonido interior).',
      en: 'Acoustic insulation prevents noise from passing from one room to another (walls, ceilings, floors). Acoustic conditioning improves sound quality within a single room (absorbent panels, acoustic ceilings). They are complementary: first you insulate (to stop noise entering/leaving) and then you condition (to improve the interior sound).',
    },
  },
]

export const getAislamientoAcusticoFaqs = (lang: Lang = 'es'): FAQ[] =>
  aislamientoAcusticoFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const aislamientoAcusticoFaqs: FAQ[] = getAislamientoAcusticoFaqs('es')
export const aislamientoAcusticoFaqsEn: FAQ[] = getAislamientoAcusticoFaqs('en')
