/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  fontFamily: {
    sans: ["Inter", "sans-serif"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
