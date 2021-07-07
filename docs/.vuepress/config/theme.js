const path = require('path'); // 路径模块
const utilsRoot = path.join(__dirname, '..', 'utils');
const docsRoot = path.join(__dirname,'..', '..');
const readFile = require(utilsRoot + '/readFile');

const guide = readFile(docsRoot + '/guide');
const interview = readFile(docsRoot + '/interview');
const repository = readFile(docsRoot + '/repository');
const website = readFile(docsRoot + '/website');



const themeConfig = {
  editLinks: true,
  smoothScroll: true,
  lastUpdated: '最后更新时间',
  nav: [
      {
        text: '指南',
        link: '/guide/pages',
      },
      {
        text: '存储库',
        link: '/repository/pages',
      },
      {
        text: '网站',
        link: '/website/pages',
      },
      {
        text: '面试',
        link: '/interview/pages',
      }
      
  ],
  
  sidebar: {
    '/guide/': guide,
    '/interview/': interview,
    '/repository/': repository,
    '/website/': website,
  },
};

module.exports = themeConfig;
