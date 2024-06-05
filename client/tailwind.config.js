const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  plugins: [
    flowbite.plugin(),
  ],
}

