/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*',
    './-dark-mode/prefers-dark.js',
  ],
  darkMode: 'class',
  prefix: 'tw-',
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
