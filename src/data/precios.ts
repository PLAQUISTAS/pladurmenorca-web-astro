export interface PrecioItem {
  servicio: string
  descripcion: string
  precioMin: number
  precioMax: number
  unidad: string
  incluye: string[]
}

export interface PrecioCategoria {
  categoria: string
  descripcion: string
  items: PrecioItem[]
}

// Precios Menorca 2026: +3-8 % sobre Menorca por coste logístico insular
// Alineado con FASE 3 v4 §4 (Página 14 /precios-pladur-menorca)
export const preciosCategorias: PrecioCategoria[] = [
  {
    categoria: 'Falsos Techos',
    descripcion: 'Precios por m² instalado, incluyendo estructura y placa',
    items: [
      {
        servicio: 'Falso techo continuo básico',
        descripcion: 'Placa estándar BA13, estructura vista simple',
        precioMin: 30,
        precioMax: 36,
        unidad: 'm²',
        incluye: ['Estructura metálica', 'Placa BA13', 'Tratamiento juntas', 'Acabado para pintar'],
      },
      {
        servicio: 'Falso techo registrable',
        descripcion: 'Con trampillas de acceso a instalaciones',
        precioMin: 30,
        precioMax: 36,
        unidad: 'm²',
        incluye: ['Estructura metálica', 'Placa BA13', 'Trampillas de registro', 'Acabado para pintar'],
      },
      {
        servicio: 'Falso techo con aislamiento acústico',
        descripcion: 'Doble placa con lana mineral, montantes desvinculados',
        precioMin: 36,
        precioMax: 52,
        unidad: 'm²',
        incluye: ['Estructura desvinculada', '2x placa BA15', 'Lana mineral 50mm', 'Banda resiliente'],
      },
      {
        servicio: 'Falso techo decorativo',
        descripcion: 'Con molduras, artesonados o formas curvas',
        precioMin: 46,
        precioMax: 82,
        unidad: 'm²',
        incluye: ['Estructura a medida', 'Placa especial', 'Molduras', 'Acabado de alta calidad'],
      },
      {
        servicio: 'Falso techo con integración LED',
        descripcion: 'Techo + instalación eléctrica de iluminación empotrada',
        precioMin: 48,
        precioMax: 77,
        unidad: 'm²',
        incluye: ['Techo terminado', 'Cajetines LED', 'Instalación eléctrica', 'Dimmers opcionales'],
      },
    ],
  },
  {
    categoria: 'Tabiques y Particiones',
    descripcion: 'Precios por m² de pared instalada (ambas caras)',
    items: [
      {
        servicio: 'Tabique distribución simple',
        descripcion: 'Montante 70mm, placa simple cada cara',
        precioMin: 46,
        precioMax: 54,
        unidad: 'm²',
        incluye: ['Montante M70', '2x placa BA13', 'Pasta y cinta', 'Acabado para pintar'],
      },
      {
        servicio: 'Tabique con aislamiento acústico',
        descripcion: 'Doble placa + lana mineral 45mm',
        precioMin: 53,
        precioMax: 60,
        unidad: 'm²',
        incluye: ['Montante M70', '4x placa BA13', 'Lana mineral 45mm', 'Banda perimetral'],
      },
      {
        servicio: 'Tabique cortafuego EI-60',
        descripcion: 'Sistema certificado resistencia al fuego 60 min',
        precioMin: 53,
        precioMax: 77,
        unidad: 'm²',
        incluye: ['Estructura cortafuego', 'Placa DF90', 'Sellado perimetral', 'Certificación EI-60'],
      },
      {
        servicio: 'Trasdosado autoportante',
        descripcion: 'Mejora de aislamiento en paredes existentes',
        precioMin: 30,
        precioMax: 50,
        unidad: 'm²',
        incluye: ['Montante M46/70', 'Aislante interior', 'Placa BA13', 'Acabado final'],
      },
      {
        servicio: 'Pladur hidrófugo (baños/cocinas)',
        descripcion: 'Placa resistente a humedad (verde) para zonas húmedas',
        precioMin: 36,
        precioMax: 48,
        unidad: 'm²',
        incluye: ['Montante galvanizado', 'Placa H1/H2 (Aqua)', 'Sellado perimetral', 'Acabado para azulejo'],
      },
      {
        servicio: 'Escayola decorativa',
        descripcion: 'Techo continuo de escayola artesanal',
        precioMin: 24,
        precioMax: 45,
        unidad: 'm²',
        incluye: ['Preparación soporte', 'Escayola E-45', 'Tratamiento de juntas', 'Acabado para pintar'],
      },
    ],
  },
  {
    categoria: 'Aislamiento Acústico',
    descripcion: 'Soluciones específicas para reducción de ruido',
    items: [
      {
        servicio: 'Aislamiento paredes medianeras',
        descripcion: 'Sistema completo para ruido aéreo entre viviendas',
        precioMin: 7,
        precioMax: 22,
        unidad: 'm²',
        incluye: ['Estructura desvinculada', 'Lana mineral 80mm', 'Doble placa', 'Sellado perimetral'],
      },
      {
        servicio: 'Aislamiento de techo entre plantas',
        descripcion: 'Reducción ruido de impacto y aéreo',
        precioMin: 11,
        precioMax: 22,
        unidad: 'm²',
        incluye: ['Suspensión antivibratoria', 'Lana mineral', 'Doble placa BA15', 'Banda resiliente'],
      },
      {
        servicio: 'Cabina de aislamiento total',
        descripcion: 'Sala insonorizada (estudio, sala de ensayos)',
        precioMin: 155,
        precioMax: 310,
        unidad: 'm²',
        incluye: ['Box-in-box', 'Materiales premium', 'Sellado total', 'Medición final'],
      },
    ],
  },
  {
    categoria: 'Aislamiento Térmico',
    descripcion: 'Mejora de la eficiencia energética del inmueble',
    items: [
      {
        servicio: 'Trasdosado con aislamiento térmico',
        descripcion: 'Lana mineral o EPS en cerramiento interior',
        precioMin: 8,
        precioMax: 52,
        unidad: 'm²',
        incluye: ['Estructura M46', 'Aislante 40-60mm', 'Placa BA13', 'Acabado para pintar'],
      },
      {
        servicio: 'Aislamiento de cubierta interior',
        descripcion: 'Falso techo con aislamiento térmico en cubierta',
        precioMin: 36,
        precioMax: 60,
        unidad: 'm²',
        incluye: ['Estructura techo', 'Aislante 60-80mm', 'Placa BA13', 'Sellado perimetral'],
      },
    ],
  },
]

export interface PrecioResumen {
  servicio: string
  desde: number
  unidad: string
  color: string
}

export const preciosResumen: PrecioResumen[] = [
  { servicio: 'Falsos Techos', desde: 30, unidad: '€/m²', color: 'primary' },
  { servicio: 'Tabiques', desde: 46, unidad: '€/m²', color: 'primary' },
  { servicio: 'Aislamiento Acústico', desde: 7, unidad: '€/m²', color: 'accent' },
  { servicio: 'Aislamiento Térmico', desde: 8, unidad: '€/m²', color: 'accent' },
  { servicio: 'Trasdosados', desde: 30, unidad: '€/m²', color: 'primary' },
  { servicio: 'Cortafuego', desde: 53, unidad: '€/m²', color: 'accent' },
  { servicio: 'Hidrófugo (baños)', desde: 36, unidad: '€/m²', color: 'primary' },
  { servicio: 'Escayola', desde: 24, unidad: '€/m²', color: 'primary' },
]
