/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        "text-focus-in": "text-focus-in 1.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.5s both",
        "backanimado": "backanimado 30s ease infinite"
      }
      ,
      keyframes: {
        "text-focus-in": {
          "0%": { filter: "blur(9px)", opacity: "0" },
          "100%": { filter: "blur(0px)", opacity: "1" }
        },
        "backanimado": {
          "0%": { "background-position": "99% 0%" },
          "50%": { "background-position": "2% 100%" },
          "100%": { "background-position": "99% 0%" }
        },
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
