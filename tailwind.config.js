/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {

    extend: {
      colors:{
        CC1:"#f6784c",
        CC2:"#fca5a5",
        CC3:"#eaaa01",
        CC4:"#84bd01",
        CC5:"#fda4af"

      }
    },
  },
  plugins: [],
}

