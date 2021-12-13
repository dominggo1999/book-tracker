const colors = {
  primary: '#2A3960',
  blue: '#00CABE',
  blueHover: '#8de9e3',
  red: '#F78F9A',
  redHover: '#f7b7bd',
  white: '#FEFEFE',
  yellow: '#E7C050',
};

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        header: ['Playfair Display', 'serif'],
        content: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
