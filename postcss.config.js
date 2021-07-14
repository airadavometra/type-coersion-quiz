module.exports = () => {
  return {
    parser: 'postcss-scss',
    plugins: [require('postcss-preset-env')(), require('autoprefixer')()],
  };
};
