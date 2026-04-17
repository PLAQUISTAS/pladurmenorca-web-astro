export interface Municipio {
  slug: string
  nombre: string
  h1: string
  descripcion: string
  href: string
  heroImage: string
  metaTitle: string
  metaDescription: string
  introLocal: string
  serviciosLocal: string
  proyectoDestacado?: string
  barrios: string[]
  tipoVivienda: string
  problemaHabitual: string
}

export const municipios: Municipio[] = [
  {
    slug: 'pladur-palma',
    nombre: 'Palma de Mallorca',
    h1: 'Pladur en Palma de Mallorca — Instaladores Profesionales',
    descripcion: 'Instalación de pladur en Palma. Falsos techos, tabiques y aislamiento en pisos, locales y oficinas. Presupuesto en 24h.',
    href: '/pladur-palma',
    heroImage: '/images/proyectos/reforma-integral-piso-santa-catalina-pladur-mallorca.webp',
    metaTitle: 'Pladur en Palma de Mallorca | Instaladores | Presupuesto Gratis',
    metaDescription: 'Instalación de pladur en Palma de Mallorca. Falsos techos, tabiques, aislamiento en pisos y locales. Barrios: Santa Catalina, El Terreno, Portixol. ☎ 627 829 723',
    introLocal: 'Palma de Mallorca concentra el mayor parque de viviendas de la isla, con una enorme diversidad: desde pisos centenarios en el Centro Histórico con techos de 4 metros, hasta apartamentos modernos en barrios como Portixol o Son Vida. Cada tipología presenta retos distintos que nuestro equipo conoce a la perfección tras décadas de trabajo en la capital.',
    serviciosLocal: 'En Palma realizamos falsos techos para modernizar pisos antiguos con techos altos, tabiques para redistribuir apartamentos heredados con distribuciones anticuadas, trasdosados para mejorar el aislamiento de medianeras en edificios plurifamiliares y aislamiento acústico en locales comerciales y hostelería del centro.',
    proyectoDestacado: 'Rehabilitación integral de un piso de 120m² en Santa Catalina: falso techo con integración LED, tabique divisorio dormitorios y trasdosado de fachada con aislamiento térmico. Resultado: reducción de 8°C en temperatura interior en verano.',
    barrios: ['Centro Histórico', 'Santa Catalina', 'El Terreno', 'Portixol', 'Son Vida', 'El Molinar', 'Génova', 'Son Armadams', 'La Bonanova', 'Coll d\'en Rabassa'],
    tipoVivienda: 'Pisos antiguos de altura con techos altos, apartamentos modernos y locales comerciales',
    problemaHabitual: 'Mala distribución heredada, ausencia de aislamiento acústico, techos deteriorados y puentes térmicos en fachadas antiguas',
  },
  {
    slug: 'pladur-calvia',
    nombre: 'Calvià',
    h1: 'Pladur en Calvià — Instaladores para Chalets, Villas y Apartamentos',
    descripcion: 'Pladur en Calvià. Especialistas en chalets, villas de lujo y apartamentos turísticos en Santa Ponça, Palmanova y Portals Nous.',
    href: '/pladur-calvia',
    heroImage: '/images/proyectos/dormitorio-vistas-mar-falso-techo-calvia.webp',
    metaTitle: 'Pladur en Calvià | Chalets, Villas y Apartamentos | Santa Ponça',
    metaDescription: 'Instalación de pladur en Calvià. Chalets, villas de lujo y apartamentos turísticos en Santa Ponça, Palmanova, Magaluf, Portals Nous. ☎ 627 829 723',
    introLocal: 'El municipio de Calvià alberga algunas de las viviendas más exclusivas de Mallorca: chalets de lujo en Portals Nous y Son Vida, villas con vistas al mar en Illetes y Bendinat, y una enorme concentración de apartamentos turísticos en Palmanova y Magaluf. Esta diversidad requiere soluciones especializadas que combinen rendimiento técnico con calidad de acabados de alto nivel.',
    serviciosLocal: 'En Calvià trabajamos habitualmente en reformas integrales de chalets con redistribución total mediante tabiques de pladur, instalación de falsos techos decorativos en villas de lujo con integración LED, aislamiento acústico en apartamentos turísticos para cumplir normativas de ruido y mejorar la valoración en plataformas como Airbnb, y reformas de hostelería entre temporadas en el corredor turístico de Palmanova-Magaluf.',
    proyectoDestacado: 'Reforma completa de apartamento turístico de 85m² en Santa Ponça: falso techo con aislamiento acústico, tabique divisor salón-dormitorio y baño con placa hidrófuga. Mejoró de 3,8 a 4,7 estrellas en plataformas de reserva.',
    barrios: ['Santa Ponça', 'Palmanova', 'Magaluf', 'Portals Nous', 'Peguera', 'Illetes', 'Bendinat', 'El Toro', 'Costa de la Calma', 'Camp de Mar'],
    tipoVivienda: 'Chalets unifamiliares, villas de lujo, apartamentos turísticos y locales de hostelería',
    problemaHabitual: 'Aislamiento acústico insuficiente en zonas turísticas de alta densidad, necesidad de reformas entre temporadas con plazos ajustados',
  },
]

export const getAllMunicipios = () => municipios
export const getMunicipioBySlug = (slug: string) =>
  municipios.find((m) => m.slug === slug)

// Lista extendida para el formulario y zonas de servicio
export const allMunicipiosMallorca = [
  'Alaró', 'Alcúdia', 'Algaida', 'Andratx', 'Ariany', 'Artà', 'Banyalbufar',
  'Binissalem', 'Búger', 'Bunyola', 'Calvià', 'Campanet', 'Campos', 'Capdepera',
  'Consell', 'Costitx', 'Deià', 'Escorca', 'Esporles', 'Estellencs', 'Felanitx',
  'Fornalutx', 'Inca', 'Lloret de Vistalegre', 'Lloseta', 'Llubí', 'Llucmajor',
  'Manacor', 'Mancor de la Vall', 'Maria de la Salut', 'Marratxí', 'Montuïri',
  'Muro', 'Palma de Mallorca', 'Petra', 'Pollença', 'Porreres', 'Puigpunyent',
  'Sa Pobla', 'Sant Joan', 'Sant Llorenç des Cardassar', 'Santa Eugènia',
  'Santa Margalida', 'Santa Maria del Camí', 'Santanyí', 'Selva', 'Sencelles',
  'Ses Salines', 'Sineu', 'Sóller', 'Son Servera', 'Valldemossa', 'Vilafranca de Bonany',
]
