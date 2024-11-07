/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        orangeff: "#FF9900",
        orangef8: "#F85A47",
        gray31: "#31353B",
        grayda: "#DADADA",
      },
    },
  },
  plugins: [],
};
