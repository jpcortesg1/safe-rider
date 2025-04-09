/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sr': {
          dark: '#190A0F',
          yellow: '#FDBA35',
          red: '#D73038',
          text: '#E1D8C9'
        }
      }
    },
  },
  plugins: [],
} 