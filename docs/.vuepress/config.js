module.exports = {
  base: '/solar-vue/',
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
        href: '/images/logo.ico'
      }
    ],
    [
      'script',
      {
        type: 'text/javascript',
        src: '/js/jwmeyy.js'
      }
    ],
    [
      'script',
      {
        type: 'text/javascript',
        src: '/js/qrcode.min.js'
      }
    ],
    [
      'script',
      {
        type: 'text/javascript',
        src: '/js/index.js'
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
        link: 'https://github.com/atJiangBei/solar-vue/'
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
        title: '基础组件',
        collapsable: false,
        children: [
          'views/basic/icon.md',
          'views/basic/loading.md',
          'views/basic/popup.md',
          'views/basic/stepper.md',
          'views/basic/tab.md'
        ]
      },
      {
        title: '反馈组件',
        collapsable: false,
        children: ['views/feedback/notify.md', 'views/feedback/toast.md']
      },
      {
        title: '表单组件',
        collapsable: false,
        children: [
          'views/form/button.md',
          'views/form/switch.md',
          'views/form/write.md',
          'views/form/form.md'
        ]
      },
      {
        title: '功能组件',
        collapsable: false,
        children: ['views/function/swiper.md']
      }
    ]
  },
  globalUIComponents: ['layout-simulator'],
  plugins: ['@vuepress/nprogress']
}
