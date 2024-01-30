/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.tsx",
    "./src/components/*.tsx",

  ],
  theme: {
    extend: {
      screens: {
        '3sm': '421px',
        '2wm': '1195px',
        '3wm': '800px',
        'small': '500px'
      },
    },
  },
  plugins: [],
}

