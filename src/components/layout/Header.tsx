'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { serviciosMenu, zonasMenu, navSimple } from '@/data/navigation'
import { siteConfig } from '@/data/site'

// ─── Rolling text animation ───────────────────────────────────────────────────

function RollText({ children }: { children: string }) {
  return (
    <span className="relative overflow-hidden h-[1.25rem] flex items-center">
      <span className="block leading-5 group-hover:-translate-y-full transition-transform duration-300 motion-reduce:transition-none">
        {children}
      </span>
      <span className="block absolute top-full left-0 leading-5 group-hover:-translate-y-full transition-transform duration-300 motion-reduce:transition-none">
        {children}
      </span>
    </span>
  )
}

// ─── Dropdown: Servicios ──────────────────────────────────────────────────────

function ServiciosPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] bg-white rounded-xl shadow-dropdown z-50 overflow-hidden flex">
      {/* Left: accent panel */}
      <div className="w-56 bg-nav-bg border-r border-nav-border p-6 flex flex-col justify-between shrink-0">
        <div>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-nav-border text-muted text-xs font-semibold uppercase tracking-wide mb-3">
            Servicios
          </span>
          <h3 className="text-sm font-bold text-foreground leading-snug mb-2">
            Instalación profesional de pladur en Mallorca
          </h3>
          <p className="text-xs text-muted leading-relaxed">
            +20 años de experiencia. Presupuesto gratuito en 24h.
          </p>
        </div>
      </div>

      {/* Right: services grid */}
      <div className="flex-1 p-4 grid grid-cols-2 gap-1 content-start">
        {serviciosMenu.map((s) => (
          <a
            key={s.href}
            href={s.href}
            onClick={onClose}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-nav-bg transition-colors duration-200 group"
          >
            <div className="size-8 rounded-lg bg-nav-border flex items-center justify-center text-muted shrink-0 group-hover:bg-foreground group-hover:text-white transition-colors mt-0.5">
              {s.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground leading-snug group-hover:text-muted transition-colors">
                {s.label}
              </p>
              <p className="text-xs text-muted mt-0.5 leading-snug">{s.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

// ─── Dropdown: Zonas ─────────────────────────────────────────────────────────

function ZonasPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[540px] bg-white rounded-xl shadow-dropdown z-50 overflow-hidden">
      {/* Header */}
      <div className="px-5 pt-4 pb-3 border-b border-nav-border">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-nav-border text-muted text-xs font-semibold uppercase tracking-wide mb-2">
          Cobertura total
        </span>
        <p className="text-xs text-muted">
          Trabajamos en toda Mallorca sin coste de desplazamiento en obras +500€
        </p>
      </div>

      {/* Zone cards */}
      <div className="p-3 grid grid-cols-2 gap-1.5 max-h-[420px] overflow-y-auto">
        {zonasMenu.map((z) => (
          <a
            key={z.href}
            href={z.href}
            onClick={onClose}
            className="flex items-center justify-between gap-2 px-3.5 py-3 rounded-lg border border-nav-border hover:border-foreground hover:bg-nav-bg transition-colors duration-200 group"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-muted transition-colors truncate">
                {z.label}
              </p>
              <p className="text-[11px] text-muted leading-snug truncate mt-0.5">{z.barrios.slice(0, 3).join(', ')}</p>
            </div>
            <svg className="size-3.5 text-muted shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-nav-border bg-nav-bg flex items-center justify-between">
        <span className="text-xs text-muted">+53 municipios cubiertos</span>
        <a
          href="/pladur-en-mallorca"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-foreground-dark transition-colors duration-200"
        >
          Ver todas las zonas
          <svg className="size-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

type ActiveMenu = 'servicios' | 'zonas' | null

export default function Header() {
  const [pathname, setPathname] = useState('/')
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null)
  const [mobileExpanded, setMobileExpanded] = useState<ActiveMenu>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 10) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const openMenu = useCallback((menu: ActiveMenu) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveMenu(menu)
  }, [])

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150)
  }, [])

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  const closeMenu = useCallback(() => setActiveMenu(null), [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 isolation-isolate">
      <div ref={navRef} className="relative w-full max-w-6xl">

        {/* ── Nav Pill ── */}
        <nav
          className={`flex items-center justify-between px-6 py-3 rounded-[16px] text-sm [will-change:backdrop-filter] [transform:translateZ(0)] transition-[background-color,border-color,box-shadow,color] duration-300 ${
            scrolled
              ? 'bg-white/90 backdrop-blur-lg border border-gray-200 shadow-nav text-foreground'
              : isHome
                ? 'bg-white/10 backdrop-blur-sm border border-white/10 text-white'
                : 'bg-white/60 backdrop-blur-md border border-transparent text-foreground'
          }`}
          aria-label="Navegación principal"
        >
          {/* Logo */}
          <a href="/" aria-label="Pladur Mallorca — Inicio" className="flex items-center shrink-0">
            <img
              src="/images/pladur-mallorca-logo.png"
              alt="Pladur Mallorca"
              width={40}
              height={40}
              loading="eager"
              decoding="async"
              className="h-9 w-auto"
            />
          </a>

          {/* ── Desktop Links ── */}
          <div className="hidden lg:flex items-center gap-6 ml-8">

            {/* Servicios trigger */}
            <button
              className={`flex items-center gap-1 group focus-visible:outline-hidden focus-visible:ring-2 rounded-xs ${
                scrolled || !isHome ? 'focus-visible:ring-foreground/30' : 'focus-visible:ring-white/30'
              }`}
              onMouseEnter={() => openMenu('servicios')}
              onMouseLeave={scheduleClose}
              onClick={() => setActiveMenu(activeMenu === 'servicios' ? null : 'servicios')}
              aria-expanded={activeMenu === 'servicios'}
              aria-haspopup="true"
            >
              <RollText>Servicios</RollText>
              <svg
                className={`size-3 transition-transform duration-200 ${scrolled || !isHome ? 'text-muted' : 'text-white/50'} ${activeMenu === 'servicios' ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Zonas trigger */}
            <button
              className={`flex items-center gap-1 group focus-visible:outline-hidden focus-visible:ring-2 rounded-xs ${
                scrolled || !isHome ? 'focus-visible:ring-foreground/30' : 'focus-visible:ring-white/30'
              }`}
              onMouseEnter={() => openMenu('zonas')}
              onMouseLeave={scheduleClose}
              onClick={() => setActiveMenu(activeMenu === 'zonas' ? null : 'zonas')}
              aria-expanded={activeMenu === 'zonas'}
              aria-haspopup="true"
            >
              <RollText>Zonas</RollText>
              <svg
                className={`size-3 transition-transform duration-200 ${scrolled || !isHome ? 'text-muted' : 'text-white/50'} ${activeMenu === 'zonas' ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Simple links */}
            {navSimple.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group transition-colors duration-200 focus-visible:outline-hidden focus-visible:ring-2 rounded-xs ${
                    scrolled || !isHome ? 'focus-visible:ring-foreground/30' : 'focus-visible:ring-white/30'
                  } ${isActive ? 'font-bold' : ''}`}
                  onMouseEnter={scheduleClose}
                >
                  <RollText>{link.label}</RollText>
                </a>
              )
            })}
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center gap-3 ml-8">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                scrolled || !isHome
                  ? 'text-foreground hover:text-foreground-dark hover:bg-surface'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
              aria-label={`Llamar al ${siteConfig.phone}`}
            >
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {siteConfig.phone}
            </a>
            <a
              href="/presupuesto-pladur"
              className={`px-4 py-2 rounded-xl text-sm font-bold tracking-wide transition-[background-color,box-shadow] duration-200 ease-out active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 ${
                scrolled || !isHome
                  ? 'bg-accent hover:bg-accent-600 text-white shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 focus-visible:ring-accent/60'
                  : 'bg-accent hover:bg-accent-600 text-white shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 focus-visible:ring-accent/60'
              }`}
            >
              Presupuesto gratis
            </a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className={`lg:hidden p-1.5 rounded-lg transition-colors ${
              scrolled || !isHome
                ? 'text-muted hover:text-foreground hover:bg-nav-border'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </nav>

        {/* ── Desktop Mega Dropdowns ── */}
        {activeMenu === 'servicios' && (
          <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
            <ServiciosPanel onClose={closeMenu} />
          </div>
        )}
        {activeMenu === 'zonas' && (
          <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
            <ZonasPanel onClose={closeMenu} />
          </div>
        )}
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`absolute top-full left-4 right-4 mt-2 rounded-2xl bg-white/95 backdrop-blur-md border border-nav-border overflow-hidden [will-change:backdrop-filter] [transform:translateZ(0)] transition-[max-height,opacity,box-shadow] duration-300 ease-in-out lg:hidden ${
          mobileOpen ? 'max-h-[80vh] opacity-100 shadow-xl' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav className="px-4 pt-3 pb-6 overflow-y-auto max-h-[80vh]" aria-label="Menú móvil">

          {/* Servicios accordion */}
          <div className="mb-1">
            <button
              className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-foreground rounded-xl hover:bg-nav-bg transition-colors duration-200"
              onClick={() => setMobileExpanded(mobileExpanded === 'servicios' ? null : 'servicios')}
            >
              Servicios
              <svg
                className={`size-4 text-muted transition-transform duration-200 ${mobileExpanded === 'servicios' ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileExpanded === 'servicios' && (
              <div className="ml-2 mt-1 space-y-0.5">
                {serviciosMenu.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-3 px-3 py-2.5 text-sm text-muted hover:text-foreground hover:bg-nav-bg rounded-xl transition-colors duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="text-muted">{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Zonas accordion */}
          <div className="mb-1">
            <button
              className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-foreground rounded-xl hover:bg-nav-bg transition-colors duration-200"
              onClick={() => setMobileExpanded(mobileExpanded === 'zonas' ? null : 'zonas')}
            >
              Zonas
              <svg
                className={`size-4 text-muted transition-transform duration-200 ${mobileExpanded === 'zonas' ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileExpanded === 'zonas' && (
              <div className="ml-2 mt-1 space-y-0.5">
                {zonasMenu.map((z) => (
                  <a
                    key={z.href}
                    href={z.href}
                    className="flex flex-col px-3 py-2.5 text-sm text-muted hover:text-foreground hover:bg-nav-bg rounded-xl transition-colors duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="font-semibold text-foreground">{z.label}</span>
                    <span className="text-xs mt-0.5">{z.desc}</span>
                  </a>
                ))}
                <a
                  href="/pladur-en-mallorca"
                  className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-surface rounded-xl transition-colors duration-200 mt-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Ver todas las zonas
                  <svg className="size-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            )}
          </div>

          {/* Simple links */}
          <div className="space-y-0.5">
            {navSimple.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-3 text-sm font-semibold rounded-xl transition-colors duration-200 ${
                    isActive
                      ? 'text-foreground bg-surface'
                      : 'text-foreground hover:bg-nav-bg'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* Phone + CTA */}
          <div className="mt-4 pt-4 border-t border-nav-border space-y-2">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-nav-bg text-foreground text-sm font-bold hover:bg-nav-border transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {siteConfig.phone}
            </a>
            <a
              href="/presupuesto-pladur"
              className="block text-center px-5 py-3 rounded-xl bg-foreground text-white text-sm font-bold tracking-wide hover:bg-foreground-dark transition-[background-color,box-shadow] duration-200 active:scale-95 shadow-lg shadow-foreground/20 hover:shadow-xl hover:shadow-foreground/30"
              onClick={() => setMobileOpen(false)}
            >
              Presupuesto gratis
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
