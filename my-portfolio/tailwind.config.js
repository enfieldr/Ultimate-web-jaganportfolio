module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Blue
        secondary: '#6B7280', // Gray
        accent: '#A855F7', // Purple
      },
      borderRadius: {
        'xl': '1rem',
      },
      boxShadow: {
        'md': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [],
};