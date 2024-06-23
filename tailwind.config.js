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
          md: '700px',
          lg: '700px',
          xl: '700px',
        },
      },
      scale: {
        '55': '0.55',
        '65': '0.65',
        '70': '0.7',
        '80': '0.80',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
