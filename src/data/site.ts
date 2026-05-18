const descriptionI18n = {
  es: 'Empresa especializada en instalación de pladur en Menorca. Falsos techos, tabiques, aislamiento acústico y térmico. +20 años, +6.000 proyectos Baleares. Presupuesto gratis.',
  en: 'Drywall installation company in Menorca. False ceilings, partitions, acoustic and thermal insulation. 20+ years, 6,000+ projects across the Balearic Islands. Free quote.',
}

const sloganI18n = {
  es: 'Especialistas exclusivos en pladur en Menorca',
  en: 'Exclusive drywall specialists in Menorca',
}

export const siteConfig = {
  name: 'Pladur Menorca',
  legalName: 'Plaquistas y Acabados SL',
  description: descriptionI18n.es,
  descriptionI18n,
  sloganI18n,
  url: 'https://www.pladurmenorca.com',
  email: 'info@plaquistas.com',
  phone: '627 829 723',
  phoneRaw: '627829723',
  whatsapp: '34627829723',
  whatsappText: 'Hola,%20me%20interesa%20un%20presupuesto%20de%20pladur%20en%20Menorca',
  whatsappTextEn: 'Hi,%20I%27m%20interested%20in%20a%20drywall%20quote%20in%20Menorca',
  address: {
    street: 'Carrer Jacint Verdaguer, 37, ESC. A 4º 2ª',
    city: 'Palma de Mallorca',
    province: 'Illes Balears',
    postalCode: '07004',
    country: 'ES',
    countryName: 'España',
    note: 'Domicilio social de Plaquistas y Acabados SL en Palma de Mallorca (desde 2004). Servicio operativo en toda Menorca.',
  },
  // Coordenadas de la oficina legal de la SL matriz (Palma de Mallorca).
  // Sin uso actual desde código tras el unificado de schemas en Menorca —
  // el JSON-LD usa `address` (street/city/postal) sin lat/lng, y el `geo`
  // del LocalBusiness se llena desde `serviceGeo` abajo. Se mantiene como
  // referencia para futuros mapas o JSON-LD específico de la SL matriz.
  coordinates: {
    lat: 39.5696,
    lng: 2.6502,
  },
  // Centro geográfico de Menorca (zona Es Mercadal). Es el geo "operativo"
  // del dominio pladurmenorca.com: lo consumen los <meta geo.position/ICBM>
  // del HTML y el `geo` del JSON-LD LocalBusiness. Punto neutro entre Maó
  // y Ciutadella — no sesga el ranking hacia un extremo de la isla.
  serviceGeo: {
    lat: 39.9923,
    lng: 4.0907,
  },
  geoPlacename: 'Menorca',
  experience: 20,
  foundingYear: 2004,
  menorcaLaunchYear: 2026,
  openingHoursText: 'Lunes–Viernes: 8:00–18:00 | Sábados: 8:00–14:00',
  openingHoursTextEn: 'Mon–Fri: 8:00–18:00 | Sat: 8:00–14:00',
  social: {
    instagram: 'https://www.instagram.com/pladurmenorca',
    google: 'https://share.google/ROaaqglclRkfMliJ6',
    facebook: '',
    linkedin: '',
    youtube: '',
    tiktok: '',
    pinterest: '',
  },
  og: {
    image: '/og/home.jpg',
  },
  googleReviewsUrl: 'https://share.google/ROaaqglclRkfMliJ6',
  indexNowKey: '',
  // Omitido hasta tener ≥5 reseñas reales Menorca (FASE 3 §10)
  aggregateRating: null as null | { ratingValue: string; reviewCount: string },
  // Experiencia y proyectos de la SL matriz
  parentCompany: {
    name: 'Pladur Menorca',
    url: 'https://www.pladurmenorca.com',
    projectsTotal: 6000,
    rating: '4.7',
    reviews: 25,
  },
  areaServed: [
    'Maó', 'Ciutadella', 'Alaior', 'Es Mercadal', 'Ferreries',
    'Sant Lluís', 'Es Migjorn Gran', 'Es Castell',
  ],
}

export type SiteConfig = typeof siteConfig
