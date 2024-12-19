/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/routes/**/*.{ts,tsx}"], 
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      screens: {
        'sm': '640px',
      },
    },
  },
  plugins: [],
  prefix: 'tw-', // Add this line
};
