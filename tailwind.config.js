/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#0fa87a',
        'green-bright': '#49d18e',
        blue: '#0083e9',
        'blue-bright': '#5b86e6',
        pink: '#f0a6a5',
        red: '#be0000',
        'red-bright': '#ef6373',
        red1: '#dc3545',
        deepBlue: '#1e5770',
        mediumBlue: '#3d6472',
        lightBlue: '#608fa1',
        extraLightBlue: '#5f8fa1',
        lightGray: '#f0f0f0',
        gray: '#495057',
        gray1: '#787878',
        gray2: '#b8b8b8',
      },
    },
  },
  plugins: [],
};
