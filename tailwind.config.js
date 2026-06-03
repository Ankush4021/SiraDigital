/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111B22",
        charcoal: "#17242D",
        slateSoft: "#243540",
        cyanBrand: "#38D7F2",
        magentaBrand: "#E84BA4",
        violetBrand: "#6D50F5",
        emberBrand: "#FF8A4C",
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 48px rgba(56, 215, 242, 0.14)",
        soft: "0 24px 80px rgba(8, 16, 22, 0.24)",
      },
    },
  },
  plugins: [],
};
