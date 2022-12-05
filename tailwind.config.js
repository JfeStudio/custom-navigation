/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        // center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      addComponents({
        // ".bg-hover-brand": {
        //   backgroundColor: "#f3f4f6",
        //   "&:hover": {
        //     backgroundColor: "#e5e5e5",
        //   },
        // },
        ".bg-hover": {
          backgroundColor: "#1e293b",
          "&:hover": {
            backgroundColor: "#111",
          },
        },
        // ".bg-hover-darkside": {
        //   backgroundColor: "transparant",
        //   "&:hover": {
        //     backgroundColor: "#475569",
        //     opacity: ".3",
        //   },
        // },
      });
    }),
  ],
};
