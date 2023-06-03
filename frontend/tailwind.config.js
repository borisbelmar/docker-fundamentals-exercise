/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#19c87c',
          '50': '#edfcf3',
          '100': '#d3f8e1',
          '200': '#aaf0c9',
          '300': '#73e2ab',
          '400': '#3acd88',
          '500': '#19c87c',
          '600': '#0a9159',
          '700': '#08744a',
          '800': '#095c3c',
          '900': '#094b33',
          '950': '#042a1d'
        }
      }
    },
  },
  plugins: [],
}
