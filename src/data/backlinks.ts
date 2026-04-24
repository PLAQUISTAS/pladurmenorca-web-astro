export const backlinks = {
  directories: [
    { name: 'Google Business Profile', url: 'https://business.google.com', status: 'pending', priority: 'high', note: 'GMB Menorca locations/3914199722026324055 (FASE 3 §12)' },
    { name: 'Bing Places', url: 'https://www.bingplaces.com', status: 'pending', priority: 'high' },
    { name: 'Páginas Amarillas', url: 'https://www.paginasamarillas.es', status: 'pending', priority: 'high' },
    { name: 'Yelp', url: 'https://www.yelp.es', status: 'pending', priority: 'medium' },
    { name: 'Cylex', url: 'https://www.cylex.es', status: 'pending', priority: 'medium' },
    { name: 'Europages', url: 'https://www.europages.es', status: 'pending', priority: 'medium' },
    { name: 'eInforma', url: 'https://www.einforma.com', status: 'pending', priority: 'low' },
  ],
  platforms: [
    { name: 'Habitissimo', url: 'https://www.habitissimo.es', status: 'pending', priority: 'high', category: 'reformas' },
    { name: 'Houzz', url: 'https://www.houzz.es', status: 'pending', priority: 'high', category: 'reformas' },
    { name: 'Reformista', url: 'https://www.reformista.es', status: 'pending', priority: 'medium', category: 'reformas' },
    { name: 'Cronoshare', url: 'https://www.cronoshare.com', status: 'pending', priority: 'medium', category: 'servicios' },
  ],
  suppliers: [
    { name: 'Saint-Gobain (Placo)', url: '', status: 'pending', priority: 'high', note: 'Solicitar enlace como instalador certificado' },
    { name: 'Knauf', url: '', status: 'pending', priority: 'high', note: 'Solicitar enlace como instalador oficial' },
    { name: 'Lafarge', url: '', status: 'pending', priority: 'medium', note: 'Solicitar enlace como distribuidor' },
    { name: 'Distriplac Menorca', url: '', status: 'pending', priority: 'high', note: 'Distribuidor aliado local (mencionado en /sobre-nosotros)' },
  ],
  social: [
    { name: 'Instagram', url: 'https://www.instagram.com/pladurmenorca', status: 'pending', priority: 'high' },
    { name: 'Google Business', url: '', status: 'pending', priority: 'high', note: 'Crear link review post-lanzamiento' },
    { name: 'Facebook', url: '', status: 'pending', priority: 'high' },
    { name: 'LinkedIn', url: '', status: 'pending', priority: 'medium' },
    { name: 'YouTube', url: '', status: 'pending', priority: 'medium' },
    { name: 'Pinterest', url: '', status: 'pending', priority: 'low' },
  ],
}

export type BacklinkStatus = 'active' | 'pending' | 'rejected'
export type BacklinkPriority = 'high' | 'medium' | 'low'
