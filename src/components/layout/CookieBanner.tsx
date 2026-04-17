'use client'

import { useState, useEffect, useCallback } from 'react'

const CONSENT_KEY = 'pladur_cookie_consent'
const CONSENT_TS_KEY = 'pladur_cookie_consent_ts'
const TWELVE_MONTHS = 365 * 24 * 60 * 60 * 1000

type ConsentState = 'pending' | 'accepted' | 'rejected'

function injectAnalyticsScripts() {
  if (typeof document === 'undefined') return
  // Prevent double injection in React strict mode
  if (document.getElementById('pladur-analytics-loaded')) return

  const gaId = import.meta.env.PUBLIC_GA_MEASUREMENT_ID
  const gtmId = import.meta.env.PUBLIC_GTM_ID
  const adsId = import.meta.env.PUBLIC_GOOGLE_ADS_ID
  const metaPixelId = import.meta.env.PUBLIC_META_PIXEL_ID

  // Google Analytics 4
  if (gaId) {
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    script.async = true
    document.head.appendChild(script)

    const inline = document.createElement('script')
    inline.textContent = `
      window.dataLayer=window.dataLayer||[];
      function gtag(){dataLayer.push(arguments);}
      gtag('js',new Date());
      gtag('config','${gaId}',{page_path:window.location.pathname});
    `
    document.head.appendChild(inline)
  }

  // Google Tag Manager
  if (gtmId) {
    const gtm = document.createElement('script')
    gtm.textContent = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `
    document.head.appendChild(gtm)
  }

  // Google Ads Conversion Tracking
  if (adsId) {
    const ads = document.createElement('script')
    ads.textContent = `gtag('config','${adsId}');`
    document.head.appendChild(ads)
  }

  // Meta Pixel (Facebook)
  if (metaPixelId) {
    const pixel = document.createElement('script')
    pixel.textContent = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window,document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init','${metaPixelId}');
      fbq('track','PageView');
    `
    document.head.appendChild(pixel)
  }

  // Marker to prevent double injection
  const marker = document.createElement('meta')
  marker.id = 'pladur-analytics-loaded'
  document.head.appendChild(marker)
}

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState>('pending')
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(CONSENT_KEY)
    const ts = localStorage.getItem(CONSENT_TS_KEY)

    if (stored && ts) {
      const elapsed = Date.now() - parseInt(ts, 10)
      if (elapsed > TWELVE_MONTHS) {
        localStorage.removeItem(CONSENT_KEY)
        localStorage.removeItem(CONSENT_TS_KEY)
        setVisible(true)
        return
      }
      setConsent(stored as ConsentState)
      return
    }

    setVisible(true)
  }, [])

  // Inject analytics when consent is accepted
  useEffect(() => {
    if (consent === 'accepted') {
      injectAnalyticsScripts()
    }
  }, [consent])

  // Expose global function to reopen the banner from Cookie Policy page
  useEffect(() => {
    ;(window as any).openCookieSettings = () => {
      setVisible(true)
    }
    return () => {
      delete (window as any).openCookieSettings
    }
  }, [])

  const savePreference = useCallback((value: ConsentState) => {
    localStorage.setItem(CONSENT_KEY, value)
    localStorage.setItem(CONSENT_TS_KEY, Date.now().toString())
    setConsent(value)
    setVisible(false)
  }, [])

  const handleAccept = useCallback(() => savePreference('accepted'), [savePreference])
  const handleReject = useCallback(() => savePreference('rejected'), [savePreference])

  if (!mounted) return null

  return (
    <>
      {/* ── Cookie consent banner ── */}
      {visible && (
        <div
          role="dialog"
          aria-label="Configuración de cookies"
          aria-modal="false"
          className="fixed bottom-0 inset-x-0 z-[9999] p-3 sm:p-4 animate-[slideUp_0.4s_ease-out] motion-reduce:animate-none isolation-isolate"
        >
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-2xl border border-warm-border rounded-2xl shadow-cookie p-5 sm:p-6 [will-change:backdrop-filter] [transform:translateZ(0)]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-sm text-muted leading-relaxed flex-1">
                Usamos cookies propias y de terceros (Google Analytics, Google Ads, Meta Pixel) para
                analizar el tráfico y mostrarte publicidad relevante. Puedes aceptar o rechazar su uso.{' '}
                <a
                  href="/aviso-legal"
                  className="text-foreground font-semibold underline underline-offset-2 hover:text-foreground-dark"
                >
                  Política de Cookies
                </a>
                {' · '}
                <a
                  href="/politica-de-privacidad"
                  className="text-foreground font-semibold underline underline-offset-2 hover:text-foreground-dark"
                >
                  Política de Privacidad
                </a>
              </p>
              <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                <button
                  onClick={handleReject}
                  className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-semibold text-foreground bg-white border border-warm-border rounded-xl hover:bg-warm-200 hover:border-warm-border transition-[background-color,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
                >
                  Rechazar
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-semibold text-white bg-accent rounded-xl hover:bg-accent-600 transition-[background-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 shadow-lg shadow-accent/20"
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
