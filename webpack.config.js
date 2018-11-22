const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, 'index.js'),
    example: path.resolve(__dirname, 'example/example.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.styl$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "stylus-loader"
      }]
    }]
  }
}