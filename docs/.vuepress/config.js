const { config } = require('vuepress-theme-hope');

module.exports = config({
  title: '前端开发规范',
  description: '前端常见开发规范，技术架构指南',
  dest: 'dist/',
  head: [
    ['link', { rel: 'icon', href: 'logo.webp' }],
    ['link', { rel: 'stylesheet', href: '/css/style.css' }],
    ['script', { charset: 'utf-8', src: '/js/main.js' }],
  ],
  markdown: {
    lineNumbers: true,
  },
  locales: { '/': { lang: 'zh-CN' } },
  themeConfig: {
    repo: 'liuweiyibai/fe-standard',
    docsDir: 'docs',
    // logo: 'logo.webp',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑',
    lastUpdated: '上次更新时间',
    smoothScroll: true,
    sidebarDepth: 0,
    sidebar: {
      '/': getGuideSidebar(),
    },
    baseLang: 'zh-CN',
    author: 'liuweiyibai',
    darkmode: 'disable',
    themeColor: false,
    blog: false,
    pageInfo: false,
    mdEnhance: {
      enableAll: false,
    },
    comment: false,
    copyright: false,
    pwa: false,
    seo: false,
    sitemap: false,
    copyCode: false,
    photoSwipe: false,
    breadcrumb: false,
  },

  // plugins: ['one-click-copy']
});

function getGuideSidebar() {
  return [
    {
      collapsable: false,
      children: [
        ['/standard-css', '前端CSS规范'],
        ['/standard-git', '前端git使用规范'],
        ['/standard-js', '前端js规范'],
        ['/standard-vue', '前端vue规范'],
        ['/standard-vuetool', '前端开发工具链'],
        ['/standard-stylelint', 'styleint 简介'],
        ['/code200', 'http 请求统一处理'],
        ['/css-font', 'css 引入字体'],
        ['/vue-api-order', 'vue 组件选项顺序'],
        ['/vue-component', 'vue 组件风格设计'],
        ['/vue-project-structure', 'vue 项目目录结构'],
        ['/vue-router', 'vue 路由'],
        ['/clean-code-javascript', 'js 风格指南'],
        ['/nuxt', 'nuxt 技术方案'],
      ],
    },
  ];
}
