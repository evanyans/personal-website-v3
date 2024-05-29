/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      container: {
        center: true, // Optional: Centers the container
        padding: '2rem', // Optional: Adds padding around the container
        screens: {
          sm: '100%', // Change these values to adjust max-width
          md: '720px',
          lg: '720px',
          xl: '720px',
        },
      },
    },
  },
  plugins: [],
}
