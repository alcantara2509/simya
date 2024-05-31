/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        blue: { 100: "#08B1F4", 200: "#3C617A", 300: "#A8C3D5" },
      },
    },
  },
  plugins: [],
};
