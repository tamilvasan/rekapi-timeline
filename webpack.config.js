const commonConfig = require('./webpack.common.config');
const path = require('path');
const Webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { name, version } = require('./package.json');

const dist = 'dist';

module.exports = Object.assign(commonConfig, {
  entry: {
    'rekapi-timeline': './src/rekapi-timeline.js',
    tests: './test/index.js',
    demo: './demo/index.js'
  },
  output: {
    path: path.join(__dirname, `${dist}`),
    filename: '[name].js',
    library: 'rekapi-timeline',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new CleanWebpackPlugin([ dist ]),
    new Webpack.DefinePlugin({
      'process.env': {
         NODE_ENV: JSON.stringify('production')
       }
    }),
    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        dead_code: true,
        unused: true
      },
      output: {
        comments: false
      }
    }),
    new Webpack.BannerPlugin(version),
    new CopyWebpackPlugin([
      { from: 'index.html' }
    ])
  ]
});
