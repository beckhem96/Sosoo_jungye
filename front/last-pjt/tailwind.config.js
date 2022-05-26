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
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};