/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ["Noto Serif", "ui-serif"],
      sans: ["Overpass", "ui-sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
