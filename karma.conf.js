var webpackConfig = require('./webpack/web/test.config');

var isDevelopment = process.env.NODE_ENV === 'DEV_TEST';
var isCI = process.env.TRAVIS;

var singleRun = !isDevelopment;
var autoWatch = isDevelopment;

var browsers = (isDevelopment && ['Chrome']) ||
  (isCI && ['Chrome_travis_ci', 'Firefox']) ||
  ['Chrome', 'Firefox'];

module.exports = function (config)
{
  config.set({
    browsers: browsers,
    autoWatch: autoWatch,
    singleRun: singleRun,
    frameworks: ['mocha'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      './tests/index.js',
    ],
    preprocessors: {
      './tests/index.js': ['webpack', 'sourcemap'],
      './src/main.js': ['webpack'],
    },
    reporters: ['dots', 'coverage'],
    coverageReporter: {
      check: {
        global: {
          statements: 99,
          branches: 90,
          functions: 90,
          lines: 99,
        },
      },
      dir: 'coverage/',
      subdir: function (browserName)
      {
        if (isCI)
        {
          return 'ci';
        }
        return browserName;
      },
      reporters: [
        { type: 'html' },
        { type: 'lcovonly', file: 'lcov.info' },
        { type: 'text' },
      ],
    },
    webpack: webpackConfig,
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox'],
      },
    },
    webpackServer: {
      noInfo: true,
      stats: { colors: true },
    },
  });
};
