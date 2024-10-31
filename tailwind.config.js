/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#007CC3',
        'black': "#2B2D33",
        'gray': '#8B8B8B',
        'gray_4B': '#4B4B4B',
        'gray_CD': '#CDCDCD',
        'gray_F8': '#F8F8F8',
        'dark_blue': '#004166',
      },
      backgroundColor: {
        'blue': '#007CC3',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
