const path = require('path'); // 路径模块
const utilsRoot = path.join(__dirname, '..', 'utils');
const docsRoot = path.join(__dirname,'..', '..');
const readFile = require(utilsRoot + '/readFile');

const guide = readFile(docsRoot + '/guide');



const themeConfig = {
  editLinks: true,
  smoothScroll: true,
  lastUpdated: '最后更新时间',
  nav: [{
        text: 'guide',
        link: '/guide/pages',
      }
      
  ],
  
  sidebar: {
    '/guide/': guide,
  },
};

module.exports = themeConfig;
