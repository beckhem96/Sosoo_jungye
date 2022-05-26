// tailwind.config.js

module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'violet400' : '#a78bfa',
      'violet700' : '#6B46C1',
      'violet900' : '#3C366B',
      'violet50' : '#f5f3ff',
      'violet200' : '#e9d5ff',
      'purple900' : '#581c87'
    },
    extend: {
      blur: {
        xs: '2px',
        threexl: '64x' 
      }
    },
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      default: '.25rem',
      'lg': '.5rem',
      'full': '9999px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};