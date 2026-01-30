/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#231008', // Deep Brown Background
          beige: '#F5E8D8', // Cream Text
          tan: '#Cfbdae',   // Footer Background
        }
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'], // The sharp luxury font
        sans: ['Inter', 'sans-serif'],          // The clean body font
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }, // Smoother bobbing motion
        }
      }
    },
  },
  plugins: [],
}