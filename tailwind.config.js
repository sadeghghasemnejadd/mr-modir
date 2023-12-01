/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        box: '0 0 5px 3px rgba(0,0,0,0.1)',
      },
      keyframes: {
        show: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        show: 'show 0.1s ease-in-out',
      },
    },
  },
  plugins: [],
};
