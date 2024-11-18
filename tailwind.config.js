/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7bb5ac', 
        white: '#ffffff',
        offWhite: '#f7f7f7',
        black: '#222',
        darkGrey: '#cfcfcf',
        lightPink: '#f5cac7'
      },
      boxShadow: {
        light: '2px 5px 3px 0px rgba(0, 0, 0, 0.5)', 
        dark: '4px 10px 5px 0px rgba(0, 0, 0, 0.5)', 
      },
    },
  },
  plugins: [],
};