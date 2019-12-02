'use strict'
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const resolve = url => path.resolve(__dirname, url)
const NODE_ENV = process.env.NODE_ENV
const idDev = NODE_ENV === 'development'
const devtool = idDev ? 'source-map' : 'none'
const loader =
  NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'vue-style-loader'
module.exports = {
  mode: NODE_ENV,
  entry: {
    app: resolve('../../src/main.js')
  },
  output: {
    path: resolve('../../docs/.vuepress/public/mobile'),
    filename: 'js/[name].[hash].solarvue.js',
    publicPath: idDev ? '/' : './'
  },
  resolve: {
    alias: {
      '@': resolve('../../src'),
      'solar-vue': resolve('../../components')
    },
    extensions: ['.js', '.vue', 'jsx', 'ts', 'tsx']
  },
  devtool: devtool,
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.css/,
        use: [
          loader,
          //'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: idDev
            }
          }
        ]
      },
      {
        test: /\.less/,
        use: [
          loader,
          //'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: idDev
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('', 'img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('', 'media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 150000,
          name: path.posix.join('', 'fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
