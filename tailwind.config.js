const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cracked-plaster': "url('/bg_cracked_plaster.jpg')",
      },
      fontFamily: {
        serif: ['var(--font-iconic)', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
