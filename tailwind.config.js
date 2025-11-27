/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // HTML entry point
    "./src/**/*.{js,ts,jsx,tsx}", // All JS/TS/JSX/TSX files in src
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors or leave as is
      },
      fontFamily: {
        
        sans: ['"Georgia"'],
      },
    },
  },
  plugins: [],
};

