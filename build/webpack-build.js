/**
 * gaojingwei 2019/09
 */
var path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const components = require('./components')
module.exports = {
  entry: components,
  output: {
    path: path.resolve(__dirname, './../lib'),
    filename: '[name]/index.js',
    libraryTarget: 'umd'
  },
  devtool: 'none',
  resolve: {
    alias: {
      SolarVue: path.resolve(__dirname, '../components')
    },
    extensions: ['.js', '.vue', 'jsx', 'ts', 'tsx']
  },
  mode: 'production',
  performance: {
    hints: false
  },
  externals: {
    'SolarVue/icon': 'SolarVue/icon',
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}
