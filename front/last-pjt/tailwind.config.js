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
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      'realbig' : '10rem'
    },
    margin: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      'bigrem' : '20rem',
      'auto' : 'auto'
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
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