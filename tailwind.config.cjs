/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        "entrada-suave": "entrada-suave 0.3s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
      },
      keyframes: {
        "entrada-suave": {
          "0%": {
            transform: "translateY(100px)"
          },
          "100%": {
            transform: "translateY(0)"
          }
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
