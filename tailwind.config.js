/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // ten purge usuwa nieużywane klasy przed deployem
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'roboto-flex': ['Roboto Flex', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
