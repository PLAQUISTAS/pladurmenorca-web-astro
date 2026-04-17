'use client'

import { useState, useCallback } from 'react'
import { faqs } from '@/data/faqs'
import { siteConfig } from '@/data/site'
import type { FAQ } from '@/data/faqs'

interface FaqAccordionProps {
  faqs?: FAQ[]
  categoria?: string
  titulo?: string
  subtitulo?: string
}

function AccordionItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: FAQ
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-warm-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4">
          <span className="text-xs font-bold text-muted/70 tabular-nums mt-0.5 shrink-0 w-6 text-right">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-semibold text-foreground text-base lg:text-lg leading-snug group-hover:text-muted transition-colors">
            {faq.pregunta}
          </span>
        </div>
        <div className={`shrink-0 size-8 flex items-center justify-center rounded-full border transition-colors duration-300 mt-0.5 ${
          isOpen
            ? 'border-foreground-dark bg-foreground-dark text-white'
            : 'border-warm-border bg-white text-muted group-hover:border-foreground group-hover:text-foreground'
        }`}>
          <svg
            className={`size-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </button>

      <div className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="pb-6 pl-10 pr-4">
            <p className="text-muted leading-relaxed text-sm lg:text-base">
              {faq.respuesta}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FaqAccordion({
  faqs: faqsProp,
  categoria = 'home',
  titulo = 'Preguntas frecuentes',
  subtitulo = 'Todo lo que necesitas saber sobre la instalación de pladur en Mallorca.',
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqItems: FAQ[] = faqsProp ?? (faqs[categoria] ?? faqs['home'] ?? [])

  const handleToggle = useCallback((index: number) => {
    setOpenIndex(prev => prev === index ? null : index)
  }, [])

  return (
    <section className="w-full py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left column: header */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-surface text-foreground text-xs font-semibold uppercase tracking-wide mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance mb-4">
              {titulo}
            </h2>
            <p className="text-muted leading-relaxed text-base">
              {subtitulo}
            </p>

            <div className="mt-8 p-6 bg-white/70 rounded-3xl border border-warm-border/50 shadow-card">
              <p className="font-semibold text-foreground text-sm mb-1">
                ¿No encuentras tu respuesta?
              </p>
              <p className="text-muted text-sm mb-4 leading-relaxed">
                Llámanos o escríbenos. Respondemos en menos de 1 hora en horario laboral.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-foreground font-bold text-sm hover:text-muted transition-colors duration-200"
                >
                  <svg className="size-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {siteConfig.phone}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground font-bold text-sm hover:text-muted transition-colors duration-200"
                >
                  <svg className="size-4 text-muted" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right column: accordion */}
          <div className="lg:col-span-8">
            <div>
              {faqItems.map((faq, index) => (
                <AccordionItem
                  key={`${faq.pregunta}-${index}`}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
