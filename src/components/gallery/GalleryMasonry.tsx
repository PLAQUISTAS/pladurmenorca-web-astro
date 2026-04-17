'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { type GalleryItem, type GalleryCategory, galleryCategories } from '@/data/proyectos'

/* ────────────────────────────────────────────
   Gallery card — minimal, uniform aspect ratio
   ──────────────────────────────────────────── */
function GalleryCard({
  item,
  onClick,
  index,
}: {
  item: GalleryItem
  onClick: () => void
  index: number
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative w-full aspect-[3/2] rounded-xl sm:rounded-2xl overflow-hidden bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
    >
      {!imgError ? (
        <img
          src={item.src}
          alt={item.alt}
          width={600}
          height={400}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading={index < 3 ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-warm-200 flex items-center justify-center">
          <span className="text-xs font-medium text-muted text-center px-4">{item.title}</span>
        </div>
      )}

      {/* Gradient overlay — always on mobile, hover on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />

      {/* Info — always visible on mobile, hover on desktop */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300">
        <p className="text-white font-semibold text-xs sm:text-sm leading-tight line-clamp-2">{item.title}</p>
        {item.location && (
          <p className="text-white/60 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{item.location}</p>
        )}
      </div>
    </button>
  )
}

/* ────────────────────────────────────────────
   Lightbox — clean, immersive
   ──────────────────────────────────────────── */
function Lightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const item = items[currentIndex]
  const [imgError, setImgError] = useState(false)
  const touchStart = useRef<number | null>(null)

  useEffect(() => { setImgError(false) }, [currentIndex])
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overscroll-contain"
      role="dialog"
      aria-modal="true"
      aria-label="Galería de proyectos"
    >
      <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={onClose} aria-hidden="true" />

      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 z-50 size-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        aria-label="Cerrar"
      >
        <svg className="size-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 text-white/40 text-xs font-medium tabular-nums tracking-wider">
        {currentIndex + 1} / {items.length}
      </div>

      {/* Navigation */}
      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-4 sm:left-8 z-50 size-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Anterior"
          >
            <svg className="size-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={onNext}
            className="absolute right-4 sm:right-8 z-50 size-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Siguiente"
          >
            <svg className="size-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </>
      )}

      {/* Content */}
      <div
        className="relative z-40 w-full max-w-5xl mx-4 sm:mx-8"
        onTouchStart={(e) => { touchStart.current = e.touches[0].clientX }}
        onTouchEnd={(e) => {
          if (touchStart.current === null) return
          const diff = e.changedTouches[0].clientX - touchStart.current
          if (Math.abs(diff) > 60) { diff > 0 ? onPrev() : onNext() }
          touchStart.current = null
        }}
      >
        <div className="relative w-full flex items-center justify-center">
          {!imgError ? (
            <img
              src={item.src}
              alt={item.alt}
              className="object-contain max-h-[80vh] w-auto rounded-2xl"
              onError={() => setImgError(true)}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="rounded-2xl bg-white/5 w-full aspect-video flex items-center justify-center">
              <p className="text-white/40 text-sm">{item.title}</p>
            </div>
          )}
        </div>

        {/* Caption */}
        <div className="mt-5 text-center">
          <p className="text-white/90 font-semibold text-sm">{item.title}</p>
          {item.location && (
            <p className="text-white/40 text-xs mt-1">{item.location}</p>
          )}
        </div>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────
   Main Gallery
   ──────────────────────────────────────────── */
export default function GalleryMasonry({ items }: { items: GalleryItem[] }) {
  const [activeFilter, setActiveFilter] = useState<string>('todos')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    const cat = new URLSearchParams(window.location.search).get('cat')
    if (cat) setActiveFilter(cat)
  }, [])

  const updateFilter = useCallback((id: string) => {
    setActiveFilter(id)
    const params = new URLSearchParams(window.location.search)
    if (id === 'todos') params.delete('cat')
    else params.set('cat', id)
    const qs = params.toString()
    window.history.replaceState(null, '', `${window.location.pathname}${qs ? `?${qs}` : ''}`)
  }, [])

  const filtered = activeFilter === 'todos'
    ? items
    : items.filter((i) => i.category === activeFilter)

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const goPrev = useCallback(() => {
    setLightboxIndex((p) => p !== null ? (p - 1 + filtered.length) % filtered.length : null)
  }, [filtered.length])
  const goNext = useCallback(() => {
    setLightboxIndex((p) => p !== null ? (p + 1) % filtered.length : null)
  }, [filtered.length])

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-lg bg-surface text-foreground text-xs font-semibold uppercase tracking-wide mb-4">
            Galería
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance mb-3 sm:mb-4">
            Nuestros proyectos en Mallorca
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Cada proyecto refleja nuestro compromiso con la calidad y el detalle.
          </p>
        </div>

        {/* Filters — horizontal scroll on mobile */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 mb-10 sm:mb-12">
          <div className="flex items-center sm:justify-center gap-2 overflow-x-auto scrollbar-none pb-1 snap-x snap-mandatory">
            {galleryCategories.map((cat) => {
              const isActive = activeFilter === cat.id
              const count = cat.id === 'todos' ? items.length : items.filter((i) => i.category === cat.id).length
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => updateFilter(cat.id)}
                  className={`shrink-0 snap-start px-4 py-2 text-sm font-semibold rounded-xl border transition-colors duration-200 ${
                    isActive
                      ? 'bg-foreground text-white border-foreground'
                      : 'bg-white/70 text-muted border-warm-border/50 hover:text-foreground hover:border-foreground/30'
                  }`}
                >
                  {cat.label}
                  {isActive && (
                    <span className="ml-1.5 text-white/60 tabular-nums text-xs">{count}</span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Grid — 2 cols on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filtered.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted">No hay proyectos en esta categoría.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  )
}
