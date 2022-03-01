module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        teal: '#6abdb0',
        navy: '#45516b',
        mustard: '#f7b95a',
        tomato: '#f0623d',
        'light-orange': '#ed9354',
        sand: '#f3f1c3',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  future: {
    purgeLayersByDefault: true,
  },
}
