/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./App.{js,ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
    "./app/**/*.{js,ts,tsx}",
    "./global.css", // Include global.css
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit_400Regular'],
        'outfit-bold': ['Outfit_700Bold'],
      },
      spacing: {
        global: '16px'
      },
      colors: {
        // Light theme colors
        highlight: '#0EA5E9',
        light: {
          primary: '#F5F5F5', // Light gray
          secondary: '#FFFFFF', // White
        },
        // Dark theme colors
        dark: {
          primary: '#171717', // Black
          secondary: '#323232',
        },
      },
    },
  },
  plugins: [],
};