/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "mine-shaft": {
          50: "#F5F5F5",
          100: "#E8EAEB",
          200: "#CACCCF",
          300: "#A9ACB0",
          400: "#6D6F75",
          500: "#34353a",
          600: "#2B2D36",
          700: "#1D1F2B",
          800: "#131524",
          900: "#0A0C1A",
          950: "#050612",
        },

        silver: {
          50: "#FCFCFC",
          100: "#F7F7F7",
          200: "#F0F0F0",
          300: "#E6E6E6",
          400: "#CFD0D1",
          500: "#babbbc",
          600: "#98A1AB",
          700: "#68788C",
          800: "#425570",
          900: "#263754",
          950: "#101C36",
        },
        "ship-gray": {
          50: "#F5F5F5",
          100: "#EBECED",
          200: "#CDCFD1",
          300: "#ADAFB3",
          400: "#73757A",
          500: "#3d3e42",
          600: "#31333B",
          700: "#212430",
          800: "#161A29",
          900: "#0D0F1F",
          950: "#060714",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
