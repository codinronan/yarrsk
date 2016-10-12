var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    commons: [
      'babel-polyfill',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-logger',
      'redux-saga',
    ],
    main: './src/main.js',
  },
  cacheableOutput: {
    path: path.join(__dirname, '../', 'dist'),
    filename: '[name].bundle-[chunkhash].js',
  },
  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: '[name].bundle.js',
  },
  loaders: {
    json: {
      test: /\.json$/,
      loader: 'json',
    },
    js: {
      test: /\.jsx?$/,
      loader: 'babel',
      include: [
        path.join(__dirname, '../', 'src'),
        path.join(__dirname, '../', 'tests'),
      ],
    },
    css: {
      test: /\.css$/,
      loader: 'style!css',
    },
    image: {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192',
    },
    font: {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file-loader?name=[name].[ext]',
    },
  },
  plugins: {
    hotReplace: new webpack.HotModuleReplacementPlugin(),
    noErrors: new webpack.NoErrorsPlugin(),
    dedupe: new webpack.optimize.DedupePlugin(),
    ocurrenceOrder: new webpack.optimize.OccurenceOrderPlugin(),
    uglify: new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    getHtmlGenerator: function (baseHref)
    {
      return new HtmlWebpackPlugin({
        inject: false,
        title: 'Website',
        template: 'index.ejs',
        baseHref: baseHref,
        chunks: [
          'commons',
          'main',
        ],
      });
    },
  },
  resolver: {
    extensions: ['', '.js'],
  },
};
