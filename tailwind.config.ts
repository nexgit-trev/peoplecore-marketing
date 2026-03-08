import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold:  { DEFAULT: '#C9A84C', light: '#E2C06A', dark: '#A07830' },
        ink:   { DEFAULT: '#080809', 2: '#0F0F11', 3: '#161619', 4: '#1E1E22' },
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans:  ['Geist', 'system-ui', 'sans-serif'],
        mono:  ['Geist Mono', 'monospace'],
      },
      borderRadius: { '2xl': '16px', '3xl': '24px', '4xl': '32px' },
      animation: {
        'fade-up':   'fade-up 0.7s ease both',
        'fade-in':   'fade-in 0.5s ease both',
        'float':     'float 5s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'glow':      'glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
