/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/routes/**/*.{ts,tsx}",
            "./app/routes/about.tsx",
            "./app/routes/data.tsx",
            "./app/routes/requirements.tsx",
            "./app/routes/index.tsx",
            "./app/routes/updates.tsx",
            "./app/routes/navbar.tsx",
            "./app/root.tsx",
            "./app/styles/tailwind.css",
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
  prefix: 'tw-', // Add this line
};
