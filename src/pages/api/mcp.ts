// MCP (Model Context Protocol) endpoint — JSON-RPC 2.0 sobre HTTP.
// Spec: https://spec.modelcontextprotocol.io/
// Server card: /.well-known/mcp/server-card.json
import type { APIRoute } from 'astro'
export const prerender = false

import { handleMcpRequest, type JsonRpcRequest } from '@/lib/mcp-handlers'
import { getClientIp } from '@/lib/contact-service'

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-cache',
}

function parseError(id: unknown = null, code = -32700, message = 'Parse error') {
  return { jsonrpc: '2.0', id, error: { code, message } }
}

export const POST: APIRoute = async ({ request }) => {
  const ip = getClientIp(request)
  const userAgent = request.headers.get('user-agent') || 'unknown'

  let body: JsonRpcRequest | JsonRpcRequest[]
  try {
    body = await request.json()
  } catch {
    return new Response(JSON.stringify(parseError()), { status: 400, headers: JSON_HEADERS })
  }

  // Validación mínima JSON-RPC 2.0
  const singles = Array.isArray(body) ? body : [body]
  for (const r of singles) {
    if (!r || typeof r !== 'object' || r.jsonrpc !== '2.0' || typeof r.method !== 'string') {
      return new Response(
        JSON.stringify(parseError(null, -32600, 'Invalid Request: expected JSON-RPC 2.0 format')),
        { status: 400, headers: JSON_HEADERS }
      )
    }
  }

  const result = await handleMcpRequest(body, { ip, userAgent, request })

  // Notificaciones: JSON-RPC espera HTTP 204 sin body
  if (result === null) {
    return new Response(null, { status: 204 })
  }

  return new Response(JSON.stringify(result), { status: 200, headers: JSON_HEADERS })
}

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      message: 'MCP endpoint. Use POST con cuerpo JSON-RPC 2.0.',
      protocolVersion: '2024-11-05',
      serverCard: 'https://www.pladurmenorca.com/.well-known/mcp/server-card.json',
      documentation: 'https://www.pladurmenorca.com/api/openapi.json',
    }, null, 2),
    { status: 200, headers: JSON_HEADERS }
  )
}

export const OPTIONS: APIRoute = () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Mcp-Session-Id',
      'Access-Control-Max-Age': '86400',
    },
  })
}
