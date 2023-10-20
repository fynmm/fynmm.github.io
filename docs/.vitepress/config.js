

module.exports = {
  base: '/',
  title: '无情酱油的博客',
  description: 'Just playing around.',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {

    search: false,
    searchMaxSuggestions: 10,
    footer: {
      message: 'MIT License',
      copyright: 'Copyright 2023 by HeartlessSoy.  <a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2023035767号-1</a> . <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010602007690" target="_blank">沪公网安备 31010602007690</a>'
    },
    // docFooter: {
    //   prev: false,
    //   next: false,
    // },
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/frontend/waterfall' },
      // { text: 'Contact', link: '/contact'},
      // { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        'text': '前端',
        items: [
          { text: '瀑布流-原生js实现', link: '/frontend/waterfall' },
          { text: '瀑布流-grid实现', link: '/frontend/waterfallByGrid' },
          { text: '前端柯里化', link: '/frontend/curry'},
        ]
      },
      {
        'text': '进阶',
        items: [
          { text: 'Source map', link: '/advanced/sourcemap' },
          
        ]
      },
      {
        'text': '部署',
        items: [
          { text: 'jenkins安装', link: '/deploy/jenkins' },
          { text: '自动化部署', link: '/deploy/auto' },
        ]
      },
    ],




    // carbonAds: {
    // code: 'CEBDT27Y',
    // placement: 'vuejsorg'
    // }
  }
}