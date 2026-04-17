'use client'

import { siteConfig } from '@/data/site'

const WHATSAPP_URL = `https://wa.me/${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`

function trackWhatsApp() {
  if (typeof window !== 'undefined' && typeof (window as Window & { gtag?: Function }).gtag === 'function') {
    ;(window as Window & { gtag?: Function }).gtag!('event', 'click_whatsapp', {
      event_category: 'contact',
      event_label: 'floating_button',
    })
  }
}

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip */}
      <span
        className="mr-3 px-4 py-2 rounded-xl bg-foreground text-white text-sm font-semibold tracking-tight whitespace-nowrap opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,transform] duration-300 pointer-events-none shadow-xl border border-white/10"
        aria-hidden="true"
      >
        ¿Hablamos por WhatsApp?
      </span>

      {/* Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        onClick={trackWhatsApp}
        className="relative flex items-center justify-center size-14 rounded-full shadow-whatsapp hover:shadow-whatsapp-hover focus-visible:outline-hidden focus-visible:ring-4 focus-visible:ring-green-400 focus-visible:ring-offset-2 hover:scale-110 active:scale-95 transition-[transform,box-shadow] duration-300 ease-out"
        style={{ backgroundColor: '#25D366' }}
      >
        {/* Organic Pulse rings */}
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-20 motion-reduce:animate-none"
          style={{ backgroundColor: '#25D366', animationDuration: '3s' }}
          aria-hidden="true"
        />
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-10 motion-reduce:animate-none"
          style={{ backgroundColor: '#25D366', animationDuration: '4s', animationDelay: '1s' }}
          aria-hidden="true"
        />

        {/* WhatsApp SVG icon */}
        <svg
          className="size-7 text-white relative z-10 drop-shadow-md"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Brand Accent Notification dot */}
        <span className="absolute top-0 right-0 size-4 bg-accent border-2 border-white rounded-full z-20 shadow-sm" />
      </a>
    </div>
  )
}
