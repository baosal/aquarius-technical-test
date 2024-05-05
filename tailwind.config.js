import theme from './src/theme/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: theme,
  plugins: [require('daisyui'),],
}