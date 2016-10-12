var webpack = require('webpack');
var commons = require('../webpack.commons');

var entry = commons.entry;
var cacheableOutput = commons.cacheableOutput;
var loaders = commons.loaders;
var plugins = commons.plugins;
var resolver = commons.resolver;

var apiProtocol = process.env.API_PROTOCOL;
var apiHost = process.env.API_HOST;

if (!apiProtocol || !apiHost)
{
  throw ('Please define the value for API_PROTOCOL (this will usually be "https") and API_HOST');
}

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: entry,
  output: cacheableOutput,
  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: JSON.stringify(false),
      __DEVTOOLS__: JSON.stringify(false),
      __PRODUCTION__: JSON.stringify(true),
      __TEST__: JSON.stringify(false),
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        API_PROTOCOL: JSON.stringify(apiProtocol),
        API_HOST: JSON.stringify(apiHost),
      },
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.bundle-[chunkhash].js',
    }),

    // optimizations
    plugins.noErrors,
    plugins.dedupe,
    plugins.ocurrenceOrder,
    plugins.uglify,
    plugins.manifestBuild,
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
