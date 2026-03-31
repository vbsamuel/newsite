module.exports = {
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#f6f0e6',
        sand: '#e7d8c9',
        forest: '#30442e',
        sky: '#6b8fbc',
        dusk: '#394152',
        ember: '#b57a4f',
        moss: '#788262',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        'paper-layer': 'linear-gradient(180deg, rgba(246,240,230,0.95) 0%, rgba(235,225,205,0.97) 100%)',
      },
      fontFamily: {
        serif: ['IBMPlexSerif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
