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
        'poppins': ['Poppins', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
      },
      fontSize: {
        'frSize': ['5rem', '1.2'],
      },
      colors: {
        'main': '#FEFFC5',
        'header': '#231F20',
        'search': '#FFEF62',
        'button': '#FAFD57',
        'listing': '#444444',
        'yellow': '#ffff00',
      },
      height: {
        'frImageH': '600px',
      },
      width: {
        'frImageW': '450px',
        'nav-i-width': '190px',
      },
      screens: {
        "wide": "1440px"
      },
      boxShadow: {
        '2xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      },
      maxWidth: {
        'album': '120px',
        'cardw': '180px',
        'cardh': '270px',
      },
    },
  },
  plugins: [],
}