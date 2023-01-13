/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'darkslategray': '#555',
        'darkslategray-m':'#334',
      },
      fontFamily: {
        'poppins':"poppins"
      }
    },
  },
  plugins: [],
}