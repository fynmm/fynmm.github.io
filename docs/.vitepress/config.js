const primarySidebar = [
  { text: 'Our Story', link: '/about/our-story' }
]

module.exports = {
  base: '/frontend',
  title: '无情酱油的博客',
  description: 'Just playing around.',
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
    search: {

    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Contact', link: '/contact'},
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/about/': primarySidebar,
      '/contact': primarySidebar,

  }


    // carbonAds: {
      // code: 'CEBDT27Y',
      // placement: 'vuejsorg'
    // }
  }
}


//  http://www.dtmao.cc/Html5/111900.html