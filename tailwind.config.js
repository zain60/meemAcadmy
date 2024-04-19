/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "className",
  theme: {
    extend: {
      fontFamily: {
        ReemKufiFun: ["ReemKufiFun-Bold"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)",
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5)2px, #1b1b1b 8px, #1b1b1b 100px)",
        circularLightMobile:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 30px)",
        circularDarkMobile:
          "repeating-radial-gradient(rgba(255,255,255,0.5)2px, #1b1b1b 8px, #1b1b1b 30px)",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      colors: {
        sky: colors.lightBlue,
        stone: colors.warmGray,
        neutral: colors.trueGray,
        gray: colors.coolGray,
        slate: colors.blueGray,
      },
    },
    colors: {
      red: "#DD270F",
      redLight: "#F83811",
      Yellow: "#FCDF00",
      YellowBlack: "#FFA800",
      yellowNew: "#ECCA5C",
      basicWhite: "white",

      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
    },
  },
  plugins: [],
};
