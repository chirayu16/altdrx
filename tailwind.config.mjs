/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-gray': '#5D5D5D',
        'custom-orange': '#F37529',
        'custom-brown': '#9A6351',
        'dark-gray': '#121212',
        'light-gray':'#888888',
        'f7-gray':'#F7F7F7',
        'dark-blue':'#2F3192',
        'very-light-gray':'#D1D1D1',
        'form-gray':'#A1A1A1',
        'form-black':'#3D3D3D',

      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '40-px':'40px'
      },
      padding: {
        '22-px':'22px',
        '10-px':'10px',
        '5-px':'5px'
      },
      fontSize: {
        '54-px':'54px',
        '40-px':'40px',
        '28-px':'28px',
        '22-px':'22px',
        '10-px':'10px',


      }
    },
  },
  plugins: [],
};
