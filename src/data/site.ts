export const siteConfig = {
  name: 'Pladur Mallorca',
  description: 'Empresa líder en instalación de pladur y escayola en Mallorca. Falsos techos, tabiques, aislamiento acústico y térmico. +20 años, +6.000 proyectos. Presupuesto gratis.',
  url: 'https://www.pladurmallorca.com',
  email: 'info@plaquistas.com',
  phone: '627 829 723',
  phoneRaw: '627829723',
  whatsapp: '34627829723',
  whatsappText: 'Hola,%20me%20interesa%20un%20presupuesto%20de%20pladur%20en%20Mallorca',
  address: {
    street: 'Carrer Jacint Verdaguer, 37, ESC. A 4º 2ª',
    city: 'Palma de Mallorca',
    province: 'Illes Balears',
    postalCode: '07004',
    country: 'ES',
    countryName: 'España',
  },
  coordinates: {
    lat: 39.5696,
    lng: 2.6502,
  },
  experience: 20,
  foundingYear: 2004,
  openingHoursText: 'Lunes–Viernes: 8:00–18:00 | Sábados: 8:00–14:00',
  social: {
    instagram: 'https://www.instagram.com/pladurmallorca',
    google: 'https://share.google/GI7l8UBujoMGt39ae',
    facebook: '',
    linkedin: '',
    youtube: '',
    tiktok: '',
    pinterest: '',
  },
  og: {
    image: '/og/home.jpg',
  },
  googleReviewsUrl: 'https://g.page/r/Ce99kVWSsJKxEBM/review',
  indexNowKey: '20a892852a8742a5967e019c782f9775',
  aggregateRating: {
    ratingValue: '4.7',
    reviewCount: '25',
  },
  areaServed: [
    'Palma de Mallorca', 'Calvià', 'Llucmajor', 'Marratxí', 'Inca', 'Manacor',
    'Alcúdia', 'Pollença', 'Felanitx', 'Andratx', 'Santanyí', 'Sa Pobla',
    'Sóller', 'Campos', 'Porreres', 'Petra', 'Artà', 'Binissalem',
    'Santa Maria del Camí', 'Ses Salines', 'Esporles', 'Valldemossa',
  ],
}

export type SiteConfig = typeof siteConfig
