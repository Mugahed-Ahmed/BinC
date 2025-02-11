/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {

        colors: {
            primary: "#1D4ED8", // لون أساسي
            secondary: "#9333EA", // لون ثانوي
            accent: "#10B981", // لون تميز
          },


        animation: {
            spin: "spin 2s linear infinite",
            'spin-slow': 'spin 3s linear infinite', // أنيميشن دوران بطيء
            'fade-in': 'fadeIn 1s ease-out forwards', // أنيميشن ظهور
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: 0 },
              '100%': { opacity: 1 },
            },
            spin: {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" },
              },
          },
          
      },
    },
    plugins: [],
  };