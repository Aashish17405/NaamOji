/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradientX 15s ease infinite',
        'pulse-slow': 'pulseSlow 3s infinite',
        'spin-slow': 'spin 4s linear infinite',
      },
    },
  },
  plugins: [],
}

