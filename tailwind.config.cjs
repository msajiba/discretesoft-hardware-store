/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: [
      "light",
      'dark',
      {
        hardwareTheme: {
          primary: "#202447",
          secondary: "#FAB915",
        },
      },
     
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
