/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#1c2e39',
        'logo-blue': '#0081c8',
        'logo-yellow': '#fcb131',
        'logo-red': '#ee334e',
        'logo-green': '#00a651',
      },
    },
  },
  plugins: [],
}