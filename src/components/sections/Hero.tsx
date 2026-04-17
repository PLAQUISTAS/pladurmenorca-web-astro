'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'

interface CtaLink {
  texto: string
  href: string
}

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  ctaPrimario?: CtaLink
  ctaSecundario?: CtaLink
  image?: string
  badges?: string[]
  dark?: boolean
}

const categories = [
  { label: 'Techos', href: '/falsos-techos-pladur-mallorca' },
  { label: 'Tabiques', href: '/tabiques-pladur-mallorca' },
  { label: 'Aislamiento', href: '/aislamiento-acustico-mallorca' },
  { label: 'Reformas', href: '/reformas-interiores-pladur-mallorca' },
]

const titleLines = ['Instaladores', 'de Pladur', 'en Mallorca']

const stats = [
  { value: '+6.000', label: 'Proyectos' },
  { value: '+20', label: 'Años exp.' },
  { value: '4.7★', label: 'Google' },
]

/* ─── Service page hero (dark={true}) ─── */
function HeroService({
  title,
  subtitle,
  description,
  badges,
  ctaPrimario,
  ctaSecundario,
}: HeroProps) {
  return (
    <section className="pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/70 border border-warm-border/50 rounded-3xl px-6 sm:px-10 lg:px-16 py-14 lg:py-20 shadow-warm">
          <div className="relative max-w-4xl mx-auto text-center">
            {badges && badges.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-warm-200 text-foreground border border-warm-border/60"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
              {title}
            </h1>

            {(description || subtitle) && (
              <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto mb-8">
                {description || subtitle}
              </p>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {ctaPrimario && (
                <a
                  href={ctaPrimario.href}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-accent-600 text-white font-bold text-base tracking-wide shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-[background-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  {ctaPrimario.texto}
                  <svg aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              )}
              {ctaSecundario && (
                <a
                  href={ctaSecundario.href}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-warm-border hover:bg-foreground-dark hover:border-foreground-dark hover:text-white text-foreground font-bold text-base tracking-wide transition-[background-color,border-color,color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
                >
                  {ctaSecundario.href.startsWith('tel:') && (
                    <svg aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  )}
                  {ctaSecundario.texto}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Homepage hero (default) ─── */
export default function Hero(props: HeroProps) {
  const { dark, subtitle, ctaPrimario, ctaSecundario } = props

  if (dark) {
    return <HeroService {...props} />
  }

  return <HeroHome subtitle={subtitle} ctaPrimario={ctaPrimario} ctaSecundario={ctaSecundario} />
}

function HeroHome({
  subtitle,
  ctaPrimario,
  ctaSecundario,
}: Pick<HeroProps, 'subtitle' | 'ctaPrimario' | 'ctaSecundario'>) {
  const [activeTab, setActiveTab] = useState(0)
  const prefersReducedMotion = useReducedMotion()
  const noMotion = { initial: false as const, animate: false as const, transition: undefined }

  return (
    <section className="w-full flex flex-col items-center overflow-hidden relative bg-hero-dark min-h-[100svh]">

      {/* ── Video background ── */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: 'max(100%, 177.78vh)', height: 'max(100%, 56.25vw)', objectFit: 'cover' }}
          title="Pladur Mallorca — Instaladores de pladur en Mallorca"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* ── Subtle grain texture ── */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-overlay"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-28 md:pt-32 pb-8">

        {/* Top badge */}
        <motion.div
          className="mb-8 md:mb-10"
          {...(prefersReducedMotion ? noMotion : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.2 } })}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/[0.08] text-white/70 text-xs font-medium tracking-wide">
            <span className="size-1.5 rounded-full bg-white/60 animate-pulse motion-reduce:animate-none" />
            Especialistas en pladur · Mallorca
          </span>
        </motion.div>

        {/* Large stacked heading */}
        <h1 className="text-center w-full mb-8 md:mb-10">
          {titleLines.map((line, i) => (
            <motion.span
              key={i}
              className="block text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-bold text-white leading-[0.95] tracking-tighter"
              {...(prefersReducedMotion ? noMotion : { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] } })}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.div
          {...(prefersReducedMotion ? noMotion : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.85 } })}
        >
          {subtitle && (
            <p className="text-base sm:text-lg text-white/50 text-center leading-relaxed max-w-lg mb-8 md:mb-10 text-balance">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Service category pills */}
        <motion.div
          className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10 md:mb-12"
          {...(prefersReducedMotion ? noMotion : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.8 } })}
        >
          {categories.map((cat, i) => (
            <a
              key={cat.label}
              href={cat.href}
              onMouseEnter={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-xl text-sm font-medium tracking-wide transition-colors duration-300 ${
                i === activeTab
                  ? 'bg-white/15 text-white backdrop-blur-sm border border-white/10'
                  : 'text-white/40 hover:text-white/70 border border-transparent'
              }`}
            >
              {cat.label}
            </a>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3"
          {...(prefersReducedMotion ? noMotion : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.95 } })}
        >
          {ctaPrimario && (
            <a
              href={ctaPrimario.href}
              className="group inline-flex items-center gap-2.5 bg-accent hover:bg-accent-600 text-white px-7 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-[background-color,box-shadow,transform] duration-200 ease-out active:scale-[0.97] shadow-accent-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-hero-dark"
            >
              {ctaPrimario.texto}
              <svg className="size-4 opacity-60 group-hover:translate-x-0.5 transition-transform duration-200" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </a>
          )}

          {ctaSecundario && (
            <a
              href={ctaSecundario.href}
              className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-sm text-white px-7 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-[background-color,border-color,transform] duration-200 ease-out active:scale-[0.97] border border-white/10 hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-hero-dark"
            >
              {ctaSecundario.texto}
            </a>
          )}
        </motion.div>
      </div>

      {/* ── Bottom trust strip ── */}
      <motion.div
        className="relative z-10 w-full border-t border-white/[0.06]"
        {...(prefersReducedMotion ? noMotion : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6, delay: 1.2 } })}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">

          {/* Stats */}
          <div className="flex items-center gap-6 sm:gap-10">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-baseline gap-1.5">
                <span className="text-white font-bold text-sm sm:text-base tabular-nums">{stat.value}</span>
                <span className="text-white/30 text-xs font-medium hidden sm:inline">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="hidden md:flex items-center gap-3">
            <span className="text-white/25 text-xs font-medium tracking-wide">Scroll</span>
            <div className="w-[1.5px] h-8 rounded-full bg-white/10 relative overflow-hidden">
              <motion.div
                className="w-full h-3 bg-white/40 rounded-full"
                {...(prefersReducedMotion ? {} : { animate: { y: [0, 20, 0] }, transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' } })}
              />
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  )
}
