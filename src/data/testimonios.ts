export interface Testimonio {
  id: number
  nombre: string
  ubicacion: string
  texto: string
  rating: number
  servicio: string
  fecha: string
  avatar?: string
  googleReview?: boolean
  /** Proyecto realizado por la SL matriz en Menorca (transparencia: Menorca es mercado nuevo 2026) */
  fromParentCompany?: boolean
}

/**
 * Testimonios iniciales: 3 proyectos realizados por Plaquistas y Acabados SL en Menorca,
 * mostrados con transparencia hasta contar con reseñas propias Menorca.
 * Tras las 5 primeras reseñas Menorca reales, activar `aggregateRating` en site.ts (FASE 3 §10).
 */
export const testimonios: Testimonio[] = [
  {
    id: 1,
    nombre: 'Julio Exposito',
    ubicacion: 'Menorca — Proyecto SL matriz',
    texto: 'Grata sorpresa en los tiempos que corren. No puedo más que agradecer el servicio realizado. Muy profesionales, me han resuelto el problema que tenía de insonorización de la pared con mi vecino. Gracias Paco por tu asesoramiento. Trabajo rápido y muy profesional. No puedo más que dar 5 estrellas.',
    rating: 5,
    servicio: 'Aislamiento Acústico',
    fecha: '2024',
    googleReview: true,
    fromParentCompany: true,
  },
  {
    id: 2,
    nombre: 'Aina Ramis',
    ubicacion: 'Menorca — Proyecto SL matriz',
    texto: 'Paco muy profesional, atiende tanto a grandes como a pequeños, es una muy buena persona y da muy buen trato. Gracias!!!!',
    rating: 5,
    servicio: 'Instalación Pladur',
    fecha: '2023',
    googleReview: true,
    fromParentCompany: true,
  },
  {
    id: 3,
    nombre: 'Pablo Pujol Salas',
    ubicacion: 'Menorca — Proyecto SL matriz',
    texto: 'Para mi, los mejores instalando pladur en Baleares. Muy profesionales y excelente relación calidad-precio.',
    rating: 5,
    servicio: 'Instalación Pladur',
    fecha: '2022',
    googleReview: true,
    fromParentCompany: true,
  },
]
