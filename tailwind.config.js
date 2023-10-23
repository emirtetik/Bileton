/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'dark': 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;',
        'light':'rgba(255, 255, 255, 0.07) 0px 1px 2px, rgba(255, 255, 255, 0.07) 0px 2px 4px, rgba(255, 255, 255, 0.07) 0px 4px 8px, rgba(255, 255, 255, 0.07) 0px 8px 16px, rgba(255, 255, 255, 0.07) 0px 16px 32px, rgba(255, 255, 255, 0.07) 0px 32px 64px'
      }
    },
  },
  plugins: [],
}

