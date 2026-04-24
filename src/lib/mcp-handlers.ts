// MCP (Model Context Protocol) handlers — JSON-RPC 2.0 dispatcher.
// Expone herramientas y recursos del negocio Pladur Menorca a agentes compatibles
// (Claude Desktop, mcp-cli, ChatGPT Apps, etc.).
//
// Spec: https://spec.modelcontextprotocol.io/
// Transport: HTTP streamable (single POST request, JSON response).
import { z } from 'zod'
import { submitContactRequest, type ContactInput } from '@/lib/contact-service'
import { siteConfig } from '@/data/site'

const MCP_PROTOCOL_VERSION = '2024-11-05'
const SERVER_VERSION = '1.0.0'

export interface JsonRpcRequest {
  jsonrpc: '2.0'
  id?: string | number | null
  method: string
  params?: unknown
}

export interface JsonRpcResponse {
  jsonrpc: '2.0'
  id: string | number | null
  result?: unknown
  error?: { code: number; message: string; data?: unknown }
}

interface McpContext {
  ip: string
  userAgent: string
  request: Request
}

// ─────────────────────────────────────────────────────────
// Tool definitions
// ─────────────────────────────────────────────────────────

const TOOLS = [
  {
    name: 'submit_quote_request',
    description:
      'Envía una solicitud real de presupuesto o contacto a Pladur Menorca. El equipo recibe la solicitud por email y responde en menos de 24h laborables. Rate limit: 20 solicitudes/día por IP. Úsalo solo cuando el usuario confirme explícitamente que quiere contactar con la empresa.',
    inputSchema: {
      type: 'object',
      required: ['nombre', 'telefono'],
      properties: {
        nombre: { type: 'string', description: 'Nombre completo del solicitante (mín. 2 caracteres).' },
        telefono: { type: 'string', description: 'Teléfono de contacto (7-20 caracteres, dígitos + espacios/guiones/paréntesis/+).' },
        email: { type: 'string', description: 'Email de contacto. Recomendado para recibir presupuesto escrito.' },
        descripcion: { type: 'string', description: 'Descripción detallada del proyecto: superficie, tipo de obra, ubicación, plazo deseado...' },
        tipo: {
          type: 'string',
          enum: ['presupuesto', 'contacto', 'rapido'],
          description: "Tipo de solicitud. 'presupuesto' = petición formal; 'contacto' = info general; 'rapido' = contacto rápido.",
        },
      },
    },
  },
  {
    name: 'get_service_status',
    description: 'Consulta si el servicio API de Pladur Menorca está operativo.',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'get_business_info',
    description: 'Obtiene información básica del negocio: nombre, dirección, teléfono, horario, valoración Google, años de experiencia.',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'get_services_catalog',
    description: 'Devuelve el catálogo de servicios de Pladur Menorca con precios orientativos 2026 (falsos techos, tabiques, aislamiento, escayola, etc.).',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'get_coverage_areas',
    description: 'Lista los municipios de Menorca donde Pladur Menorca presta servicio.',
    inputSchema: { type: 'object', properties: {} },
  },
]

// ─────────────────────────────────────────────────────────
// Resource definitions
// ─────────────────────────────────────────────────────────

const RESOURCES = [
  {
    uri: 'https://www.pladurmenorca.com/llms-full.txt',
    name: 'services-description',
    description: 'Descripción completa del negocio y catálogo de servicios (formato texto plano optimizado para agentes).',
    mimeType: 'text/plain',
  },
  {
    uri: 'https://www.pladurmenorca.com/llms.txt',
    name: 'services-summary',
    description: 'Resumen corto del negocio con URLs clave de servicios.',
    mimeType: 'text/plain',
  },
  {
    uri: 'https://www.pladurmenorca.com/api/openapi.json',
    name: 'openapi-spec',
    description: 'Especificación OpenAPI 3.1 de la API REST equivalente.',
    mimeType: 'application/json',
  },
]

// ─────────────────────────────────────────────────────────
// Dispatcher
// ─────────────────────────────────────────────────────────

export async function handleMcpRequest(
  body: JsonRpcRequest | JsonRpcRequest[],
  ctx: McpContext
): Promise<JsonRpcResponse | JsonRpcResponse[] | null> {
  if (Array.isArray(body)) {
    const responses = await Promise.all(body.map(r => handleSingle(r, ctx)))
    const nonNull = responses.filter((r): r is JsonRpcResponse => r !== null)
    return nonNull.length > 0 ? nonNull : null
  }
  return handleSingle(body, ctx)
}

async function handleSingle(req: JsonRpcRequest, ctx: McpContext): Promise<JsonRpcResponse | null> {
  const isNotification = req.id === undefined || req.id === null

  try {
    switch (req.method) {
      case 'initialize':
        return resp(req.id, {
          protocolVersion: MCP_PROTOCOL_VERSION,
          capabilities: {
            tools: { listChanged: false },
            resources: { listChanged: false, subscribe: false },
          },
          serverInfo: {
            name: 'pladur-menorca',
            version: SERVER_VERSION,
            title: 'Pladur Menorca',
          },
          instructions:
            'Servidor MCP de Pladur Menorca (instaladores de pladur en Menorca, expansión 2026 de la SL matriz Mallorca fundada en 2004). ' +
            'Herramientas disponibles: submit_quote_request (envía solicitud real — llega al email del negocio), ' +
            'get_business_info, get_services_catalog, get_coverage_areas, get_service_status. ' +
            'Recursos: llms-full.txt con catálogo completo. ' +
            'Rate limit: 20 solicitudes submit/día por IP.',
        })

      case 'notifications/initialized':
      case 'notifications/cancelled':
      case 'notifications/progress':
        return null

      case 'ping':
        return resp(req.id, {})

      case 'tools/list':
        return resp(req.id, { tools: TOOLS })

      case 'tools/call': {
        const p = req.params as { name?: string; arguments?: Record<string, unknown> } | undefined
        if (!p?.name) return err(req.id, -32602, 'Missing params.name')
        return resp(req.id, await callTool(p.name, p.arguments ?? {}, ctx))
      }

      case 'resources/list':
        return resp(req.id, { resources: RESOURCES })

      case 'resources/read': {
        const p = req.params as { uri?: string } | undefined
        if (!p?.uri) return err(req.id, -32602, 'Missing params.uri')
        return resp(req.id, await readResource(p.uri))
      }

      case 'prompts/list':
        return resp(req.id, { prompts: [] })

      default:
        if (isNotification) return null
        return err(req.id, -32601, `Method not found: ${req.method}`)
    }
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Internal error'
    return err(req.id, -32603, message)
  }
}

function resp(id: JsonRpcRequest['id'], result: unknown): JsonRpcResponse {
  return { jsonrpc: '2.0', id: id ?? null, result }
}

function err(id: JsonRpcRequest['id'], code: number, message: string): JsonRpcResponse {
  return { jsonrpc: '2.0', id: id ?? null, error: { code, message } }
}

// ─────────────────────────────────────────────────────────
// Tool implementations
// ─────────────────────────────────────────────────────────

async function callTool(name: string, args: Record<string, unknown>, ctx: McpContext): Promise<unknown> {
  switch (name) {
    case 'submit_quote_request':
      return toolSubmitQuoteRequest(args, ctx)
    case 'get_service_status':
      return toolGetServiceStatus()
    case 'get_business_info':
      return toolGetBusinessInfo()
    case 'get_services_catalog':
      return toolGetServicesCatalog()
    case 'get_coverage_areas':
      return toolGetCoverageAreas()
    default:
      return { content: [{ type: 'text', text: `Herramienta desconocida: ${name}` }], isError: true }
  }
}

const submitSchema = z.object({
  nombre: z.string().min(2).max(100),
  telefono: z.string().min(7).max(20).regex(/^[+\d\s\-().]{7,20}$/),
  email: z.string().email().max(200).optional(),
  descripcion: z.string().max(2000).optional(),
  tipo: z.enum(['presupuesto', 'contacto', 'rapido']).optional(),
})

async function toolSubmitQuoteRequest(args: Record<string, unknown>, ctx: McpContext) {
  const parsed = submitSchema.safeParse(args)
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors
    return {
      content: [{
        type: 'text',
        text: `Datos inválidos. Errores: ${JSON.stringify(fieldErrors)}. Requeridos: nombre (≥2 chars), telefono (formato válido). Opcionales: email, descripcion, tipo (presupuesto|contacto|rapido).`,
      }],
      isError: true,
    }
  }

  const input: ContactInput = {
    nombre: parsed.data.nombre,
    telefono: parsed.data.telefono,
    email: parsed.data.email,
    descripcion: parsed.data.descripcion,
    tipo: parsed.data.tipo ?? 'presupuesto',
    paginaOrigen: 'mcp://pladurmenorca',
  }

  // viaApi siempre true desde MCP (por definición es un agente)
  const result = await submitContactRequest(input, {
    ip: ctx.ip,
    userAgent: ctx.userAgent,
    viaApi: true,
  })

  if (!result.ok) {
    return {
      content: [{ type: 'text', text: result.error }],
      isError: true,
    }
  }

  return {
    content: [{
      type: 'text',
      text:
        `Solicitud enviada correctamente a Pladur Menorca. ` +
        `El equipo contactará con ${parsed.data.nombre} al teléfono ${parsed.data.telefono} en menos de 24h laborables (L-V 8:00-18:00, S 8:00-14:00). ` +
        `Rate limit restante hoy: ${result.remaining} solicitudes.`,
    }],
  }
}

function toolGetServiceStatus() {
  return {
    content: [{
      type: 'text',
      text: JSON.stringify({
        status: 'ok',
        service: 'Pladur Menorca',
        timestamp: new Date().toISOString(),
      }, null, 2),
    }],
  }
}

function toolGetBusinessInfo() {
  return {
    content: [{
      type: 'text',
      text: JSON.stringify({
        name: 'Pladur Menorca',
        legal_name: 'PLAQUISTAS Y ACABADOS SL',
        founded: 2004,
        menorca_since: 2026,
        phone: siteConfig.phone,
        whatsapp: `https://wa.me/${siteConfig.whatsapp}`,
        email: 'info@plaquistas.com',
        website: 'https://www.pladurmenorca.com',
        address: {
          street: siteConfig.address.street,
          postal_code: siteConfig.address.postalCode,
          city: siteConfig.address.city,
          province: siteConfig.address.province,
          country: 'España',
        },
        opening_hours: 'L-V 8:00-18:00, S 8:00-14:00, Domingos cerrado',
        google_rating: '4.7/5 (SL matriz)',
        projects_completed: '+6000 (grupo Baleares)',
        materials: ['Placo (Saint-Gobain)', 'Knauf', 'Lafarge'],
      }, null, 2),
    }],
  }
}

function toolGetServicesCatalog() {
  const catalog = {
    servicios: [
      { nombre: 'Falsos techos de pladur', desde: '30 €/m²', url: 'https://www.pladurmenorca.com/falsos-techos-pladur-menorca' },
      { nombre: 'Tabiques de pladur', desde: '46 €/m²', url: 'https://www.pladurmenorca.com/tabiques-pladur-menorca' },
      { nombre: 'Aislamiento acústico', desde: '7 €/m² material', url: 'https://www.pladurmenorca.com/aislamiento-acustico-menorca' },
      { nombre: 'Aislamiento térmico', desde: '8 €/m² material', url: 'https://www.pladurmenorca.com/aislamiento-termico-menorca' },
      { nombre: 'Reformas interiores', desde: '46 €/m²', url: 'https://www.pladurmenorca.com/reformas-interiores-pladur-menorca' },
      { nombre: 'Escayola (decorativa, restauración)', desde: '24 €/m²', url: 'https://www.pladurmenorca.com/escayola-menorca' },
      { nombre: 'Pladur ignífugo (EI-30 a EI-240)', desde: '53 €/m²', url: 'https://www.pladurmenorca.com/pladur-ignifugo-menorca' },
      { nombre: 'Pladur hidrófugo (baños, cocinas)', desde: '36 €/m²', url: 'https://www.pladurmenorca.com/pladur-hidrofugo-menorca' },
      { nombre: 'Apartamentos turísticos', desde: 'Consultar', url: 'https://www.pladurmenorca.com/pladur-apartamentos-turisticos-menorca' },
      { nombre: 'Hoteles', desde: 'Consultar', url: 'https://www.pladurmenorca.com/pladur-hoteles-menorca' },
      { nombre: 'Obra nueva (B2B)', desde: 'Consultar', url: 'https://www.pladurmenorca.com/pladur-obra-nueva-menorca' },
    ],
    notas: [
      'Precios 2026 sin IVA. IVA aplicable 21%.',
      'Los precios en Menorca son un 3-8% superiores a Mallorca por los costes logísticos propios de una isla pequeña.',
      'Presupuesto cerrado tras visita técnica.',
      'Garantía: 1 año en mano de obra.',
    ],
  }
  return {
    content: [{ type: 'text', text: JSON.stringify(catalog, null, 2) }],
  }
}

function toolGetCoverageAreas() {
  const coverage = {
    cobertura: 'Toda la isla de Menorca, Islas Baleares, España',
    municipios: [
      'Maó', 'Ciutadella', 'Alaior', 'Es Mercadal', 'Ferreries',
      'Sant Lluís', 'Es Migjorn Gran', 'Es Castell',
    ],
    desplazamiento: 'Coste logístico (desplazamiento del equipo y transporte de materiales desde la SL matriz en Mallorca) reflejado de forma transparente dentro del presupuesto cerrado.',
    tiempo_medio_visita: '20-45 minutos desde Maó a cualquier punto de la isla.',
  }
  return {
    content: [{ type: 'text', text: JSON.stringify(coverage, null, 2) }],
  }
}

// ─────────────────────────────────────────────────────────
// Resource implementations
// ─────────────────────────────────────────────────────────

async function readResource(uri: string) {
  const resource = RESOURCES.find(r => r.uri === uri)
  if (!resource) throw new Error(`Resource not found: ${uri}`)

  const response = await fetch(uri)
  if (!response.ok) throw new Error(`Failed to fetch resource: ${response.status}`)
  const text = await response.text()

  return {
    contents: [{
      uri: resource.uri,
      mimeType: resource.mimeType,
      text,
    }],
  }
}
