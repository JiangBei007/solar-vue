var path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var webpack = require('webpack')
const componentNames = ['button', 'input', 'icon']
const components = {}
componentNames.forEach(
  name =>
    (components[name] = path.join(
      __dirname,
      './../ceshi/' + name + '/index.js'
    ))
)
module.exports = {
  entry: components,
  output: {
    path: path.resolve(__dirname, './../lib'),
    filename: '[name]/index.js',
    library: 'sv',
    libraryTarget: 'umd'
  },
  devtool: '#eval-source-map',
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue']
  },
  mode: 'production',
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            env: {
              test: {
                plugins: ['istanbul']
              }
            }
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
