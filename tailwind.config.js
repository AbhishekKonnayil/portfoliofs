/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      fontFamily: {
        exo: ['"Exo 2"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}