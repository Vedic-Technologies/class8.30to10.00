const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content(),],
  theme: {
    extend: {
      backgroundImage: {
        'calculator': "url('https://www.codewithfaraz.com/img/calculator.png')",
      }
    },
  },
  plugins: [flowbite.plugin(),],
}

