module.exports = {
  title: 'Hello VuePress',
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
      text: '0.standard-ai-summary',
      collapsable: false,
      children: [['/0.standard-ai-summary', '/0.standard-ai-summary']],
    },
  ];
}
