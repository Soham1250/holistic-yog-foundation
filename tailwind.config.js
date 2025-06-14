/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        mont: ['var(--font-mont)'],
        roboto: ['var(--font-roboto)'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#E05E0E',
          hover: '#f5a366',
        },
        sidebar: {
          bg: '#353232',
          hover: '#474343',
        },
      },
      keyframes: {
        sidebarOpen: {
          '0%': { transform: 'translateX(-100%)' },
          '90%': { transform: 'translateX(5px)' },
          '100%': { transform: 'translateX(0)' },
        },
        sidebarClose: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        sidebarOpen: 'sidebarOpen 0.3s ease-in-out forwards',
        sidebarClose: 'sidebarClose 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
