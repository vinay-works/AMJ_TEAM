/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      orange: '#F4511C',
      offWhite: '#f2f2f2',
      btnBg: '#f8f8f8',
      text: '#31303A',
      textLight: '#818181',
      textGray: '#b5b5b5',
    },
    fontFamily: {
      Tienne: ['Tienne', 'sans-serif'],
      SourceSans: ['Source Sans 3', 'sans-serif'],
    },
  },
  plugins: [],
};
