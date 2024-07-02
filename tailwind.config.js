const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        inter :["Inter"],
        petitFormal : ["Petit Formal Script"],
        russoOne : ["Russo One"]
      },
      colors:{
        dark: "#0d1117",
        royalBlue: '#4169e1',
        darkBlue: "#0d1117",
      }
    },
    backgroundImage:{
      wrapperBg: "url('assets/images/wrapperBackground.svg')",
      wrapperDark: "url('assets/images/wrapperDark.svg')",
    },
    container:{
      screens:{
        sm: "640px",
        md: "767px",
        lg: "1140px",
        xl: "1440px",
        '2xl': "1800px",

      }
    },
    screens:{
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
});