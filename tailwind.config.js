const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['gotham', 'Helvetica', 'Arial', 'sans-serif'],
      'serif': ['gotham', 'ui-serif', 'Georgia'],
    },
    colors: {
      primary: {
        DEFAULT: '#51C3F9',
        dark: '#279ed3',
      },
      success: {
        DEFAULT: '#10A8AB',
        dark: '#028285',
      },
      warning: {
        DEFAULT: '#F7B054',
        dark: '#C68D43',
      },
      danger: {
        DEFAULT: '#E64C66',
        dark: '#c9334e',
      },
      main: {
        light: '#8992b3',
        DEFAULT: '#50597a',
        dark: '#394263',
        darker: '#20243f',
        outline: '#8992b3c4'
      },
      white: '#fff',
      black: '#000',
      transparent: 'transparent'
    },
    extend: {
      fontSize: {
        '2xs': '.5rem'
      },
      transitionProperty: {
        'bottom': 'bottom',
      },
      maxHeight: {
        '85vh': '85vh'
      },
      translate: {
        'n-full': '-100%',
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['checked', 'hover'],
      textColor: ['group-hover']
    },
  },
  plugins: [require("@tailwindcss/forms")({
    strategy: 'class',
  }),
  require('@tailwindcss/aspect-ratio'),
  plugin(function ({ addBase, theme }) {
    addBase({
      ':focus-visible': { 'outline-color': theme('backgroundColor.main.outline'), 'outline-style': 'solid', 'outline-width': '2px' },
    })
  })
  ]
}
