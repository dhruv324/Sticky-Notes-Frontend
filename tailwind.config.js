/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      body : ["Nunito", "sans-serif"],
      abc : ["Lexend", "sans-serif"],
      def : ["Hammersmith One", "sans-serif"],
      money : ["Madimi One", "sans-serif"],
      uzi : ["Signika", "sans-serif"]
      },
  },
  
  plugins: [],
}

