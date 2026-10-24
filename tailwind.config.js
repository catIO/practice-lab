/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './privacy.html', './public/**/*.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        copper: {
          cream: '#DCAA89',
          light: '#D6794D',
          DEFAULT: '#C35627',
          dark: '#B84B1B',
          deep: '#A63E12',
        },
        aquamarine: {
          light: '#6BA7B0',
          DEFAULT: '#4C848D',
          deep: '#30525C',
          canvas: '#162d34',
        },
        pewter: '#BFB9B5',
      },
    },
  },
  plugins: [],
};
