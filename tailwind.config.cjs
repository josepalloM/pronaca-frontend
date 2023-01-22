/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'orangebg': '#f97316',
      'orange': '#FCB040',
      'black': '#1F1F1F',
      'white': '#E7EDEA',
      'grey' : '#C4C4C4',
      'whitebg' : '#ffffff',
      'whiteshadow' : '#b0b0b0',
    },
  },
  plugins: [],
}
