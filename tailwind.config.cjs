const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'cracked-plaster': "url('/bg_cracked_plaster.jpg')",
      },
      fontFamily: {
        serif: ['var(--font-iconic)', ...defaultTheme.fontFamily.serif],
      },
      dropShadow: {
        'lg': '0 10px 10px rgba(0, 0, 0, 1)',
        'xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '2xl': [
          '0 35px 35px rgba(0, 0, 0, 0.75)',
          '0 45px 45px rgba(0, 0, 0, 0.35)'
        ]
      },
      animation: {
        'pulse': 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
