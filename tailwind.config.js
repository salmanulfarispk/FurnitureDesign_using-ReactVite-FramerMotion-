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
        dark: '#0d1117',
      }
    },
  },
  plugins: [],
});