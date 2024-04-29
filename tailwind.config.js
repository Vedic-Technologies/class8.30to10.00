const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content(),],
  theme: {
    extend: {
      backgroundImage: {
        'calculator': "url('https://www.codewithfaraz.com/img/calculator.png')",
      },
      boxShadow: {
        // Define your shadow variants here
        'vedic-shadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
       
      },
    },
  },
  plugins: [flowbite.plugin(),],
}

