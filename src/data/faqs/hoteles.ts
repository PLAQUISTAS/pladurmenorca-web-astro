import type { FAQ } from './types'
import type { Lang } from '@/i18n'

interface BilingualFAQ {
  pregunta: { es: string; en: string }
  respuesta: { es: string; en: string }
}

const hotelesFaqsData: BilingualFAQ[] = [
  {
    pregunta: {
      es: '¿Se puede reformar un hotel sin cerrar completamente?',
      en: 'Can a hotel be renovated without closing fully?',
    },
    respuesta: {
      es: 'Sí. Trabajamos por fases, planta a planta o por bloques de habitaciones. Mientras reformamos una zona, el resto del hotel puede seguir operativo. Coordinamos los horarios de trabajo para minimizar las molestias a los huéspedes de las plantas en servicio.',
      en: 'Yes. We work in phases, floor by floor or in blocks of rooms. While one area is under renovation, the rest of the hotel can stay open. We coordinate working hours to minimise disruption to guests on the floors still in service.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto tiempo tarda la reforma de una habitación de hotel con pladur?',
      en: 'How long does a drywall hotel room renovation take?',
    },
    respuesta: {
      es: 'Entre 2 y 4 días laborables por habitación, dependiendo del alcance (solo techo, techo + trasdosado acústico, redistribución completa). Para bloques de 20 habitaciones trabajamos con equipos simultáneos y completamos la reforma en 10-15 días laborables.',
      en: '2-4 working days per room depending on scope (ceiling only, ceiling + acoustic wall lining, or full layout change). For blocks of 20 rooms we run parallel teams and complete the refurbishment in 10-15 working days.',
    },
  },
  {
    pregunta: {
      es: '¿El pladur cumple la normativa de incendios para hoteles?',
      en: 'Does drywall meet fire-safety regulations for hotels?',
    },
    respuesta: {
      es: 'Sí. Utilizamos placa ignífuga (tipo FOC/F) que alcanza resistencia al fuego EI-60 y EI-120 según configuración. Cumple la sectorización exigida por el CTE DB-SI para establecimientos hoteleros. Proporcionamos toda la documentación técnica y certificados de los materiales.',
      en: 'Yes. We use fire-resistant board (type FOC/F) reaching EI-60 and EI-120 fire resistance depending on configuration. It meets the compartmentation required by CTE DB-SI for hotel premises. We provide all technical documentation and material certificates.',
    },
  },
  {
    pregunta: {
      es: '¿Qué nivel de aislamiento acústico se consigue entre habitaciones?',
      en: 'What level of acoustic insulation is achieved between rooms?',
    },
    respuesta: {
      es: 'Con nuestros sistemas de tabiquería desvinculada con lana mineral de alta densidad alcanzamos entre 50 y 58 dBA de aislamiento a ruido aéreo, cumpliendo y superando el mínimo de 50 dBA que exige el CTE-HR para recintos protegidos en uso residencial público.',
      en: 'With our decoupled partition systems using high-density mineral wool we reach 50-58 dBA of airborne sound insulation, meeting and exceeding the 50 dBA minimum required by CTE-HR for protected spaces in public residential use.',
    },
  },
  {
    pregunta: {
      es: '¿Cuánto cuesta la reforma de habitaciones de hotel con pladur?',
      en: 'How much does a drywall hotel room renovation cost?',
    },
    respuesta: {
      es: 'Entre 2.500€ y 4.500€ por habitación para una reforma completa (tabiques + techo + aislamiento acústico). Solo falso techo LED en pasillos: 25-40€/m². Sectorización ignífuga por planta: 55-85€/m². Ofrecemos descuentos por volumen a partir de 10 habitaciones.',
      en: '€2,500-4,500 per room for a full renovation (partitions + ceiling + acoustic insulation). LED false ceiling in corridors only: €25-40/m². Fire compartmentation per floor: €55-85/m². We offer volume discounts from 10 rooms onwards.',
    },
  },
  {
    pregunta: {
      es: '¿Cuál es la mejor época para reformar un hotel en Menorca?',
      en: 'What is the best time to renovate a hotel in Menorca?',
    },
    respuesta: {
      es: 'La ventana óptima es de octubre a marzo, cuando la ocupación hotelera baja al 15-40%. Recomendamos planificar en septiembre para tener materiales reservados y equipo asignado. Las reformas que empiezan en noviembre suelen entregarse con margen de sobra antes de Semana Santa.',
      en: 'The optimal window is October to March, when hotel occupancy drops to 15-40%. We recommend planning in September to reserve materials and assign the team. Renovations that start in November usually deliver with comfortable margin before Easter.',
    },
  },
]

export const getHotelesFaqs = (lang: Lang = 'es'): FAQ[] =>
  hotelesFaqsData.map((item) => ({
    pregunta: item.pregunta[lang],
    respuesta: item.respuesta[lang],
  }))

export const hotelesFaqs: FAQ[] = getHotelesFaqs('es')
export const hotelesFaqsEn: FAQ[] = getHotelesFaqs('en')
