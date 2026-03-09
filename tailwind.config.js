/** @type {import('tailwindcss').Config} */
const { colors } = require('./theme');

module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors,
      borderRadius: {
        DEFAULT: 'var(--sds-size-radius-400)',
      },
      borderWidth: {
        DEFAULT: 'var(--sds-size-stroke-border)',
      },
    },
  },
  plugins: [],
};
