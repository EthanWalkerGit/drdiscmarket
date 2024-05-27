/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibm-plex-sans-bold-italic': ['IBM Plex Sans', 'sans-serif']
      },
      colors: {
        'main': '#FFFAA3',
        'header': '#231F20',
      }
    },
  },
  plugins: [],
}