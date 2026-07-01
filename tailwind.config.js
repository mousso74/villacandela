/** Villa Candela — Tailwind Build-Config (entspricht der bisherigen Play-CDN-Config)
 *  Build:  ./tailwindcss -c tailwind.config.js -i tailwind.input.css -o assets/css/app.css --minify
 */
module.exports = {
  content: ["./index.html", "./impressum.html", "./datenschutz.html"],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6EE', sand: '#EADFCB', stone: '#D8C7AC',
        ink: '#2B2622', inksoft: '#5A5048',
        amber: '#C8912F', amberlt: '#E7C36B', ember: '#B5673B', sage: '#6E7257'
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  // Falls nach dem Build ein per JS erzeugter Stil fehlt, hier ergänzen:
  safelist: []
};
