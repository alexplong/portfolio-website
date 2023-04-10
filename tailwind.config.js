/**
 * @format
 * @type {import('tailwindcss').Config}
 */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        "off-white": "#e6e6e6e6",
        "off-black": "#1d1d1d1d",
        "neon-blue": "#2272ff",
      },
    },
  },
  plugins: [],
};
