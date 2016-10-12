var webpack = require('webpack');
var commons = require('../webpack.commons');

var entry = commons.entry;
var output = commons.output;
var loaders = commons.loaders;
var plugins = commons.plugins;
var resolver = commons.resolver;

var apiProtocol = process.env.API_PROTOCOL || 'https';
var apiHost = process.env.API_HOST;
var useDevTools = process.env.DEVTOOLS || false;

module.exports = {
  devtool: 'eval',
  entry: entry,
  output: output,
  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: JSON.stringify(true),
      __DEVTOOLS__: JSON.stringify(useDevTools),
      __PRODUCTION__: JSON.stringify(false),
      __TEST__: JSON.stringify(false),
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        API_PROTOCOL: JSON.stringify(apiProtocol),
        API_HOST: JSON.stringify(apiHost),
      },
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.bundle.js',
    }),
    plugins.hotReplace,
    plugins.noErrors,
    plugins.getHtmlGenerator(''),
  ],
  resolve: resolver,
  module: {
    loaders: [
      loaders.json,
      loaders.js,
      loaders.css,
      loaders.image,
      loaders.font,
    ],
  },
};
