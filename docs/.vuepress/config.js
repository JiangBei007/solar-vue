module.exports = {
	base: '/ui/',
	title: 'Rain-Misty',
	description: "I'm glad to see you.",
	configureWebpack: {
		resolve: {
			alias: {
				'@': 'src'
			}
		}
	},
	head: [
		['link', {
			rel: 'icon',
			href: '/logo.ico'
		}]
	],
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		nav: [{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Github',
				link: 'https://github.com/atJiangBei/ui/'
			},
			{
				text: '博客',
				link: 'https://jiangbei.online'
			},
		],
		displayAllHeaders: true,
		sidebar: [{
				title: '开发指南',
				collapsable: false,
				children: [
					'views/guide/introduce.md',
					'views/guide/started.md',
					'views/guide/commonjs.md'
				]
			},
			{
				title: '组件',
				collapsable: false,
				children: [
					'views/components/basic/',
					'views/components/form/',
					'views/components/popup/',
					'views/components/datadisplay/',
					'views/components/view/',
				]
			},
		]
	},
	globalUIComponents: [
	    'layout-simulator'
	],
	plugins: ['@vuepress/nprogress']
}
