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
        'dark': '0 4px 6px 0 rgba(69, 69, 69, 0.7), 0 5px 15px rgba(69, 69, 69, 0.1); ',
        'light':'0px 4px 4px rgba(196, 204, 204, 0.25), 0px 4px 4px rgba(196, 204, 204, 0.22)'
      },
      dropShadow:{
        'text':'0 4px 6px 0 rgba(69, 69, 69, 0.7), 0 5px 15px rgba(69, 69, 69, 0.1);',
      },
   
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    colors: {
      'primary': '#FF6000',         //turuncu
      'secondary': '#FFA559',       //açık krem       
      'third': '#FFE6C7',           //krem
      'fourth': '#454545',           //gri 
      'fifth': '#C4CCCC'             // açık gri   
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

