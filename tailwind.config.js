/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        DEFAULT: '#111',
      },
      green: {
        DEFAULT: '#92C020',
      },
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    fontFamily: {
      sans: ['Heebo', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Kalam', 'Heebo', 'serif'],
    },
    maxHeight: {
      full: '100%',
      screen: '100vh',
      450: '450px',
      650: '650px',
      850: '850px',
    },
    extend: {
      fontSize: {
        0: 0,
      },
      boxShadow: {
        white: '0px 10px 40px rgba(255, 255, 255, 0.4);',
      },
      spacing: {
        '1/3': '33.333333%',
        '2/3': '66.666666%',
      },
      scale: {
        '-1': '-1',
      },
      minHeight: {
        32: '8rem',
      },
    },
  },
  variants: {
    extend: {
      scale: ['direction'],
      ringColor: ['focus-visible'],
      ringOffsetColor: ['focus-visible'],
      ringOffsetWidth: ['focus-visible'],
      ringOpacity: ['focus-visible'],
      ringWidth: ['focus-visible'],
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
    require('tailwindcss-dir'),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.rtl': {
          direction: 'rtl',
        },
        '.ltr': {
          direction: 'ltr',
        },
        '.dir': {
          direction: 'inherit',
        },
      }

      addUtilities(newUtilities, {
        variants: ['responsive'],
      })
    }),
  ],
}
