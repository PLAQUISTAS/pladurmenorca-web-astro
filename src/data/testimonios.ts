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
}

export const testimonios: Testimonio[] = [
  {
    id: 1,
    nombre: 'Julio Exposito',
    ubicacion: 'Mallorca',
    texto: 'Grata sorpresa en los tiempos que corren. No puedo más que agradecer el servicio realizado por Pladur Mallorca. Muy profesionales me han resuelto el problema que tenía de insonorización de la pared con mi vecino. Gracias Paco por tu asesoramiento. Trabajo rápido y muy profesional. No puedo más que dar 5 estrellas.',
    rating: 5,
    servicio: 'Aislamiento Acústico',
    fecha: '2024',
    googleReview: true,
  },
  {
    id: 2,
    nombre: 'Aina Ramis',
    ubicacion: 'Mallorca',
    texto: 'Paco muy profesional, atiende tanto a grandes como a pequeños, es una muy buena persona y da muy buen trato. Gracias!!!!',
    rating: 5,
    servicio: 'Instalación Pladur',
    fecha: '2023',
    googleReview: true,
  },
  {
    id: 3,
    nombre: 'Martha Antuña Gallego',
    ubicacion: 'Mallorca',
    texto: 'Unos grandes profesionales, me han hecho la estantería tal como la pedí y cumpliendo las fechas, un servicio integral de atención al cliente, soy una clienta satisfecha. Los recomendaré.',
    rating: 5,
    servicio: 'Muebles de Pladur',
    fecha: '2022',
    googleReview: true,
  },
  {
    id: 4,
    nombre: 'Pablo Pujol Salas',
    ubicacion: 'Mallorca',
    texto: 'Para mi, los mejores instalando pladur en Mallorca. Muy profesionales y excelente relación calidad-precio.',
    rating: 5,
    servicio: 'Instalación Pladur',
    fecha: '2022',
    googleReview: true,
  },
  {
    id: 5,
    nombre: 'Damià Sales Fanals',
    ubicacion: 'Mallorca',
    texto: '100% recomendable. Muy contento con el trabajo que han realizado. Muy buen trato y todo muy profesional.',
    rating: 5,
    servicio: 'Reforma Interior',
    fecha: '2019',
    googleReview: true,
  },
  {
    id: 6,
    nombre: 'Cristina Vega Martí',
    ubicacion: 'Mallorca',
    texto: 'Grandes profesionales y un trato personal excepcional. Muy contenta con su trabajo. Recomendable 100%.',
    rating: 5,
    servicio: 'Instalación Pladur',
    fecha: '2019',
    googleReview: true,
  },
]
