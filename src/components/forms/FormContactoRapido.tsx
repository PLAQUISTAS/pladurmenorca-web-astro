'use client'

import { useState, useCallback, type FormEvent, type ChangeEvent } from 'react'
import { siteConfig } from '@/data/site'
import { validateNombre, validateEmail, validateTelefono, makeValidateMensaje, type Validator } from '@/lib/form-validators'

interface FormData {
  nombre: string
  email: string
  telefono: string
  mensaje: string
}

interface FieldErrors {
  nombre?: string
  email?: string
  telefono?: string
  mensaje?: string
}

const validators: Record<keyof FormData, Validator> = {
  nombre: validateNombre,
  email: validateEmail,
  telefono: validateTelefono,
  mensaje: makeValidateMensaje(500),
}

function CheckIcon() {
  return (
    <svg className="size-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function ErrorIcon() {
  return (
    <svg className="size-4 text-red-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  )
}

interface FormContactoRapidoProps {
  className?: string
  dark?: boolean
}

export default function FormContactoRapido({ className = '', dark = false }: FormContactoRapidoProps) {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [formTimestamp] = useState(() => Date.now())
  const [values, setValues] = useState<FormData>({ nombre: '', email: '', telefono: '', mensaje: '' })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({ nombre: false, email: false, telefono: false, mensaje: false })

  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/'

  const handleChange = useCallback((field: keyof FormData) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = e.currentTarget.value
    setValues(prev => ({ ...prev, [field]: val }))
    if (touched[field]) {
      setErrors(prev => ({ ...prev, [field]: validators[field](val) }))
    }
  }, [touched])

  const handleBlur = useCallback((field: keyof FormData) => () => {
    setTouched(prev => ({ ...prev, [field]: true }))
    setErrors(prev => ({ ...prev, [field]: validators[field](values[field]) }))
  }, [values])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const newErrors: FieldErrors = {}
    let hasError = false
    for (const key of Object.keys(validators) as (keyof FormData)[]) {
      const msg = validators[key](values[key])
      if (msg) { newErrors[key] = msg; hasError = true }
    }
    setTouched({ nombre: true, email: true, telefono: true, mensaje: true })
    setErrors(newErrors)
    if (hasError) {
      setTimeout(() => {
        const firstError = document.querySelector('[data-field-error="true"]')
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
          const input = firstError.querySelector('input,select,textarea') as HTMLElement | null
          input?.focus()
        }
      }, 100)
      return
    }

    setLoading(true)
    setError(null)
    try {
      const hp = document.querySelector<HTMLInputElement>('[name="_hp_r"]')
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: values.nombre,
          email: values.email,
          telefono: values.telefono,
          mensaje: values.mensaje,
          tipo: 'rapido',
          paginaOrigen: pathname,
          _t: String(formTimestamp),
          _hp: hp?.value || '',
        }),
      })
      const json = await res.json()
      if (!res.ok || !json.success) {
        throw new Error(json.error || 'Error al enviar')
      }
      setSubmitted(true)
      setValues({ nombre: '', email: '', telefono: '', mensaje: '' })
      setTouched({ nombre: false, email: false, telefono: false, mensaje: false })
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submit', { form_type: 'contacto_rapido' })
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Error al enviar'
      setError(msg.includes('627') ? msg : `${msg}. Llámanos directamente al ${siteConfig.phone}.`)
    } finally {
      setLoading(false)
    }
  }

  const baseInput = 'w-full rounded-xl border px-4 py-3.5 text-sm shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:border-transparent transition-[border-color,box-shadow] duration-200'

  function inputClass(field: keyof FormData) {
    const hasError = !!errors[field]
    const isTouched = touched[field]
    const darkStyles = 'bg-white/10 text-white placeholder-white/50'
    const lightStyles = 'bg-white text-foreground placeholder-gray-400'
    const base = `${baseInput} ${dark ? darkStyles : lightStyles} pr-10`

    if (hasError) {
      return `${base} border-red-400 focus-visible:ring-red-400`
    }
    if (isTouched) {
      return `${base} ${dark ? 'border-green-400/60 focus-visible:ring-white/40' : 'border-green-400 focus-visible:ring-foreground'}`
    }
    return `${baseInput} ${dark ? darkStyles : lightStyles} ${dark ? 'border-white/20 hover:border-white/30 focus-visible:ring-white/40' : 'border-gray-200 hover:border-gray-300 focus-visible:ring-foreground'}`
  }

  function StatusIcon({ field }: { field: keyof FormData }) {
    const hasError = !!errors[field]
    const isTouched = touched[field]
    if (hasError) return <div className="absolute right-3 top-1/2 -translate-y-1/2"><ErrorIcon /></div>
    if (isTouched) return <div className="absolute right-3 top-1/2 -translate-y-1/2"><CheckIcon /></div>
    return null
  }

  const labelClass = `block text-xs font-semibold uppercase tracking-wide mb-1 ${dark ? 'text-white/70' : 'text-gray-500'}`
  const errorMsgClass = `mt-1 text-xs ${dark ? 'text-red-400' : 'text-red-500'}`

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className={`rounded-xl p-8 text-center ${dark ? 'bg-white/10' : 'bg-green-50 border border-green-200'} ${className}`}>
        <div className="mb-3">
          <svg aria-hidden="true" className={`size-10 mx-auto ${dark ? 'text-white' : 'text-green-600'}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <h3 className={`text-lg font-bold mb-2 ${dark ? 'text-white' : 'text-green-700'}`}>Solicitud recibida!</h3>
        <p className={`text-sm ${dark ? 'text-white/80' : 'text-green-600'}`}>Te contactamos en menos de 24 horas.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`} noValidate>
      {/* Honeypot */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}>
        <label htmlFor="hp-rapido">No rellenar</label>
        <input id="hp-rapido" name="_hp_r" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div data-field-error={!!errors.nombre || undefined}>
          <label htmlFor="rapido-nombre" className={labelClass}>Nombre *</label>
          <div className="relative">
            <input id="rapido-nombre" value={values.nombre} onChange={handleChange('nombre')} onBlur={handleBlur('nombre')} placeholder="Tu nombre" autoComplete="name" className={inputClass('nombre')} />
            <StatusIcon field="nombre" />
          </div>
          {errors.nombre && <p className={errorMsgClass}>{errors.nombre}</p>}
        </div>
        <div data-field-error={!!errors.telefono || undefined}>
          <label htmlFor="rapido-telefono" className={labelClass}>Telefono *</label>
          <div className="relative">
            <input id="rapido-telefono" value={values.telefono} onChange={handleChange('telefono')} onBlur={handleBlur('telefono')} placeholder="612 345 678" type="tel" autoComplete="tel" className={inputClass('telefono')} />
            <StatusIcon field="telefono" />
          </div>
          {errors.telefono && <p className={errorMsgClass}>{errors.telefono}</p>}
        </div>
      </div>
      <div data-field-error={!!errors.email || undefined}>
        <label htmlFor="rapido-email" className={labelClass}>Email *</label>
        <div className="relative">
          <input id="rapido-email" value={values.email} onChange={handleChange('email')} onBlur={handleBlur('email')} placeholder="tu@email.com" type="email" autoComplete="email" spellcheck={false} className={inputClass('email')} />
          <StatusIcon field="email" />
        </div>
        {errors.email && <p className={errorMsgClass}>{errors.email}</p>}
      </div>
      <div data-field-error={!!errors.mensaje || undefined}>
        <label htmlFor="rapido-mensaje" className={labelClass}>Que necesitas? *</label>
        <div className="relative">
          <textarea id="rapido-mensaje" value={values.mensaje} onChange={handleChange('mensaje')} onBlur={handleBlur('mensaje')} placeholder="Describe brevemente tu proyecto ..." rows={3} className={`${inputClass('mensaje')} resize-none`} />
          <StatusIcon field="mensaje" />
        </div>
        {errors.mensaje && <p className={errorMsgClass}>{errors.mensaje}</p>}
      </div>
      {error && <p className={`text-sm ${dark ? 'text-red-400' : 'text-red-500'}`}>{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-accent px-6 py-4 font-bold text-base text-white shadow-lg shadow-accent/20 transition-[background-color,box-shadow] hover:bg-accent-600 hover:shadow-xl hover:shadow-accent/30 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Enviando\u2026' : 'Pedir presupuesto gratis'}
      </button>
      <p className={`text-center text-xs ${dark ? 'text-white/60' : 'text-gray-500'}`}>Sin compromiso · Respuesta en menos de 24h</p>
    </form>
  )
}
