/**
 * gaojingwei 2019/09
 */
var path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const { externalsComponents, components } = require('./components')

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
      'solar-vue': path.resolve(__dirname, '../components')
    },
    extensions: ['.js', '.vue', 'jsx', 'ts', 'tsx']
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, './loaders')]
  },
  mode: 'production',
  performance: {
    hints: false
  },
  externals: {
    ...externalsComponents,
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    },
    'small-swiper': {
      root: 'small-swiper',
      commonjs: 'small-swiper',
      commonjs2: 'small-swiper',
      amd: 'small-swiper'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}
