/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Changa', 'sans-serif'],
        btn: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        primary: '#712af9',
        secondary: '#FA26CA',
        paragraph: '#beb8cc',
        white: '#ffffff',
        black: '#000000',
        bg: '#1a1135',
      },
      borderRadius: {
        DEFAULT: '5px',
      },
      transitionDuration: {
        '500': '0.5s',
      },
      fontSize: {
        '16': '16px',
      },
      boxShadow: {
        DEFAULT: '0 0 20px 3px rgba(0, 0, 0, .05)',
      },
    },
  },
  variants: {},
  plugins: [],
}

