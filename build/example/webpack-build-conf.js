'use strict'
process.env.NODE_ENV = 'production'
const path = require('path')
const resolve = url => path.resolve(__dirname, url)
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const baseWebpackConfig = require('./webpack-base-conf')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = merge(baseWebpackConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('../../src/index.html'),
      chunks: ['app'],
      inject: true,
      minify: false
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'css/[name].[hash].css',
      chunkFilename: '[id].css',
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        map: {
          // 不生成内联映射,这样配置就会生成一个source-map文件
          inline: false,
          // 向css文件添加source-map路径注释
          // 如果没有此项压缩后的css会去除source-map路径注释
          annotation: true
        }
      }
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    splitChunks: {}
  }
})
