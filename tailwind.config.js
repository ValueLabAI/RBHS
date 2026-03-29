/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F9F9F7',
        charcoal: '#161817',
        forest: {
          DEFAULT: '#1a382f',
          light: '#2a5a4b',
          dark: '#0d1c17'
        },
        mint: {
          DEFAULT: '#2EBD6B',
          light: '#4ade80',
          dark: '#22c55e'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Geist', 'Satoshi', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'diffusion': '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
        'glass-inner': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'forest-glow': '0 10px 40px -10px rgba(26, 56, 47, 0.15)',
      }
    },
  },
  plugins: [],
}
