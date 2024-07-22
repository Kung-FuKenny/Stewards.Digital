/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#061b46', // Primary color
        secondary: '#a47855', // Secondary color
        background: '#f7f7f7', // Background color
      },
    },
    screens: {
      xs: '331px',
      sm: '480px',
      md: '768px',
      lg: '1124px',
      xl: '1440px',
    },
  },
  plugins: [],
};
