/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      ReemKufiFun: ["ReemKufiFun-Bold"],
    },
    colors: {
      red: "#DD270F",
      redLight: "#F83811",
      Yellow: "#FCDF00",
      YellowBlack: "#FFA800",
      yellowNew: "#ECCA5C",
      basicWhite: "white",
    },
    extend: {
    },
  },
  plugins: [],
}

