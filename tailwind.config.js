/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('flowbite/plugin')
  ],
  content: ['./*.html'],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      }
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    },
  },
  plugins: [],
}