/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#7DBAB9'
      }
    },
    fontFamily: {
      primary: ["Poppins","sans-serif"],
      secondary: ["PT Serif","serif"],
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

