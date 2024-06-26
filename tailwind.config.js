/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   "custom-font": ["Basier Circle", "sans-serif"],
      // },
      colors: {
        "custom-green": "#21B546",
        "custom-text-gray": "#4F5662",
        "custom-text-light-gray": "#5E718D",
      },
      screens: {
        // 772: "772px",
        // 924: "924px",
        // 913: "913px",
        // 937: "937px",
        // 938: "938px",
        // 939: "939px",
        1039: "1039px",
      },
    },
  },
  plugins: [],
};
