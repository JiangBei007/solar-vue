module.exports = {
  base: '/ui/',
  title: 'solar-vue',
  description: "I'm glad to see you.",
  configureWebpack: {
    resolve: {
      alias: {
        '@': 'src'
      }
    }
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.ico'
      }
    ],
    [
      'script',
      {
        type: 'text/javascript',
        src: '/js/jwmeyy.js'
      }
    ]
  ],
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    nav: [
      {
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
      }
    ],
    displayAllHeaders: true,
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: [
          'views/guide/introduce.md',
          'views/guide/install.md',
          'views/guide/start.md',
          'views/guide/theme.md',
          'views/guide/config.md'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          'views/components/basic/',
          'views/components/form/',
          'views/components/feedback/',
          'views/components/datadisplay/',
          'views/components/other/'
        ]
      }
    ]
  },
  globalUIComponents: ['layout-simulator'],
  plugins: ['@vuepress/nprogress']
}
