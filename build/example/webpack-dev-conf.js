'use strict'
process.env.NODE_ENV = 'development'
const path = require('path')
const resolve = url => path.resolve(__dirname, url)
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const baseWebpackConfig = require('./webpack-base-conf')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const merge = require('webpack-merge')
const config = require('./config')
module.exports = merge(baseWebpackConfig, {
  devServer: {
    port: config.port,
    quiet: true,
    host: '0.0.0.0',
    compress: true,
    overlay: true,
    proxy: config.proxy
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('../../src/index.html'),
      inject: true,
      chunks: ['app']
    }),
    new VueLoaderPlugin(),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [
          `You application is running here http://127.0.0.1:${config.port}`
        ],
        notes: [
          'Some additionnal notes to be displayed unpon successful compilation'
        ]
      },
      onErrors: function(severity, errors) {
        console.log(errors)
      },
      // should the console be cleared between each compilation?
      // default is true
      clearConsole: true,
      additionalFormatters: [],
      additionalTransformers: []
    })
  ]
})
