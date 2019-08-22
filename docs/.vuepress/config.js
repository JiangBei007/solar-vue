module.exports = {
    base:'/ui/',
    title: 'rain-misty-ui',
    description: "I'm glad to see you.",
		configureWebpack: {
			resolve: {
				alias: {
					'@': 'src'
				}
			}
		},
	markdown: {
		lineNumbers: true
	},
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Github', link: 'https://github.com/atJiangBei/ui/' },
				{ text: '博客', link: 'https://jiangbei.online' },
      ],
      sidebar: [
          {
              title: '开发指南',
              collapsable: true,
              children: [
                'views/guide/install.md',
                'views/guide/started.md'
              ]
            },
            {
              title: '组件',
              collapsable: true,
              children: [
                'views/components/basic/',
                'views/components/form/',
				'views/components/popup/',
				'views/components/datadisplay/',
				'views/components/view/',
              ]
            },
        ]
      }
  }