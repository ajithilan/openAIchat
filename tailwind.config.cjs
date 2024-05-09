/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navgray: 'rgba(37, 37, 37, 1)',
        primepink: 'rgba(214,42,94,1)',
        detailgray: '#2b2929d3'
      }
    },
  },
  plugins: [],
}
