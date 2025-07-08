/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
  },
  darkMode: 'class',
  plugins: [
     require('@tailwindcss/forms'),
     require('@tailwindcss/typography'),
     require('@tailwindcss/aspect-ratio'),
  ],
};
