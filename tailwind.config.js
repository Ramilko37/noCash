module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'button-color': 'linear-gradient(90deg, #DFAF3F 0%, #E15C5C 100%)',
        'textarea-bg': '#313D4D',
        'applePayButton': '#252527',
      },
      fontFamily: {
        'sans': 'Helvetica, Arial, Inter, sans-serif',
      },
    },
    container: {
      center: true
    },
    borderRadius: {
      'large': '25px',
      'full': '9999px',
    },

  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
