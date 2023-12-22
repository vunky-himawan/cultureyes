/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
        'poppins': 'Poppins', 
      },
      keyframes: {
        'bounce': {
          '0%': { transform: 'translateY(-3%)' },
          '50%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-3%)' },
        },
        'spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'bounce': 'bounce 2s linear infinite',
        'spin': 'spin 5s linear infinite',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(180deg, rgba(255,255,255,0) 10%, rgba(48,42,222,1) 50%)',
        'blue-gradient-2': 'linear-gradient(180deg, rgba(255,255,255,0) 10%, rgba(48,42,222,1) 50%)',
        'black-gradient': 'linear-gradient(180deg, rgba(255,255,255,0) 40%, rgba(10,10,10,1) 80%)',
        'white-gradient': 'linear-gradient(180deg, rgba(255,255,255,0) 30%, rgba(255,255,255,1) 58%)',
        'navy-gradient': 'linear-gradient(180deg, rgba(255,255,255,0) 30%, rgba(15,44,89,1) 58%)'
      },
    },
  },
  plugins: [],
}