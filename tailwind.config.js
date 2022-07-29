/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '600': '37.5rem',
      },
      width: {
        '600': '47.5rem'
      },
      colors:{
        textColor: "#5D36FD",
        
      }
      
    },
  },
  plugins: [],
}