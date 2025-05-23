/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-bg": "#02162b",
        "dark-navy": "#00283a",

        "primary-text": "#dedee0",
        "light-green": "#70ba65",

        "hero-overlay": "rgba(10, 15, 20, 0.4)",
        "muted-navy": "rgba(225, 225, 235, .15)",
        "prt-shadow": "0 2px 4px -2px rgba(0, 0, 0, .6)",
      },
      fontFamily: {
        sans: ["inter", "sans-serif"],
      },
      screens: {
        sm: "576px", // Custom small breakpoint
        md: "768px", // Custom medium breakpoint
        lg: "992px", // Custom large breakpoint
        xl: "1200px", // Custom extra-large breakpoint
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blinkIng: {
          "0%": { opacity: "1", transform: "translate(-50%, -50%) scale(0.9)" },
          "100%": {
            opacity: "0",
            transform: "translate(-50%, -50%) scale(1.3)",
          },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
        bounce: "bounce 2s infinite",
        blinkIng: "blinkIng 1.2s infinite",
      },
    },
  },
  plugins: [],
};
