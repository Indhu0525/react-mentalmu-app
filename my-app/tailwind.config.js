/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  './node_modules/flowbite/**/*.js',  // This ensures Flowbite classes are scanned
    './src/**/*.{html,js,jsx,ts,tsx}',  // Update with your project’s file types "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

