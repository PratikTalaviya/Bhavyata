/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
        "3xl": "2000px",
        "4xl": "2560px",
      },
      fontFamily: {
        rajdhani: ["Rajdhani", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
