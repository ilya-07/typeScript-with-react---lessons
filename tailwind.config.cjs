/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#5CB85C",
        darkGreen: "#3d8b3d",
        gray: "#dbb",
      },
      fontSize: {
        data: "0.8rem",
      },
    },
  },
  plugins: [],
};
