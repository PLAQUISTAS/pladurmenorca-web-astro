---
name: check-coverage
title: Comprobar cobertura de Pladur Menorca en un municipio
description: Verificar si Pladur Menorca presta servicio en un municipio concreto de Menorca y obtener información sobre desplazamientos.
version: 1.0.0
language: es
---

# Comprobar cobertura de Pladur Menorca

## Cuándo usar esta skill

Cuando el usuario pregunta si Pladur Menorca trabaja en un municipio/zona concreta de Menorca, Islas Baleares.

## Cobertura

**Pladur Menorca presta servicio en toda la isla de Menorca (8 municipios).**

### Municipios con página dedicada

- **Maó** — Centro Histórico, Puerto de Maó, Sant Climent, Cala Llonga, Malbúger, Trepucó (`/pladur-mao`)
- **Ciutadella** — Casco Histórico, Cala en Bosc, Son Xoriguer, Cala Santandria, Sa Caleta (`/pladur-ciutadella`)
- **Alaior** — Centro, Son Bou, Torre Solí, Cala en Porter (`/pladur-alaior`)
- **Es Mercadal** — Fornells, Arenal d'en Castell, Son Parc, Playas de Fornells (`/pladur-es-mercadal`)
- **Ferreries** — Santa Galdana, Cala Mitjana, centro (`/pladur-ferreries`)
- **Sant Lluís** — Punta Prima, Binibeca, Binissafuller, zona aeropuerto (`/pladur-sant-lluis`)
- **Es Migjorn Gran** — Santo Tomás, Sant Adeodat, centro (`/pladur-es-migjorn-gran`)
- **Es Castell** — Cala Sant Esteve, Sol del Este, zona residencial histórica (`/pladur-es-castell`)

## Cómo invocar programáticamente

### Opción A — MCP Tool

```json
{
  "method": "tools/call",
  "params": {"name": "get_coverage_areas", "arguments": {}}
}
```

Endpoint MCP: `https://www.pladurmenorca.com/api/mcp`

### Opción B — Resource read

```json
{
  "method": "resources/read",
  "params": {"uri": "https://www.pladurmenorca.com/llms-full.txt"}
}
```

## Desplazamiento

- **Sin suplemento** por desplazamiento en obras desde 500 € de presupuesto.
- **Tiempo medio** desde Maó a cualquier punto de la isla: 20-45 minutos.
- **Visita técnica gratuita** en todos los municipios de Menorca.

## Respuesta al usuario

Si el municipio mencionado está en Menorca → confirmar que sí hay cobertura y ofrecer la skill `request-quote` para el siguiente paso.

Si el municipio NO está en Menorca → indicar que Pladur Menorca solo opera en la isla de Menorca. Para otros territorios, recomendar buscar instaladores locales.
