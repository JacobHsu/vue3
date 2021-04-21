const sidebar = { 
  guide: [
    {
      title: '基础',
      collapsable: false,
      children: [
        '/guide/introduction'
      ]
    },
    {
      title: '工具',
      collapsable: false,
      children: [
        '/guide/single-file-component'
      ]
    }
  ],
  api: [
    '/api/application-config',
    {
      title: '响应性 API',
      path: '/api/reactivity-api',
      collapsable: false,
      children: [
        '/api/basic-reactivity',
        '/api/computed-watch-api'
      ]
    },
  ]
}

module.exports = {
    title: 'Hello VuePress',
    description: 'Vue Docs',
    locales: {
      '/': {
          lang: 'zh-CN',
          title: ' Vue.js',
          description: '用于构建用户界面的渐进式框架'
      },
      '/en': {
        lang: 'en-US',
        title: ' Vue.js',
        description: 'a progressive framework for building user interfaces'
      }
    },
    head: [
      ['link', { rel: 'icon', href: `/logo.png` }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
      ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: true,
    base: '/vue3/',
    themeConfig: {
      repo: 'JacobHsu/vue3',
      logo: '/assets/img/logo.png',
      locales: {
          '/': {
            selectText: '选择语言',
            label: '中文(简体)',
            editLinkText: 'Edit this page on GitHub',
            serviceWorker: {
              updatePopup: {
                message: "New content is available.",
                buttonText: "Refresh"
              }
            },
            nav: [
              { text: '教程', link: '/guide/introduction' },
              { text: 'API', link: '/api/' },
              {
                  text: '视频教程',
                  ariaLabel: '视频教程',
                  items: [
                    { text: 'DCloud 视频教程', link: 'https://learning.dcloud.io/#/' },
                    { text: 'Vue Mastery (英文)', link: 'https://www.vuemastery.com/courses/' },
                    { text: 'Vue School (英文)', link: 'https://vueschool.io/?friend=vuejs&utm_source=Vuejs.org&utm_medium=Link&utm_content=Navbar%20Dropdown' }
                  ]
              }
            ],
            sidebar: {
              '/guide/': sidebar.guide,
              '/api/': sidebar.api
            },
          },
          '/en': {
              selectText: 'Languages',
              label: 'English',
              editLinkText: 'Edit this page on GitHub',
              serviceWorker: {
                updatePopup: {
                  message: "New content is available.",
                  buttonText: "Refresh"
                }
              },
          }
      }
  }
}

