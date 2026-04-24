/**
 * Redirects para pladurmenorca.com.
 * Web nueva sin legacy de WordPress (FASE 3 §3.4 / §9 data/redirects.ts vacío).
 * Si en el futuro se heredan URLs de una web anterior, añadirlas aquí.
 */
const rawRedirects: Record<string, string> = {
  // Ejemplo comentado por si se migran URLs antiguas:
  // '/pladur-mahon': '/pladur-mao',
}

// Normalize: strip trailing slashes (trailingSlash: 'never' handles the rest)
export const legacyRedirects: Record<string, string> = {}
for (const [from, to] of Object.entries(rawRedirects)) {
  const key = from.endsWith('/') && from !== '/' ? from.slice(0, -1) : from
  legacyRedirects[key] = to
}
