'use client'

export function TrackableLink({
  href,
  className,
  children,
  eventName,
}: {
  href: string
  className: string
  children: React.ReactNode
  eventName: string
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        if (typeof window !== 'undefined' && (window as Window & { gtag?: Function }).gtag) {
          ;(window as Window & { gtag?: Function }).gtag!('event', eventName, {
            event_category: 'contact',
            event_label: 'footer',
          })
        }
      }}
    >
      {children}
    </a>
  )
}
