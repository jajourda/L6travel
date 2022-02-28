module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        viridian: '#458C85',
        pink: '#E0BAB3',
        tarawera: '#073647',
        darkGray: '#6d7b7e',
        lightGray: '#dedee0',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  future: {
    purgeLayersByDefault: true,
  },
}
