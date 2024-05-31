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
        'listing': '#191A17',
        'yellow': '#ffff00',
        'gray': '#808080',
        'dark-gray': '#505050',
      },
      height: {
        'frImageH': '600px',
        'conImageH': '236px',
        'cardh': '310px',
      },
      width: {
        'frImageW': '450px',
        'nav-i-width': '190px',
        'gw':'80px',
        'album': '160px',
        'cardw': '200px',
        'contact': '310px',
      },
      screens: {
        "wide": "1440px"
      },
      maxWidth: {
        'fullPage': '900px',
      },
    },
  },
  plugins: [],
}