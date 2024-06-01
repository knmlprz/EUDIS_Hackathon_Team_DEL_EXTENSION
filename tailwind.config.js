/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Arial'],
        'main': ['Fira Sans']
      },
      colors: {
        neutrals: {
          black: "#030408",
          white: "#FFFFFF",
        },
        dark_blue: {
          800: "#000612",
          700: "#00091A",
          600: "#1A2231",
          500: "#333A48",
          400: "#4D535F",
          300: "#666B76",
          200: "#7F838C",
          100: "#999DA3",
        },
        blue: {
          700: "407495",
          600: "5482A0",
          500: "#6690AA",
          400: "#7A9EB5",
          300: "#8CACBF",
          200: "#9FB9C9",
          100: "#B3C7D5",
        },
        light_blue: {
          700: "#B0C5D2",
          600: "#B8CBD7",
          500: "#C0D1DB",
          400: "#C8D7E0",
          300: "#D0DCE4",
          200: "#D7E1E8",
          100: "#DFE8ED",
        },
        red: {
          700: "#840020",
          600: "#911A37",
          500: "#9C334D",
          400: "#A94D64",
          300: "#B56679",
          200: "#C17F8F",
          100: "#CE99A6",
        },
      },
    },
  },
  plugins: [],
};
