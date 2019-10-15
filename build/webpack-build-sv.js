/**
 * gaojingwei 2019/09
 */
var path = require('path')
var webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')
module.exports = merge(baseWebpackConfig, {
  devtool: 'none',
  entry: {
    SolarVue: path.resolve(__dirname, './../components/index.js')
  },
  output: {
    path: path.resolve(__dirname, './../lib'),
    filename: '[name].js',
    library: 'SolarVue',
    libraryTarget: 'umd'
  }
})
