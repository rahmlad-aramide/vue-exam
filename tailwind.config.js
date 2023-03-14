/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1e202a',
        'light': '#ffffff',
        'darkTop': '#1f212e',
        'lightTop': '#f5f7ff',
        'darkCard': '#252a41',
        'lightCard': '#f0f2fa',
        'darkText': '#8b97c6',
        'lightText': '#63687e',
    },
    fontFamily: {
      'Inter': ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}
}
