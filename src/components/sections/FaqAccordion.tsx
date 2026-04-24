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
  lang?: 'es' | 'en'
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
        type="button"
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4 min-w-0">
          <span
            className={`shrink-0 inline-flex items-center justify-center size-8 rounded-full text-[11px] font-bold tabular-nums tracking-tight mt-0.5 transition-colors duration-300 ${
              isOpen
                ? 'bg-foreground-dark text-white'
                : 'bg-surface text-muted group-hover:bg-warm-200 group-hover:text-foreground'
            }`}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className={`font-semibold text-base lg:text-[17px] leading-snug transition-colors duration-200 ${
              isOpen ? 'text-foreground' : 'text-foreground group-hover:text-foreground-dark'
            }`}
          >
            {faq.pregunta}
          </span>
        </div>
        <div
          className={`shrink-0 size-9 flex items-center justify-center rounded-full transition-[background-color,border-color,transform,box-shadow] duration-300 mt-0.5 ${
            isOpen
              ? 'bg-foreground-dark text-white shadow-[0_4px_12px_-2px_rgba(0,0,0,0.18)]'
              : 'bg-white border border-warm-border text-muted group-hover:border-foreground-dark group-hover:text-foreground-dark'
          }`}
        >
          <svg
            className={`size-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'rotate-45' : 'rotate-0'}`}
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

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6 pl-12 pr-4">
            <div className="h-px w-10 bg-gradient-to-r from-foreground-dark/30 to-transparent mb-4" />
            <p className="text-muted leading-relaxed text-[15px] lg:text-base">
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
  titulo,
  subtitulo,
  lang = 'es',
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqItems: FAQ[] = faqsProp ?? (faqs[categoria] ?? faqs['home'] ?? [])

  const t = lang === 'en' ? {
    defaultTitulo: 'Frequently asked questions',
    defaultSubtitulo: 'Everything you need to know about drywall installation in Menorca.',
    cantFind: "Can't find your answer?",
    callOrWrite: 'Call or message us. We reply within 1 hour during business hours.',
    callLabel: 'Call',
    whatsappAria: 'Contact us on WhatsApp',
    whatsappText: 'Chat',
  } : {
    defaultTitulo: 'Preguntas frecuentes',
    defaultSubtitulo: 'Todo lo que necesitas saber sobre la instalación de pladur en Menorca.',
    cantFind: '¿No encuentras tu respuesta?',
    callOrWrite: 'Llámanos o escríbenos. Respondemos en menos de 1 hora en horario laboral.',
    callLabel: 'Llamar',
    whatsappAria: 'Contactar por WhatsApp',
    whatsappText: 'Chatear',
  }

  const tituloFinal = titulo ?? t.defaultTitulo
  const subtituloFinal = subtitulo ?? t.defaultSubtitulo

  const handleToggle = useCallback((index: number) => {
    setOpenIndex(prev => prev === index ? null : index)
  }, [])

  return (
    <section className="w-full py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left column: header */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface text-foreground text-[11px] font-semibold uppercase tracking-[0.12em] mb-5">
              <span className="inline-flex items-center justify-center size-1.5 rounded-full bg-foreground-dark animate-pulse motion-reduce:animate-none" />
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-foreground leading-[1.1] text-balance mb-4">
              {tituloFinal}
            </h2>
            <p className="text-muted leading-relaxed text-base">
              {subtituloFinal}
            </p>

            {/* Contact card */}
            <div className="mt-8 p-6 bg-white/70 rounded-3xl border border-warm-border/50 shadow-card">
              <p className="font-semibold text-foreground text-sm mb-1">
                {t.cantFind}
              </p>
              <p className="text-muted text-sm mb-5 leading-relaxed">
                {t.callOrWrite}
              </p>

              {/* Contact actions — minimal list style */}
              <div className="-mx-2 divide-y divide-warm-border/60">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="group flex items-center justify-between gap-3 px-2 py-3 rounded-lg transition-colors duration-200 hover:bg-surface/60 focus-visible:outline-none focus-visible:bg-surface/60 focus-visible:ring-1 focus-visible:ring-foreground-dark/20"
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <svg aria-hidden="true" className="size-4 text-muted group-hover:text-foreground-dark transition-colors duration-200 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <span className="text-sm font-semibold text-foreground tabular-nums">{siteConfig.phone}</span>
                  </span>
                  <span className="text-[11px] font-medium text-muted group-hover:text-foreground-dark transition-colors duration-200">{t.callLabel}</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${lang === 'en' ? siteConfig.whatsappTextEn : siteConfig.whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.whatsappAria}
                  className="group flex items-center justify-between gap-3 px-2 py-3 rounded-lg transition-colors duration-200 hover:bg-surface/60 focus-visible:outline-none focus-visible:bg-surface/60 focus-visible:ring-1 focus-visible:ring-foreground-dark/20"
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <svg aria-hidden="true" className="size-4 text-muted group-hover:text-foreground-dark transition-colors duration-200 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                    <span className="text-sm font-semibold text-foreground">WhatsApp</span>
                  </span>
                  <span className="text-[11px] font-medium text-muted group-hover:text-foreground-dark transition-colors duration-200">{t.whatsappText}</span>
                </a>
              </div>
            </div>
          </aside>

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
