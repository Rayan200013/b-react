module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      fontSize: {
        "2xs": "0.625rem", // 10px
        "3xs": "0.5rem", // 8px
      },
      spacing: {
        80: "20rem",
        96: "24rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
