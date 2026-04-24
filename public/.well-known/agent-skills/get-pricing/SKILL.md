---
name: get-pricing
title: Consultar precios orientativos de Pladur Menorca
description: Obtener precios orientativos 2026 de los servicios de pladur, aislamiento y escayola en Menorca. Los precios finales dependen de superficie, acceso y complejidad — un presupuesto cerrado requiere visita técnica gratuita.
version: 1.0.0
language: es
---

# Consultar precios orientativos de Pladur Menorca

## Cuándo usar esta skill

Cuando el usuario pregunta cuánto cuesta algo relacionado con pladur, aislamiento acústico/térmico, falsos techos, tabiques, escayola o reformas interiores en Menorca.

## Precios orientativos 2026 (sin IVA)

| Servicio | Precio desde | Notas |
|---|---|---|
| Falso techo continuo básico | **29 €/m²** | Placa BA13 estándar, acabado para pintar |
| Falso techo acústico | **35 €/m²** | Doble placa + lana mineral, cumple CTE-HR |
| Falso techo decorativo con molduras | **45 €/m²** | Acabado premium, viviendas de lujo |
| Falso techo técnico con LED | **47 €/m²** | Integración eléctrica + cableado oculto |
| Tabique distribución simple | **45 €/m²** | Montante 70mm, placa cada cara |
| Tabique acústico reforzado | **52 €/m²** | Doble placa + lana mineral |
| Aislamiento acústico (material) | **6 €/m²** | Lana mineral alta densidad |
| Aislamiento térmico (material) | **7 €/m²** | EPS, XPS o lana mineral |
| Trasdosado autoportante | **29 €/m²** | Con aislamiento integrado |
| Reforma interior con pladur | **45 €/m²** | Llave en mano |
| Escayola decorativa (techo continuo) | **30 €/m²** | Molduras: 15-45 €/ml |
| Pladur hidrófugo (baños, cocinas) | **28 €/m²** | Placa verde resistente a humedad |

## Factores que afectan al precio

1. **Superficie total** — a mayor superficie, mejor precio unitario (economías de escala a partir de 100 m²)
2. **Tipo de placa** — BA13 estándar es la más económica; cortafuego (DF90), acústica o hidrófuga pueden costar 2x
3. **Accesibilidad** — escaleras estrechas (centro histórico de Maó o Ciutadella), edificios sin ascensor o alturas inusuales encarecen
4. **Instalaciones a integrar** — eléctrica, climatización, fontanería
5. **Geometría** — formas curvas, techos inclinados, geometrías irregulares
6. **Sobreprecio Menorca** — 10-20% superior a la Península por transporte marítimo

## Cómo invocar programáticamente

### MCP Tool

```json
{
  "method": "tools/call",
  "params": {"name": "get_services_catalog", "arguments": {}}
}
```

Endpoint: `https://www.pladurmenorca.com/api/mcp`

### Resource read (catálogo completo)

```json
{
  "method": "resources/read",
  "params": {"uri": "https://www.pladurmenorca.com/llms-full.txt"}
}
```

## Aviso al usuario

Al dar precios, **siempre aclarar** que son orientativos y que el precio final depende de las variables anteriores. Sugerir la skill `request-quote` para obtener presupuesto cerrado con visita técnica gratuita.

## Comparativa vs obra tradicional

- Pladur es **20-40% más económico** que tabiquería/techos de ladrillo cuando se considera el coste total (materiales + mano de obra + limpieza + tiempo de obra).
- Ahorro de tiempo: pladur 1-5 días vs ladrillo 1-4 semanas para un piso de 80 m².

## Página con tabla completa

Para detalles granulares con descripciones por servicio: `https://www.pladurmenorca.com/precios-pladur-menorca`
