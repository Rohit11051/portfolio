/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
      blink: "blink 1s step-end infinite",
    },
    keyframes: {
      blink: {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0 },
      },
    },
      colors: {
        surface: '#0b0014',      // navbar/footer
        background: '#000000',   // page bg
        neon: '#ff00cc',         // neon accents
      },
      fontFamily: {
  orbitron: ['Orbitron', 'sans-serif'],
  inter: ['Inter', 'sans-serif'],
  mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
       },
    },
  },
  plugins: [],
}