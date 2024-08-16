/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        warmCoral: "#F89671",
      },
      boxShadow: {
        coral: "2px 4px 4px rgba(248, 150, 113, 0.2)",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
      },
      animation: {
        slideDown: "slideDown 0.8s ease-in-out forwards",
        slideUp: "slideUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
