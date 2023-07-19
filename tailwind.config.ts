import type { Config } from "tailwindcss";
// import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        graphik: ["Graphik", "sans-serif"],
      },
      colors: {
        primary: "#4452FE",
        secondary: "#02E4C0",
        "primary-text": "#000000",
        "secondary-text": "#5C5C5C",
        "light-text": "#FFFFFF",
        "bg-dark": "#181818",
        "bg-light": "#FFFFFF",
      },
    },
  },
};
