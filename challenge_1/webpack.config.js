const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/app.jsx'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loaders: ['eslint-loader', 'babel-loader'],
        },
      },
    ],
  },
};
