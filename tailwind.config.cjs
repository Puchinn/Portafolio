/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        "entrada-suave": "entrada-suave .6s cubic-bezier(0.880, -0.550, 0.365, 1.390)"
      }
      ,
      keyframes: {
        "entrada-suave": {
          "0%": { transform: "translateY(300%)" },
          "100%": { transform: "translateY(0)" }
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
