/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all components for Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
