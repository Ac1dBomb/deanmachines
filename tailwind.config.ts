/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/routes/**/*.{ts,tsx}",
    "./app/components/**/*.{ts,tsx}",
    "./app/styles/**/*.{css}",
    "./app/entry.client.tsx",
  ],
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
  prefix: '', // No prefix added
};