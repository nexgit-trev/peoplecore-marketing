import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#D4AF37', light: '#E8CC6A', dark: '#B8952A' },
        ink:  { DEFAULT: '#0A0A0B', 2: '#111113', 3: '#18181B', 4: '#1F1F23' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
