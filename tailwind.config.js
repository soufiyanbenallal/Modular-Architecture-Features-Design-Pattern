/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['serif'],
      },
      colors:{
        primary:{
          1: '#17181d',
          2: '#131318',
          3: '#101013',
        },
        secondary:{
          1: '#ffd9b0',
          2: '#f1bc83',
          3: '#8f6806',
        }
      }
    },
  },
  plugins: [],
}
