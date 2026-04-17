import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: {
          DEFAULT: '#404040',
          dark: '#333333',
        },
        muted: '#636363',
        surface: '#F0F0F0',
        accent: {
          DEFAULT: '#E54D1F',
          600: '#D4421A',
        },
        star: '#FBBF24',
        warm: {
          50: '#FDFCFB',
          100: '#FAF9F7',
          200: '#F5F3F0',
          border: '#E8E4DF',
          'border-light': '#EDE9E4',
        },
        nav: {
          bg: '#FAFAFA',
          border: '#E5E5E5',
        },
        'hero-dark': '#0A0A0A',
        placeholder: '#ECECEC',
        google: '#4285F4',
      },
      boxShadow: {
        'warm-sm': '0 2px 8px rgba(97, 74, 68, 0.04)',
        'warm': '0 4px 20px rgba(97, 74, 68, 0.06), 0 1px 3px rgba(97, 74, 68, 0.04)',
        'warm-lg': '0 4px 50px rgba(97, 74, 68, 0.06)',
        'warm-hover': '0 8px 30px rgba(97, 74, 68, 0.10), 0 2px 4px rgba(97, 74, 68, 0.06)',
        'glass': '0 8px 32px rgba(97, 74, 68, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.5), inset 0 -1px 1px rgba(97, 74, 68, 0.03)',
        'dropdown': '0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 8px 12px -4px rgba(15, 12, 12, 0.08), 0px 1px 2px 0px rgba(15, 12, 12, 0.10)',
        'nav': '0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)',
        'cookie': '0 -4px 30px rgba(97, 74, 68, 0.12)',
        'whatsapp': '0 8px 30px rgb(37, 211, 102, 0.4)',
        'whatsapp-hover': '0 20px 50px rgba(37, 211, 102, 0.6)',
        'soft': '0px 0px 0px 1px rgba(97, 74, 68, 0.03), 0px 4px 12px -2px rgba(97, 74, 68, 0.04)',
        'soft-lg': '0px 0px 0px 1px rgba(97, 74, 68, 0.03), 0px 8px 20px -4px rgba(97, 74, 68, 0.05)',
        'soft-hover': '0px 0px 0px 1px rgba(97, 74, 68, 0.04), 0px 12px 24px -4px rgba(97, 74, 68, 0.08)',
        'elevated': '0 12px 32px rgba(97, 74, 68, 0.10)',
        'accent-glow': '0 8px 24px rgba(255, 94, 43, 0.3)',
        'google': '0 8px 24px rgba(66, 133, 244, 0.15)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.125rem', { lineHeight: '1.6' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #404040 0%, #737373 100%)', // neutral gradient
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
