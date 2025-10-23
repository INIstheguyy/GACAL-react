/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color1': "#0B0D17",
        'color2': "#0D3191",
        'color3': "#2DAAA1"
      },
      fontFamily:{
        'heading1': ['Playfair Display', 'serif'],
        'heading2': ['Space Grotesk', 'sans-serif'],
        'heading3': ['Inter', 'sans-serif'],
        'body': ['Plus Jakarta Sans', 'sans-serif']
      },
      screens:{
        sm:'580px',
        md:'768px',
        lg:'1095px',
        xl:'1440px'
      }
    },
  },
  plugins: [],
}


