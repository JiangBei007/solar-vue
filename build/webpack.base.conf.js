/**
 * gaojingwei 2019/09
 */
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.vue']
  },
  mode: 'production',
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
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
        exclude: /node_modules/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}
