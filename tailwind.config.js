/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "fade-in-down": "fade-in-down 0.6s ease-in-out",
        "fade-in-up": "fade-in-up 0.6s ease-in-out"
      },
      keyframes: {
        "fade-in-down": {
          "0%": { "opacity": "0", "transform": "translateY(-40px)" },
          "100%": { "opacity": "1", "transform": "translateY(0)" }
        },
        "fade-in-up": {
          "0%": { "opacity": "0", "transform": "translateY(20px)" },
          "100%": { "opacity": "1", "transform": "translateY(0)" }
        }
      }
    },
  },
  plugins: [],
}
