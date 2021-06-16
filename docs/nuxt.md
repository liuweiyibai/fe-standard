# 联通落地页前端重构方案v1.0

此次重构主要包括：代码重构、依赖减少、服务端渲染。减少页面页面体积大小、加载速度优化，代码逻辑优化，公用组件抽象提炼等。

## 技术选型

[nuxt](https://zh.nuxtjs.org/docs/2.x/get-started/installation) + [vue](https://cn.vuejs.org/v2/guide/index.html) 开发，服务端和客户端同构渲染，可以减少白屏等待时间，提升页面 seo

## 项目结构

```
|-- .nuxt // Nuxt自动生成，临时的用于编辑的文件，build
|-- assets // 用于组织未编译的静态资源入LESS、SASS 或 JavaScript
|-- components // 用于自己编写的Vue组件，比如滚动组件，日历组件，分页组件
|-- layouts // 布局目录，用于组织应用的布局组件，不可更改。
|-- middleware // 用于存放中间件
|-- pages // 用于存放写的页面，我们主要的工作区域
|-- plugins // 用于存放JavaScript插件的地方
|-- static // 用于存放静态资源文件，比如图片
|-- store // 用于组织应用的Vuex 状态管理。
|-- .editorconfig // 开发工具格式配置
|-- .eslintrc.js // ESLint的配置文件，用于检查代码格式
|-- .gitignore // 配置git不上传的文件
|-- nuxt.config.json // 用于组织Nuxt.js应用的个性化配置，已覆盖默认配置
|-- package-lock.json // npm自动生成，用于帮助package的统一性设置的，yarn也有相同的操作
|-- package-lock.json // npm自动生成，用于帮助package的统一性设置的，yarn也有相同的操作
|-- package.json // npm包管理配置文件
```

## 优化方向

1. css 样式

   样式结构化、小图标采用 svg 或者字体图标减少 http 请求。

2. 页面搜索关键词增加，增加 seo 友好

3. 接口封装

   公共参数提炼到全局存放

4. 公共方法、组件

   包括定位、隐藏模块、渠道获取、classNameKey 全局、省市区选择组件

   ::: danger
   是否统一省市区选择为模板 21 那种的省市区选择组件
   :::

5. 协议页面

   所有协议相关页面要独立维护，静态页面存储在 oss 上，采用 iframe 动态引入

## 现存问题

1. 省市区选择组件
2. url 标准化，无 hash 模式
