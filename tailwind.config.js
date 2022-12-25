/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        friendly:['var(--font-newscycle)', 'sans-serif'],
        copy:['var(--font-pragmatapro)', "Courier New", "monospace"],
        h1:["Futura-CondensedMedium", "AvenirNextCondensed-Medium", "HelveticaNeue-CondensedBold", "Ubuntu Condensed", "Liberation Sans Narrow", "Franklin Gothic Demi Cond", "Arial Narrow", "sans-serif-condensed", "Arial", "Trebuchet MS", "Lucida Grande", "Tahoma", "Verdana", "sans-serif"]
      },
      colors: {
        navy: '#01043E',
        whiteyellow: '#fffee8', // inverse navy
        black: '#000219',
        green: '#1B998B',
        orange: '#FC9E4F',
        lightgrey: '#F2F2F5',
        lightestgrey: '#F7F7F9',
      },
      keyframes: ({ theme }) => ({
        rerender: {
          '0%': {
            'border-color': theme('colors.vercel.pink'),
          },
          '40%': {
            'border-color': theme('colors.vercel.pink'),
          },
        },
        highlight: {
          '0%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
          '40%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)',
          },
        },
        fadeToTransparent: {
          '0%': {
            opacity: 1,
          },
          '40%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
      }),
    },
  },
};
