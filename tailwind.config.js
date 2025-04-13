module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#f9f4ef',
          primary: '#e8ddff',
          accent: '#37306B',
          muted: '#4a4a4a',
        },
      },
      fontFamily: {
        serif: ['DM Serif Display', 'serif'],
      },
    },
  },
  plugins: [],
};
