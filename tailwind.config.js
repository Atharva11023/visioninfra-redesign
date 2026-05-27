/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:'#fffbeb', 100:'#fef3c7', 200:'#fde68a',
          300:'#fcd34d', 400:'#fbbf24', 500:'#f59e0b',
          600:'#d97706', 700:'#b45309', 800:'#92400e',
          900:'#78350f', 950:'#451a03',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans:    ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float':     'float-y 7s ease-in-out infinite',
      },
      keyframes: {
        'float-y': {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-18px)' },
        },
      },
      screens: { xs: '390px' },
    },
  },
  plugins: [],
}
