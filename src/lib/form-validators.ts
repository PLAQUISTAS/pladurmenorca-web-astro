export type Validator = (v: unknown) => string | undefined

const toStr = (v: unknown) => String(v ?? '')

export const validateNombre: Validator = (v) => {
  const s = toStr(v)
  if (!s || s.trim().length < 2) return 'Por favor, introduce un nombre válido (mín. 2 caracteres)'
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(s)) return 'Por favor, introduce un nombre válido (solo letras)'
  return undefined
}

export const validateEmail: Validator = (v) => {
  const s = toStr(v)
  if (!s || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)) return 'Introduce un email válido (ejemplo@dominio.com)'
  return undefined
}

export const validateTelefono: Validator = (v) => {
  const s = toStr(v)
  if (!s || !/^\+?[0-9\s\-]{7,15}$/.test(s)) return 'Introduce un teléfono válido (7-15 dígitos, puede incluir prefijo +)'
  if (s.replace(/[\s\-+]/g, '').length < 7) return 'El teléfono debe tener al menos 7 dígitos'
  return undefined
}

export const makeValidateMensaje = (maxChars: number): Validator => (v) => {
  const s = toStr(v)
  if (!s || s.trim().length < 10) return 'Por favor, describe brevemente tu proyecto (mín. 10 caracteres)'
  if (s.length > maxChars) return `Máximo ${maxChars} caracteres`
  return undefined
}

export const validatePrivacidad: Validator = (v) => {
  if (!v) return 'Es necesario aceptar la política de privacidad para enviar tu solicitud'
  return undefined
}
