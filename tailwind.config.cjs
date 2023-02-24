/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        "text-focus-in": "text-focus-in 1.9s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.5s both",
        "backanimado": "backanimado 30s ease infinite",
        "entrada-suave": "entrada-suave .6s cubic-bezier(0.680, -0.550, 0.365, 1.390)"
      }
      ,
      keyframes: {
        "text-focus-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "backanimado": {
          "0%": { "background-position": "99% 0%" },
          "50%": { "background-position": "2% 100%" },
          "100%": { "background-position": "99% 0%" }
        },
        "entrada-suave": {
          "0%": { transform: "translateY(200%)" },
          "100%": { transform: "translateY(0)" }
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
