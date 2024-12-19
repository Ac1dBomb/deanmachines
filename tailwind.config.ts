/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/routes/**/*.{ts,tsx}",
    "./app/routes/about.tsx",
    "./app/routes/data.tsx",
    "./app/routes/requirements.tsx",
    "./app/routes/index.tsx",
    "./app/routes/updates.tsx",
    "./app/routes/form.tsx",
    "./app/routes/contact.tsx",
    './app/components/**/*.{ts,tsx}',
    "./app/routes/layout.tsx",
    "./app/root.tsx",
    "./app/styles/tailwind.css",
    "./app/styles/about.css",
    "./app/styles/data.css",
    "./app/styles/requirements.css",
    "./app/styles/index.css",
    "./app/styles/new_styles.css",
    "./app/styles/form.css",
    "./app/styles/layout.css",
    "./app/styles/updates.css",
    "./app/styles/contact.css",
    "./app/styles/entry.client.css",
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
