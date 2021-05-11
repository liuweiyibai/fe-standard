module.exports = {
  title: '前端开发规范',
  lang: 'zh-cn',
  description: '收集前后端常见面试题，以及自己学习 vue、react 源码过程的笔记',
  themeConfig: {
    // repo: 'liuweiyibai/lwyb-interview',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: '上次更新时间',
    sidebarDepth: 0,
    sidebar: {
      '/': getGuideSidebar(),
    },
  },
};

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
      ],
    },
  ];
}
