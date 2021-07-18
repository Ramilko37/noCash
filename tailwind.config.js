module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {


      backgroundImage: {
        'gradient': 'linear-gradient(90deg, #DFAF3F 0%, #E15C5C 100%)',
      },
      colors: {
        'tipButton': '#313D4D',
        'textarea-bg': '#313D4D',
        'payButton': '#252527',
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
