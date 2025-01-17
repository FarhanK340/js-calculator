// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'calculator-display-bg': '#1c1c1c',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
