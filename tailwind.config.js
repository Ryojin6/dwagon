const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');
const plugin = require('tailwindcss/plugin');
const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  mode: 'jit',
  darkMode: 'media',
  purge: ['./src/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Dwagon', 'sans-serif'],
        dela: ['Dela', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },

      colors: {
        r: {
          pink: '#CB2637',
          gray: '#444241',
          charcoal: '#242524',
        },
      },
      screens: {
        '3xl': '1800px',
      },

      maxWidth: {
        '8xl': '1800px',
      },
    },
  },
  variants: {},
  plugins: [
    forms({ strategy: 'class' }),
    typography,
    aspectRatio,
    plugin(({ addVariant, e }) => {
      addVariant('scrolled', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `.scrolled .${e(`scrolled${separator}${className}`)}`,
        );
      });
    }),
  ],
};
