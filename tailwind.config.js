const themeVariants = require('tailwindcss-theme-variants').default;

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: 'var(--tw-brand-light)',
          primary: 'var(--tw-brand-primary)',
          accent: 'var(--tw-brand-accent)',
          muted: 'var(--tw-brand-muted)',
        },
      },
      fontFamily: {
        serif: ['DM Serif Display', 'serif'],
      },
    },
  }
};
