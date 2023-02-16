/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'jokerman': ['jokerman', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        "rebbon-blue": "#89E3FF",
        midnight: "#1A222D",
        "dark-blue": "#0803FF",
        "tin-white": "#FAFFFE",
        green: "#00FF75",
        "chill-green": "#2BD4A4",
        yellow: "#FFEF89",
        peal: "#FFAC89",
        black: "#000",
        purple: "#B507F2",
        red: "#F10B0B",
      },
    },
  },
  plugins: [],
};
