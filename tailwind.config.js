/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primaryColor: "#03a914",
      secondaryColor: "#1cb215",
      tertiaryColor: "#35baf6",
      quaternaryColor: "#4fc3f7",
      quinaryColor: "#68cbf8",
      senaryColor: "#81d4fa",
      septenaryColor: "#9adcfb",
      octonaryColor: "#b3e5fd",
      nonaryColor: "#cceeff",
      denaryColor: "#e6f7ff",
      // blue
      blue_primary: "#1d9bf0",
      // gray
      gray_primary: "#536471",
      // hover
      hover_primary: "#0f14191a",
      // window
      window_primary: "#ffffffd9",
      // border
      border_primary: "#eff3f4",
    },
    extend: {},
  },
  plugins: [],
};
