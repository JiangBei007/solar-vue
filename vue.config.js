const path = require('path')
const fs = require("fs")

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	outputDir: 'dist',
	publicPath: './',
	  pages: {
	    index: {
	      entry: 'src/main.js',
	      template: 'src/index.html',
	      filename: 'index.html',
	      title: 'Index Page',
	      chunks: ['chunk-vendors', 'chunk-common', 'index']
	    }
	  },
	devServer: {
		port: 8000,
		proxy: {
			'/api': {
				target: '127.0.0.1:7798',
				ws: true,
				changeOrigin: true
			},
			'/loginStatus': {
				target: 'http://127.0.0.1:9000',
				ws: true,
				changeOrigin: true
			},
		},
		disableHostCheck: true
	},
	configureWebpack: {
		resolve: {
			extensions: ['.js', '.vue', '.json'],
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
				'@': resolve('src'),
				'--': resolve('src/modulars/index.js')
			}
		},
	},

}
