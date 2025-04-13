module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#fdf6f0',     // light sand
          primary: '#f2e6da',   // warm beige
          accent: '#5b4a42',    // header/nav
          muted: '#7e6f68',     // body text
        },
      },
      fontFamily: {
        serif: ['DM Serif Display', 'serif'],
      },
    },
  },
  plugins: [],
};
