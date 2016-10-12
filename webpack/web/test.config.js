var path = require('path');
var webpack = require('webpack');
var commons = require('../webpack.commons');

var loaders = commons.loaders;
var resolver = commons.resolver;

module.exports = {
  devtool: 'eval',
  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: JSON.stringify(false),
      __DEVTOOLS__: JSON.stringify(false),
      __PRODUCTION__: JSON.stringify(false),
      __TEST__: JSON.stringify(true),
      'process.env': {
        NODE_ENV: JSON.stringify('test'),
      },
    }),
  ],
  resolve: resolver,
  module: {
    loaders: [
      loaders.json,
      loaders.image,
      loaders.css,
      loaders.font,
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: [
          path.join(__dirname, '../', 'src'),
          path.join(__dirname, '../', 'tests'),
        ],
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel-istanbul'],
        include: [
          path.join(__dirname, '../', 'src'),
        ],
      },
    ],
  },
};
