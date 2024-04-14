/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [function ({ addUtilities }) {
    const newUtilities = {
      '.video-no-controls': {
        'controls': 'none',
      },
    };
    addUtilities(newUtilities, ['responsive', 'hover']);
  },],
}

