/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      backgroundImage: theme => ({
        'background-image-1': "url('/src/assets/images/bg1.jpg')",
        'background-image-4': "url('/src/assets/images/bg4.jpg')",
        'background-image-7': "url('/src/assets/images/bg4.jpg')",

      }),
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
      fontWeight: {
        'thin': 300,
        'normal': 400,
        'bold': 700,
      },
      boxShadow:{
        'dark': 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;',

        'light':'rgba(255, 255, 255, 0.07) 0px 1px 2px, rgba(255, 255, 255, 0.07) 0px 2px 4px, rgba(255, 255, 255, 0.07) 0px 4px 8px, rgba(255, 255, 255, 0.07) 0px 8px 16px, rgba(255, 255, 255, 0.07) 0px 16px 32px, rgba(255, 255, 255, 0.07) 0px 32px 64px'
      },
   
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    colors: {
      'primary': '#123456',
      'secondary': '#789abc',
      'third': '#def012',
      'fourth': '#345678',
      'fifth': '#9abcdef'
    },
    fontSize: {
      'title': ['2.5rem', { sm: '2rem', md: '2.5rem', lg: '3rem', xl: '4rem', '2xl': '5rem' }],
      'subtitle': ['1.25rem', { sm: '1.5rem', md: '1.75rem', lg: '2rem', xl: '2.5rem', '2xl': '3rem' }],
      'text': ['1rem', { sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem' }],
    },
  }, 
  },
  plugins: [],
}

