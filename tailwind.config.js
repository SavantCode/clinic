// tailwind.config.js
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',  // Include the 'app' directory if using Next 13
    ],
    theme: {
      extend: {
        colors: {
          blue: '#1E3A8A',
          slate: '#475569',
        },
        fontFamily: {
          heading: ['Poppins', 'sans-serif'],
          body: ['Open Sans', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  