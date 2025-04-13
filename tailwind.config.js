module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        lavender: '#e8ddff',
        paleBeige: '#f9f4ef',
        softBlue: '#cfd8f9',
      },
      fontFamily: {
        serif: ['DM Serif Display', 'serif'],
      },
    },
  },
  plugins: [],
};
