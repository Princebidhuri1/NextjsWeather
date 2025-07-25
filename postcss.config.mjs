// tailwind.config.js

/** @type {import('tailwindcss').Config} */
const config = {
 
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'xxl': { min: '1750px' },
        'xl-max': { max: '1749px' },
        'mobile': { min: '0px', max: '376px' },
        'tablet': { min: '377px', max: '768px' },
      },
    },
  },
  plugins: [],
};

export default config;
