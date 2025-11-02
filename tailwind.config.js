/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Pour Next.js 13+ App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Si tu as des pages classiques
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
