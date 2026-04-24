'use client'

import { useState, useRef, useCallback, type FormEvent, type ChangeEvent } from 'react'
import { siteConfig } from '@/data/site'
import { validateNombre, validateEmail, validateTelefono, makeValidateMensaje, validatePrivacidad, type Validator } from '@/lib/form-validators'

const ACCEPTED_EXTENSIONS_LIST = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png', 'zip', 'xls', 'xlsx']
const ACCEPTED_EXTENSIONS_INPUT = '.pdf,.doc,.docx,.jpg,.jpeg,.png,.zip,.xls,.xlsx'
const MAX_FILE_SIZE = 25 * 1024 * 1024 // 25MB
const MAX_FILES = 5

function getFileExtension(filename: string): string {
  return filename.split('.').pop()?.toLowerCase() ?? ''
}

function isAcceptedFile(file: File): boolean {
  return ACCEPTED_EXTENSIONS_LIST.includes(getFileExtension(file.name))
}

interface FormData {
  nombre: string
  telefono: string
  email: string
  descripcion: string
  privacidad: boolean
}

interface FieldErrors {
  nombre?: string
  telefono?: string
  email?: string
  descripcion?: string
  privacidad?: string
}

const validators: Record<keyof FormData, Validator> = {
  nombre: validateNombre,
  telefono: validateTelefono,
  email: validateEmail,
  descripcion: makeValidateMensaje(2000),
  privacidad: validatePrivacidad,
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
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

interface FormPresupuestoProps {
  className?: string
}

export default function FormPresupuesto({ className = '' }: FormPresupuestoProps) {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [fileError, setFileError] = useState<string | null>(null)
  const [dragging, setDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [formTimestamp] = useState(() => Date.now())
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/'

  const [values, setValues] = useState<FormData>({ nombre: '', telefono: '', email: '', descripcion: '', privacidad: false })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const handleChange = useCallback((field: keyof FormData) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.currentTarget
    const val = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value
    setValues(prev => ({ ...prev, [field]: val }))
    if (touched[field]) {
      setErrors(prev => ({ ...prev, [field]: validators[field](val) }))
    }
  }, [touched])

  const handleBlur = useCallback((field: keyof FormData) => () => {
    setTouched(prev => ({ ...prev, [field]: true }))
    setErrors(prev => ({ ...prev, [field]: validators[field](values[field]) }))
  }, [values])

  const validateAndAddFiles = useCallback((newFiles: FileList | File[]) => {
    setFileError(null)
    const incoming = Array.from(newFiles)
    const validFiles: File[] = []

    for (const file of incoming) {
      if (!isAcceptedFile(file)) {
        setFileError(`Formato no permitido: ${file.name}. Usa PDF, DOC, XLS, JPG, PNG o ZIP.`)
        continue
      }
      if (file.size > MAX_FILE_SIZE) {
        setFileError(`El archivo "${file.name}" supera los 25MB permitidos.`)
        continue
      }
      validFiles.push(file)
    }

    setFiles(prev => {
      const combined = [...prev, ...validFiles]
      if (combined.length > MAX_FILES) {
        setFileError(`Máximo ${MAX_FILES} archivos. Se han descartado los sobrantes.`)
        return combined.slice(0, MAX_FILES)
      }
      const totalSize = combined.reduce((sum, f) => sum + f.size, 0)
      if (totalSize > MAX_FILE_SIZE) {
        setFileError(`La suma de los archivos supera los 25MB permitidos (${(totalSize / (1024 * 1024)).toFixed(1)} MB).`)
        return prev
      }
      return combined
    })
  }, [])

  const removeFile = useCallback((index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
    setFileError(null)
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(false)
    const dt = e.dataTransfer
    if (dt && dt.files.length > 0) {
      validateAndAddFiles(dt.files)
    }
  }, [validateAndAddFiles])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const newErrors: FieldErrors = {}
    let hasError = false
    for (const key of Object.keys(validators) as (keyof FormData)[]) {
      const msg = validators[key](values[key])
      if (msg) { newErrors[key] = msg; hasError = true }
    }
    const allTouched: Record<string, boolean> = {}
    for (const key of Object.keys(validators)) allTouched[key] = true
    setTouched(allTouched)
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
      const formData = new window.FormData()
      formData.append('nombre', values.nombre)
      formData.append('telefono', values.telefono)
      formData.append('email', values.email)
      formData.append('descripcion', values.descripcion)
      formData.append('tipo', 'presupuesto')
      formData.append('privacidad', 'true')
      formData.append('paginaOrigen', pathname)
      formData.append('_t', String(formTimestamp))
      const hp = document.querySelector<HTMLInputElement>('[name="_hp"]')
      if (hp) formData.append('_hp', hp.value)
      for (const file of files) {
        formData.append('archivos', file)
      }

      const res = await fetch('/api/contacto', {
        method: 'POST',
        body: formData,
      })
      const json = await res.json()
      if (!res.ok || !json.success) {
        throw new Error(json.error || 'Error al enviar')
      }
      setSubmitted(true)
      setValues({ nombre: '', telefono: '', email: '', descripcion: '', privacidad: false })
      setTouched({})
      setFiles([])
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submit', { form_type: 'presupuesto_completo' })
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Error al enviar'
      setError(msg.includes('627') ? msg : `${msg}. Por favor llámanos al ${siteConfig.phone}.`)
    } finally {
      setLoading(false)
    }
  }

  const baseInput = 'w-full rounded-xl bg-white px-4 py-3.5 text-sm text-foreground placeholder-gray-400 shadow-xs transition-[border-color,box-shadow] duration-200 focus-visible:outline-hidden'
  const labelClass = 'block text-sm font-semibold text-gray-700 mb-1.5'
  const errorMsgClass = 'mt-1 text-xs text-red-500'

  function inputClass(field: keyof FormData) {
    const hasError = !!errors[field]
    const isTouched = !!touched[field]
    if (hasError) return `${baseInput} border border-red-400 focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:border-transparent pr-10`
    if (isTouched) return `${baseInput} border border-green-400 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:border-transparent pr-10`
    return `${baseInput} border border-gray-200 hover:border-gray-300 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:border-transparent`
  }

  function StatusIcon({ field }: { field: keyof FormData }) {
    const hasError = !!errors[field]
    const isTouched = !!touched[field]
    if (hasError) return <div className="absolute right-3 top-1/2 -translate-y-1/2"><ErrorIcon /></div>
    if (isTouched) return <div className="absolute right-3 top-1/2 -translate-y-1/2"><CheckIcon /></div>
    return null
  }

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className={`rounded-2xl bg-green-50 border border-green-200 p-10 text-center ${className}`}>
        <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-green-100">
          <svg className="size-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-700 mb-2">Solicitud enviada!</h3>
        <p className="text-green-600 mb-1">Hemos recibido tu solicitud de presupuesto.</p>
        <p className="text-green-600">Te contactaremos en menos de 24 horas para coordinar la visita tecnica.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={`tel:${siteConfig.phoneRaw}`} className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-accent/20 hover:bg-accent-600 hover:shadow-xl hover:shadow-accent/30 transition-[background-color,box-shadow]">
            <svg className="size-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
            Llamar ahora
          </a>
          <a href={`https://wa.me/${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border-2 border-foreground px-5 py-2.5 text-sm font-bold text-foreground hover:bg-foreground hover:text-white transition-[background-color,box-shadow]">
            WhatsApp
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`} noValidate>
      {/* Honeypot */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}>
        <label htmlFor="hp-pres">No rellenar</label>
        <input id="hp-pres" name="_hp" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Datos personales */}
      <div>
        <h3 className="text-base font-semibold text-foreground mb-4 pb-2 border-b border-gray-100/80">Tus datos de contacto</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div data-field-error={!!errors.nombre || undefined}>
            <label htmlFor="pres-nombre" className={labelClass}>Nombre y apellidos *</label>
            <div className="relative">
              <input id="pres-nombre" value={values.nombre} onChange={handleChange('nombre')} onBlur={handleBlur('nombre')} placeholder="Juan Garcia" autoComplete="name" className={inputClass('nombre')} />
              <StatusIcon field="nombre" />
            </div>
            {errors.nombre && <p className={errorMsgClass}>{errors.nombre}</p>}
          </div>
          <div data-field-error={!!errors.telefono || undefined}>
            <label htmlFor="pres-telefono" className={labelClass}>Telefono *</label>
            <div className="relative">
              <input id="pres-telefono" value={values.telefono} onChange={handleChange('telefono')} onBlur={handleBlur('telefono')} placeholder="612 345 678 o +44 7911 123456" type="tel" autoComplete="tel" className={inputClass('telefono')} />
              <StatusIcon field="telefono" />
            </div>
            {errors.telefono && <p className={errorMsgClass}>{errors.telefono}</p>}
          </div>
          <div className="sm:col-span-2" data-field-error={!!errors.email || undefined}>
            <label htmlFor="pres-email" className={labelClass}>Email *</label>
            <div className="relative">
              <input id="pres-email" value={values.email} onChange={handleChange('email')} onBlur={handleBlur('email')} placeholder="tu@email.com" type="email" autoComplete="email" spellcheck={false} className={inputClass('email')} />
              <StatusIcon field="email" />
            </div>
            {errors.email && <p className={errorMsgClass}>{errors.email}</p>}
          </div>
        </div>
      </div>

      {/* Detalles del proyecto */}
      <div>
        <h3 className="text-base font-semibold text-foreground mb-4 pb-2 border-b border-gray-100/80">Detalles del proyecto</h3>
        <div data-field-error={!!errors.descripcion || undefined}>
          <label htmlFor="pres-descripcion" className={labelClass}>Descripcion del proyecto *</label>
          <textarea
            id="pres-descripcion"
            value={values.descripcion}
            onChange={handleChange('descripcion')}
            onBlur={handleBlur('descripcion')}
            rows={4}
            placeholder="Describe que necesitas: distribucion actual, que quieres conseguir, plazos, etc."
            className={inputClass('descripcion').replace('pr-10', '')}
          />
          {errors.descripcion && <p className={errorMsgClass}>{errors.descripcion}</p>}
        </div>

        {/* File upload */}
        <div className="mt-4">
          <label htmlFor="pres-archivos" className={labelClass}>Adjuntar documentos <span className="font-normal text-muted">(opcional)</span></label>
          <div
            role="button"
            tabIndex={0}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInputRef.current?.click() } }}
            className={`cursor-pointer rounded-2xl border-2 border-dashed p-6 text-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 ${
              dragging
                ? 'border-foreground bg-surface/50'
                : 'border-warm-border bg-warm-50 hover:border-foreground/40 hover:bg-surface/30'
            }`}
          >
            <input
              id="pres-archivos"
              ref={fileInputRef}
              type="file"
              accept={ACCEPTED_EXTENSIONS_INPUT}
              multiple
              className="hidden"
              onChange={(e) => {
                const input = e.currentTarget
                if (input.files) validateAndAddFiles(input.files)
                input.value = ''
              }}
            />
            <svg className="size-8 text-muted mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <p className="text-sm font-semibold text-foreground mb-1">
              Arrastra tus archivos aqui o haz clic para seleccionar
            </p>
            <p className="text-xs text-muted">
              Maximo 25MB por archivo. Formatos: PDF, DOC, XLS, JPG, PNG, ZIP
            </p>
          </div>

          {/* File list */}
          {files.length > 0 && (
            <div className="mt-3 space-y-2">
              {files.map((file, i) => (
                <div key={`${file.name}-${i}`} className="flex items-center gap-3 rounded-xl border border-warm-border bg-white p-3">
                  <svg className="size-5 text-muted shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground font-medium truncate">{file.name}</p>
                    <p className="text-xs text-muted">{formatFileSize(file.size)}</p>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); removeFile(i) }}
                    className="shrink-0 p-1 rounded-lg text-muted hover:text-red-500 hover:bg-red-50 transition-colors"
                    aria-label={`Eliminar ${file.name}`}
                  >
                    <svg className="size-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}

          {fileError && <p className="mt-2 text-xs text-red-500">{fileError}</p>}
        </div>
      </div>

      {/* Privacidad */}
      <div className="flex items-start gap-3" data-field-error={!!errors.privacidad || undefined}>
        <input
          type="checkbox"
          id="privacidad"
          checked={values.privacidad}
          onChange={handleChange('privacidad')}
          className="mt-0.5 size-4 rounded border-gray-300 text-foreground focus-visible:ring-foreground"
        />
        <label htmlFor="privacidad" className="text-sm text-gray-600">
          He leido y acepto la{' '}
          <a href="/politica-de-privacidad" className="text-foreground underline hover:text-foreground-dark">
            politica de privacidad
          </a>
          {' '}y el tratamiento de mis datos para gestionar mi solicitud. *
        </label>
      </div>
      {errors.privacidad && <p className={errorMsgClass}>{errors.privacidad}</p>}

      {error && (
        <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">{error}</div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-accent py-4 text-base font-bold text-white shadow-lg shadow-accent/20 transition-[background-color,box-shadow] hover:bg-accent-600 hover:shadow-xl hover:shadow-accent/30 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Enviando solicitud\u2026' : (
          <>
            <svg aria-hidden="true" className="size-5 inline-block mr-1 -mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            Solicitar presupuesto gratuito
          </>
        )}
      </button>
      <p className="text-center text-xs text-gray-500">Sin compromiso · Presupuesto gratis · Respuesta en menos de 24h</p>
    </form>
  )
}
