/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      'white': '#ffffff',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#EE6C4D',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#293241',
      'gray': '#3D5A80',
      'gray-light': '#d3dce6',
      'black': '#000000',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat'],
      'roboto-condensed': ['Roboto Condensed'],
    },
    extend: {},
  },
  plugins: [],
}

