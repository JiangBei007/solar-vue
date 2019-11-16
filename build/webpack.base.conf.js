/**
 * gaojingwei 2019/09
 */
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
module.exports = {
  devtool: 'none',
  resolve: {
    alias: {
      'solar-vue': path.resolve(__dirname, '../components')
    },
    extensions: ['.js', '.vue', 'jsx', 'ts', 'tsx']
  },
  mode: 'production',
  performance: {
    hints: false
  },
  externals: {
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
