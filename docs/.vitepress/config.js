const primarySidebar = [
  { text: '瀑布流', link: '/frontend/waterfall' },
  { text: 'js', link: '/frontend/js' }
]

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
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    docFooter: {
      prev: false,
      next: false,
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/frontend/waterfall' },
      // { text: 'Contact', link: '/contact'},
      // { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/frontend/': primarySidebar,
      // '/contact': primarySidebar,

    },




    // carbonAds: {
    // code: 'CEBDT27Y',
    // placement: 'vuejsorg'
    // }
  }
}


//  http://www.dtmao.cc/Html5/111900.html