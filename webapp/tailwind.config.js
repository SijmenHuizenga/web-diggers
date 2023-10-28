/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
theme: {

    fontFamily: {
      'dmserif': ['DM Serif Display', 'serif'],
      'playfair': ['Playfair Display', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
  },  plugins: [],
};
