/** @type {import('tailwindcss').Config} */
// import { defaultTheme } from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          30: "#e9e6ec",
          40: "#bcb3c6",
          50: "#8f81a1",
          100: "#78688e",
          200: "#624f7b",
          300: "#4b3568",
          400: "#351c55",
          500: "#1e0342",
          600: "#1b033b",
          700: "#180235",
          800: "#15022e",
          900: "#120228",
        },
        secondary: {
          40: "#e7edf6",
          50: "#cfdaed",
          100: "#9fb5da",
          200: "#6e90c8",
          300: "#3e6bb5",
          400: "#2659ac",
          500: "#0e46a3",
          600: "#0b3882",
          700: "#082a62",
          800: "#061c41",
          900: "#030e21",
        },
        tertiary: {
          50: "#f5fafa",
          100: "#e1eff0",
          200: "#d7e9eb",
          300: "#c2dee1",
          400: "#aed3d7",
          500: "#9ac8cd",
          600: "#7ba0a4",
          700: "#6c8c90",
          800: "#4d6467",
          900: "#3e5052",
          950: "#1f2829",
        },
      },
    },
  },
  plugins: [],
};
