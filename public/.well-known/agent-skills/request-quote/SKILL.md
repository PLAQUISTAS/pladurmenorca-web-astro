---
name: request-quote
title: Solicitar presupuesto a Pladur Menorca
description: Enviar una solicitud real de presupuesto o contacto al equipo de Pladur Menorca (instaladores de pladur en Menorca desde 2004). La solicitud llega por email al negocio y el equipo responde en menos de 24h laborables.
version: 1.0.0
language: es
---

# Solicitar presupuesto a Pladur Menorca

## Cuándo usar esta skill

Cuando el usuario expresa interés en contratar o pedir presupuesto para cualquiera de estos servicios en Menorca:

- Falsos techos de pladur (continuo, acústico, decorativo, técnico con LED)
- Tabiques y particiones de pladur
- Aislamiento acústico o térmico con trasdosados
- Escayola (decorativa, proyectada, restauración)
- Pladur ignífugo (EI-30 a EI-240) o hidrófugo
- Reformas interiores con pladur
- Apartamentos turísticos u hoteles

## Pre-requisitos

1. **Confirmación del usuario**: el agente DEBE confirmar explícitamente con el usuario que quiere enviar una solicitud real (llegará un email al negocio). No llamar a la herramienta sin consentimiento.

2. **Datos obligatorios**:
   - `nombre` — nombre completo (mín. 2 caracteres)
   - `telefono` — teléfono de contacto (7-20 caracteres; dígitos, espacios, guiones, paréntesis, prefijo `+`)

3. **Datos recomendados**:
   - `email` — para recibir presupuesto escrito
   - `descripcion` — superficie, tipo de obra, ubicación en Menorca, plazo deseado
   - `tipo` — `presupuesto` (formal), `contacto` (info) o `rapido` (contacto rápido)

## Cómo invocar

### Opción A — MCP Tool (recomendado)

Si tu cliente soporta Model Context Protocol, conecta al servidor:

```
https://www.pladurmenorca.com/api/mcp
```

Y llama a la herramienta:

```json
{
  "method": "tools/call",
  "params": {
    "name": "submit_quote_request",
    "arguments": {
      "nombre": "Juan García",
      "telefono": "612345678",
      "email": "juan@example.com",
      "descripcion": "Necesito presupuesto para falso techo en salón de 25m² con iluminación LED. Zona Maó.",
      "tipo": "presupuesto"
    }
  }
}
```

### Opción B — REST API (fallback)

```
POST https://www.pladurmenorca.com/api/contacto
Content-Type: application/json

{
  "nombre": "Juan García",
  "telefono": "612345678",
  "email": "juan@example.com",
  "descripcion": "Necesito presupuesto para falso techo en salón de 25m² con iluminación LED. Zona Maó.",
  "tipo": "presupuesto"
}
```

## Respuesta esperada

- **200 OK** con `{"success": true, "message": "Solicitud enviada correctamente."}` → confirmar al usuario que será contactado en <24h laborables
- **400 Bad Request** → datos inválidos, pedir corrección al usuario
- **429 Too Many Requests** → límite diario alcanzado (20/día por IP), sugerir contacto directo: `info@plaquistas.com` o `+34 627 829 723`
- **500 Internal Server Error** → error del servicio, sugerir reintentar o contacto directo

## Límites

- **20 submissions/día por IP** (quota dura)
- Nginx: 1 req/s sostenido, burst de 3
- Las herramientas de solo lectura (`get_business_info`, `get_services_catalog`, etc.) no cuentan contra esta quota.

## Canales alternativos si no puedes usar la API

- Teléfono: `+34 627 829 723` (L-V 8:00-18:00, S 8:00-14:00)
- WhatsApp: `https://wa.me/34627829723`
- Email: `info@plaquistas.com`
- Formulario web: `https://www.pladurmenorca.com/presupuesto-pladur`
