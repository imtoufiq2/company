/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "custom-font": ["Basier Circle", "sans-serif"],
      },
      colors: {
        "custom-green": "#21B546",
        "custom-text-gray": "#4F5662",
        "custom-text-light-gray": "#5E718D",
      },
      screens: {
        777: "777px",
        780: "780px",
        913: "913px",
        927: "927px",
        990: "990px",
      },
    },
  },
  plugins: [],
};
