/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        blueGradient: "linear-gradient(to bottom right, #4a86f7, #2448b1)",

      },
      colors: {
        pblue: "#4a86fc",
        secondary: "#B3BACE",
        title: "#35353D",
        body: "#6a7185",
        stroke: "#e9edf1",
        bg: "#f5f7fa",
        skyblue: "#57B6F0",
        red: "#D94841",
        orange: "#F2A84C",
        green: "#83BF6E",
        darkBg: "#363639",
        darkCard: "#2C2C2E",
      },
      boxShadow: {
        customLight: "0px 0px 15px -8px rgba(0, 0, 0, 0.3)",
        topBar: "0 1px 3px -1px rgba(0, 0, 0, 0.1), 0 2px 2px -1px rgba(0, 0, 0, 0.06)",
        navBar: "0 -1px 3px -1px rgba(0, 0, 0, 0.1), 0 -2px 2px -1px rgba(0, 0, 0, 0.06)",
        darkCustomLight: "0px 0px 15px -8px rgba(255, 255, 255, 0.3)",
        darkTopBar: "0 1px 3px -1px rgba(255, 255, 255, 0.1), 0 2px 2px -1px rgba(255, 255, 255, 0.06)",
        darkNavBar: "0 -1px 3px -1px rgba(255, 255, 255, 0.1), 0 -2px 2px -1px rgba(255, 255, 255, 0.06)",
      },
    },
  },
  plugins: [],
};
