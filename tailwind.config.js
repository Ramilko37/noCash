const {red} = require("tailwindcss/colors");
const {colors} = require("@material-ui/core");
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'trekondary': '#283142',
      'red': '#FF0000',
    }),
    extend: {


      backgroundImage: {
        'gradient': 'linear-gradient(90deg, #DFAF3F 0%, #E15C5C 100%)',
      },
      colors: {
        'tipButton': '#313D4D',
        'textarea-bg': '#313D4D',
        'payButton': '#252527',
        'bg-for-containers': '#283142',
        gray: {
          DEFAULT: '#283142',
        }
      },
      fontFamily: {
        'sans': 'Helvetica, Arial, Inter, sans-serif',
      },
    },
    container: {
      center: true,

    borderRadius: {
      'large': '25px',
      'full': '9999px',
    },

  },
  variants: {
    extend: {
      backgroundColor: ['trekondary', 'red'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
},
}
