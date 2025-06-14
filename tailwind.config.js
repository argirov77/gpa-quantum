/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0a0f1e",
        "text-light": "#e0e0e0",
        "neon-cyan": "#00ffff",
        "neon-magenta": "#ff00ff",
        glass: "rgba(255,255,255,0.1)"
      },
      fontFamily: {
        orbitron: ["Orbitron","sans-serif"]
      },
      backdropBlur: {
        xs: "4px"
      },
      boxShadow: {
        neon: "0 0 8px rgba(0,255,255,0.7), 0 0 16px rgba(0,255,255,0.5)"
      }
    }
  },
  plugins: []
}
