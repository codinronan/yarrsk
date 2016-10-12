/* eslint no-console: 0 */
var nodeEnv = process.env.NODE_ENV || 'development';
var webpackConfigFile = './webpack/web/' + nodeEnv + '.config.js';
var port = process.env.PORT || 3000;

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require(webpackConfigFile);

new WebpackDevServer(webpack(config), {
  contentBase: './public',
  historyApiFallback: true,
  stats: {
    assets: true,
    chunks: true,
    chunkModules: false,
    colors: true,
  },
}).listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log(nodeEnv + ' environment loaded.');
  console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
