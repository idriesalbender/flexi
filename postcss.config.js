module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    'css-mqpacker': {},
    cssnano: {},
    pixrem: {
      atrules: true,
    },
  },
};
