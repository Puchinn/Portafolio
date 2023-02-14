/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        "text-focus-in": "text-focus-in 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        "tracking-in-contract": "tracking-in-contract 2.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.5s both",
        "backanimado": "backanimado 30s ease infinite",
        "wobble-hor-bottom": "wobble-hor-bottom 0.8s 1 2.8s both"
      }
      ,
      keyframes: {
        "text-focus-in": {
          "0%": { filter: "blur(9px)", opacity: "0" },
          "100%": { filter: "blur(0px)", opacity: "1" }
        },
        "tracking-in-contract": {
          "0%": {
            "letter-spacing": "1em",
            opacity: "0"
          },
          "40%": {
            opacity: "0.6"
          }
          ,
          "100%": {
            "letter-spacing": "normal",
            opacity: "1"
          }
        },
        "backanimado": {
          "0%": { "background-position": "99% 0%" },
          "50%": { "background-position": "2% 100%" },
          "100%": { "background-position": "99% 0%" }
        },
        "wobble-hor-bottom": {
          "0%": {},
          "100%": {
            transform: "translateX(0%)",
            "transform-origin": "50% 50%"
          },
          "15%": {
            transform: "translateX(-30px) rotate(-6deg)"
          },
          "30%": {
            transform: "translateX(15px) rotate(6deg)"
          },
          "45%": {
            transform: "translateX(-15px) rotate(-3.6deg)"
          },
          "60%": {
            transform: "translateX(9px) rotate(2.4deg)"
          },
          "75%": {
            transform: "translateX(-6px) rotate(-1.2deg)"
          }
        }

      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
