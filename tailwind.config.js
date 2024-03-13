/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        heading: "70px",
        paragraph: "18px",
        button: "18px",
        subheading: "18px",
        listItem: "20px",
      },
      fontWeight: {
        heading: 600,
        paragraph: 400,
        button: 700,
        subheading: 500,
        listItem: 600,
      },
      lineHeight: {
        heading: "70px",
        paragraph: "30px",
        button: "30px",
        subheading: "28px",
        listItem: "30px",
      },
      letterSpacing: {
        heading: "0em",
        paragraph: "0em",
        button: "0em",
        subheading: "0.07em",
        listItem: "0em",
      },
      textAlign: {
        heading: "left",
        paragraph: "left",
        button: "center",
        subheading: "left",
        listItem: "left",
      },
      colors: {
        purple: "#9321D5",
        blue: "#0437E8",
        heading1: "#19181B",
        h1dark: "#EFEFEF",
        paragraph: "#626262",
        paragraph2: "#040610",
        background: "#252528",
        background2: "#DDE1ED",
        background3: "#DDE1ED8A",
      },
      screens: {
        wide: "1400px",
        desktop: "1024px",
        tablet: "768px",
        mobile: "480px",
      },
    },
  },
  plugins: [],
};
