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
        'btn-disabled':'#888888'
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
      }
    },
  },
  plugins: [],
};
