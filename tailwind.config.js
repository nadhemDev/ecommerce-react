const defaultTheme = require('tailwindcss/defaultTheme'); // Import the defaultTheme

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'base': "Poppins, sans-serif",
        'krona': "'Krona One', sans serif",

      },
      colors: {
        dark: "#0C080B",
        green: "#1E3329",
        yellow: "#FFD470",
        'dark-gray': '#B8B8BB',
        'light-grey': "#ECECEC",
        light: "#FAFAFA",

      },
      // Extend or override default theme settings
      screens: {
        'xs': '360px', // Custom screen size
        ...defaultTheme.screens, // Include the default screens
      },
    },
  },
  plugins: [],
};
