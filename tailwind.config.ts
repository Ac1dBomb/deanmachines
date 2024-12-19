/** @type {import('tailwindcss').Config} */
export default {
    content: ["./app/routes/**/*.{ts,tsx}"], // Include all .ts and .tsx files under app/routes

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
};
