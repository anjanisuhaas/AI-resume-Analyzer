/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#A67C52',
        accent: '#D9C1A6',
        neutralbg: '#FBF7F3',
        card: '#FFF7F0',
        border: '#E6D8C9',
        text: '#5B4636'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
