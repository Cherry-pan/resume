import eJm from './assets/timg.gif';
import dHome from './assets/d_home.svg';
import dSkills from './assets/d_skills.svg';
import dExp from './assets/d_exp.svg';
import dWorks from './assets/d_works.svg';
import dContact from './assets/d_contact.svg';
import sGithub from './assets/s_github.svg';
import sJS from './assets/s_js.svg';
import sWX from './assets/s_wx.svg';
import sQQ from './assets/s_qq.svg';
import eMail from './assets/e-mail.svg';
import wJm from './assets/yishoucang.png';
import wLs from './assets/w_ls.jpg';

export default {
    cn: {
        header: {
            langList: ['中', '英'],
            titleList: [{
                    svg: dHome,
                    title: '首页'
                },
                {
                    svg: dSkills,
                    title: '能力'
                },
                {
                    svg: dExp,
                    title: '经历&项目经验'
                },
                {
                    svg: dWorks,
                    title: '作品集'
                },
                {
                    svg: dContact,
                    title: '联系我'
                }
            ]
        },
        footer: ['Released under the MIT License', 'All Rights Reserved ', 'Copyright © 2017-2020 Cherry'],
        overview: {
            infoList: ['23岁', '大专', '南京', '离职'],
            quote: '成功需要成本，时间也是一种成本，对时间的珍惜就是对成本的节约。',
            desList: ['我叫谢盼，前端工程师', 'Cherry(南京)', '605992259@qq.com']
        },
        skill: {
            outCircleList: [{
                    bg: {
                        backgroundColor: 'rgba(121,100,102,0.8)'
                    },
                    name: 'bootstrap'
                },
                {
                    bg: {
                        backgroundColor: 'rgba(49,65,82,0.8)'
                    },
                    name: 'elementUi'
                },
                {
                    bg: {
                        backgroundColor: 'rgba(76,157,160,0.8)'
                    },
                    name: 'webpack'
                },
                {
                    bg: {
                        backgroundColor: 'rgba(66,66,66,0.8)'
                    },
                    name: '小程序'
                },
                {
                    bg: {
                        backgroundColor: 'rgba(193,131,106,0.8)'
                    },
                    name: 'ajax'
                },
                {
                    bg: {
                        backgroundColor: 'rgba(117,148,179,0.8)'
                    },
                    name: 'nodejs'
                },
                {
                    bg: {
                        backgroundColor: 'rgba(71,83,94,0.8)'
                    },
                    name: 'vue'
                },
                {
                    bg: {
                        backgroundColor: 'rgba(147,147,189,0.8)'
                    },
                    name: '公众号'
                }
            ],
            innerCircleList: [{
                    bg: {
                        backgroundColor: 'rgba(179,164,140,0.8)'
                    },
                    name: 'PS/AI'
                },
                {
                    bg: {
                        backgroundColor: 'rgba(207,184,178,0.8)'
                    },
                    name: 'git'
                },
                {
                    bg: {
                        backgroundColor: 'rgba(207,184,178,0.8)'
                    },
                    name: 'Echarts'
                }
            ],
            desList: [
                '熟练使用PS、AI等软件，能制作和绘画修改简单的图片、LOGO；',
                '熟练掌握HTML5、DIV+CSS布局，能够手写符合W3C标准的代码；',
                '熟悉微信小程序框架，熟练使用小程序开发软件开发微信小程序；',
                '熟练使用DIV+CSS布局，以及flex可伸缩布局，以及css预编译语言；',
                '熟练使用Ajax，Mock进行网络传输和自主开发软件，实现前后端分离；',
                '熟练掌握JavaScript、CSS3和HTML5，熟悉ES6语法；',
                '了解SQL语句，了解Mysql关系型数据库的使用以及了解Navicat；',
                '了解v-charts，v-echarts等系列图表框架进行数据可视化开发；',
                '熟悉sass语法，使用嵌套属性，以及sass与css的转换；',
                '掌握elementui和VUE进行组合开发，熟悉bootStrap、Swiper、LayUI等框架快速开发项目；',
                '熟悉node.js搭建简单后台，编写简单的后台代码以及简单sql语句,了解后台操作流程和内容；'
            ]
        },
        exp: {
            expList: [{
                    title: '南京涵韬科技有限公司',
                    time: '2020年3月~xxx年xx月',
                    post: 'web前端工程师',
                    img: {
                        backgroundImage: `url(${eJm})`
                    },
                    contentList: [
                        '负责web设计的前端开发工作',
                        '负责前后端分离Vue、H5、小程序开发等',
                        '持续优化前端界面的性能和用户体验等',
                        '与UI设计师沟通交互、视觉设计的相关问题，按团队要求，完成公司业务平台的代码的设计与开发，保质保量完成'
                    ]
                },
                {
                    title: '领客小智（小程序）',
                    time: '开发周期：3个月',
                    post: '技术栈：uniapp',
                    img: {
                        backgroundImage: `url(${eJm})`
                    },
                    contentList: [
                        '根据type类型，实现tab切换；',
                        '使用ocr技术实现身份证信息的识别以及上传',
                        '使用swiper插件实现轮播效果；',
                        'xxxxxx',
                        '实现详情页跳转；',
                        '负责首页，搜索页，详情页，购物车页等界面的布局及动态效'
                    ]
                },
                {
                    title: '江苏大剧院微信公众号(个人中心) ',
                    time: '开发周期：4个月',
                    post: '技术栈：vue.js，cookis.js，jQuery，mui前端框架，ajax技术',
                    img: {
                        backgroundImage: `url(${eJm})`
                    },
                    contentList: [
                        '微信支付',
                        'axios异步拉取数据；'
                    ]
                },
                {
                    title: '小霸王后台管理系统',
                    time: '开发周期：5个月',
                    post: '技术栈：element-UI组件库，vue，echarts',
                    img: {
                        backgroundImage: `url(${eJm})`
                    },
                    contentList: [
                        '使用echarts图表对数据进行统计展示；',
                        '系统监控模块管理模块：实现了增删查改等功能；',
                        '可以根据创建日期或相关描述实现模糊查询；',
                        '负责用Vue框架搭建整体页面的布局以及与后台数据交互的开发；',
                        '使用数据库保存注册账号信息，并且利用表信息判断登录是否成功；'
                    ]
                }
            ]
        },
        works: {
            worksList: [{
                    title: '领客小智 小程序',
                    des: '领客小智小程序是在微信小程序上的实现，包括任务大厅，我的任务、个人中心模块。',
                    mini: wJm
                },
                {
                    title: '江苏大剧院微信公众号(个人中心)',
                    des: '此项目是文创类的项目，个人中心页面有我的积分、我的钱包、会员权益等子页面。',
                    url: 'https://www.yongnuomall.com/'
                },
                {
                    title: '小霸王后台管理系统',
                    des: '针对小霸王的后台管理系统，包括系统管理、系统监控、运维管理、系统工具等的功能，测试，发布和后期维护工作等等，为客户实现后台管理。',
                    url: 'http://120.27.17.81:8008/login?redirect=%2Fdashboard'
                },

                {
                    title: '@Cherry/后台管理系统',
                    des: '这是一个使用vue3.0技术开发的一个简单后台管理系统，其中包括axios技术、elementUi前端框架等',
                    url: 'https://github.com/Cherry-pan/vue-admin'
                },
                {
                    title: '@Cherry/fullPage',
                    des: '一个简易的Fullpage框架，实现了上拉下拉，滑轮滚动，锚点直达的全屏翻页功能，目前仅服务于本简历项目，仍在不断优化更新，欢迎学习交流',
                    url: 'https://github.com/Cherry-pan/fullPage'
                }
            ],
            viewMore: '查看更多'
        },
        contact: {
            title: '联系我',
            desList1: ['灵感', '代码', '梦想', '未来'],
            desList2: ['注重效率，偏爱敏捷开发', '喜欢尝试，期待新鲜事物', '前端即兴趣，兴趣即未来', '行路有良友，便是捷径', '带上我吧，一起看到更大的世界'],
            download: '下载简历',
            fileList: [{
                    title: 'HTML版',
                    url: 'www.baidu.com'
                },
                {
                    title: 'PDF版',
                    url: 'www.baidu.com'
                }
            ],
            typeList: [{
                    icon: sGithub,
                    url: 'https://github.com/Cherry-pan'
                },
                {
                    icon: sJS,
                    url: 'https://www.jianshu.com/u/4d69c3d159ac'
                },
                {
                    icon: sWX,
                    url: ''
                },
                {
                    icon: sQQ,
                    url: ''
                },
                {
                    icon: eMail,
                    url: ''
                }
            ]
        }
    },
    en: {
        header: {
            langList: ['CN', 'EN'],
            titleList: [{
                    svg: dHome,
                    title: 'home'
                },
                {
                    svg: dSkills,
                    title: 'skills'
                },
                {
                    svg: dExp,
                    title: 'exp'
                },
                {
                    svg: dWorks,
                    title: 'works'
                },
                {
                    svg: dContact,
                    title: 'contact'
                }
            ]
        },
        footer: ['Released under the MIT License', 'All Rights Reserved ', 'Copyright © 2014-2020 Cherry xie'],
        overview: {
            infoList: ['24years', 'college', 'NanJing', 'on-job'],
            quote: 'Success needs cost, time is also a kind of cost, the treasure of time is to save cost.',
            desList: ['I am Pan Xie, FE engineer', 'Cherry(NanJing)', '605992259@qq.com']
        },
        skill: {
            outCircleList: [{
                    bg: {
                        backgroundColor: 'rgba(121,100,102,0.8)'
                    },
                    name: 'bootstrap'
                },
                {
                    bg: {
                        backgroundColor: 'rgba(49,65,82,0.8)'
                    },
                    name: 'elementUi'
                },
                {
                    bg: {
                        backgroundColor: 'rgba(76,157,160,0.8)'
                    },
                    name: 'webpack'
                },

                {
                    bg: {
                        backgroundColor: 'rgba(193,131,106,0.8)'
                    },
                    name: 'minipro'
                },
                {
                    bg: {
                        backgroundColor: 'rgba(117,148,179,0.8)'
                    },
                    name: 'ajax'
                },
                {
                    bg: {
                        backgroundColor: 'rgba(71,83,94,0.8)'
                    },
                    name: 'nodejs'
                },
                {
                    bg: {
                        backgroundColor: 'rgba(147,147,189,0.8)'
                    },
                    name: 'vue'
                },
                {
                    bg: {
                        backgroundColor: 'rgba(179,164,140,0.8)'
                    },
                    name: 'public'
                }
            ],
            innerCircleList: [{
                    bg: {
                        backgroundColor: 'rgba(171,209,220,0.8)'
                    },
                    name: 'PS/AI'
                },

                {
                    bg: {
                        backgroundColor: 'rgba(207,184,178,0.8)'
                    },
                    name: 'git'
                },
                {
                    bg: {
                        backgroundColor: 'rgba(207,184,178,0.8)'
                    },
                    name: 'Echarts'
                }
            ],
            desList: [
                'Proficient in PS, AI and other software, can make and paint simple pictures, LOGO modification',
                'Proficient in HTML5, DIV+CSS layout, able to write W3C standard code',
                'Familiar with WeChat applet framework, proficient in using applet development software to develop WeChat applet',
                'Proficient in DIV+CSS layout, flex scalable layout, and CSS pre-compiled language',
                'Skilled use of Ajax, Mock for network transmission and independent development of software, before and after the separation',
                'Proficient in JavaScript, CSS3 and HTML5, familiar with ES6 syntax',
                'Understand SQL statements, understand the use of Mysql relational databases, and understand Navicat',
                'Familiar with v-charts, v-echarts and other chart frameworks for data visualization development',
                'Familiar with sass syntax, use of nested properties, and sass and CSS conversion;',
                'Master the combination development of elementui and VUE, familiar with bootStrap, Swiper, LayUI and other framework rapid development projects',
            ]
        },
        exp: {
            expList: [{
                    title: 'Nanjing hantao technology co. LTD',
                    time: '2020.03-xxxx.xx',
                    post: 'FE engineer',
                    img: {
                        backgroundImage: `url(${eJm})`
                    },
                    contentList: [
                        'Responsible for the front-end development of web design',
                        'Responsible for front and rear end separation Vue, H5, mini program development, etc',
                        'Continue to optimize the front-end interface performance and user experience',
                        "Communicate with UI designers on issues related to interaction and visual design"
                    ]
                },
                {
                    title: 'Hongru villa (mini program)',
                    time: 'Dep cycle: 3 months',
                    post: 'Technology stack: vant weapp + wechat applet',
                    img: {
                        backgroundImage: `url(${eJm})`
                    },
                    contentList: [
                        'According to the type of goods, realize the tab switch; ',
                        ' realize the search of goods by searching keywords; ',
                        ' realize the rotation effect by using the swiper plug-in; ',
                        ' call the database, obtain the goods information, arrange by using the waterfall flow layout; ',
                        ' realize the details page jump; ',
                        'be responsible for the layout and dynamic effect of the home page, search page, details page, shopping cart page and other interfaces'
                    ]
                },
                {
                    title: 'Yong Nuo shopping mall',
                    time: 'Dep cycle: 4 months',
                    post: 'Technology stack: HTML5, CSS3, Vue (Vue, vuex, Vue cli, Vue router), webpack packaging tool, elementui framework, less style sheet.',
                    img: {
                        backgroundImage: `url(${eJm})`
                    },
                    contentList: [
                        'Use lazy loading technology to improve the user experience, reduce the loading of invalid resources, prevent too many concurrent resources from loading, and block the loading of JS;',
                        'axios asynchronously pulls data;'
                    ]
                },
                {
                    title: 'Small overlord management system',
                    time: 'Dep cycle: 5 months',
                    post: 'Technology stack: element UI component library, Vue, eckarts',
                    img: {
                        backgroundImage: `url(${eJm})`
                    },
                    contentList: [
                        'use echarts statistical data;',
                        'system monitoring module  management module: add, delete, check and modify functions;',
                        'fuzzy query based on the creation date or related description;',
                        'build the layout of the whole page with Vue framework and develop the interaction with background data;',
                        'use database to save the registered account information and use the table information to determine whether the login is successful;'
                    ]
                }
            ]
        },
        works: {
            worksList: [{
                    title: 'Hongru villa + applet',
                    des: 'Hongru villa + applet is implemented on wechat widget, including commodity browsing, commodity classification and shopping process, user center and other modules.',
                    mini: wJm
                },
                {
                    title: 'Yong Nuo shopping mall',
                    des: 'This project is a photography equipment shopping mall system project, including user center, members, commodities, orders, shopping carts, promotions and other modules, to help users to achieve no exit, enjoy shopping.',
                    url: 'https://www.yongnuomall.com/'
                },
                {
                    title: 'Small overlord management system',
                    des: "For the small overlord's background management system, including system management, system monitoring, operation and maintenance management, system tools and other functions, testing, publishing and later maintenance work, etc., to achieve background management for customers.",
                    url: 'http://120.27.17.81:8008/login?redirect=%2Fdashboard'
                },
                {
                    title: '@Maggie/MVVM',
                    des: 'A simple MVVM framework that implements the functions of data-binding and view-refresh. Currently, it only serves this resume project. It is still optimized and updated. Welcome to learn communication.',
                    url: 'https://github.com/Maggie-summer/mvvm-master'
                },
                {
                    title: '@Maggie/Fullpage',
                    des: 'A simple Fullpage framework that implements full-screen page-turning with pull-up, scrolling, and anchor-pointing. Currently only serves this resume project, it is still optimized and updated. Welcome to learn communication.',
                    url: 'https://github.com/Maggie-summer/fullpage-master/tree/feature-fullpage-1.1.0-2019.10.3'
                }
            ],
            viewMore: 'see more'
        },
        contact: {
            title: 'Contact Me',
            desList1: ['INSPIRATION', 'CODE', 'DREAM', 'FUTURE'],
            desList2: [
                'Focus on efficiency, preference for agile development',
                'Like to try, look forward to something new',
                'Front is interested, interest is the future',
                'Line road friends, is a shortcut',
                'With me, see the bigger world together'
            ],
            download: 'Download Resume',
            fileList: [{
                    title: 'HTML',
                    url: 'www.baidu.com'
                },
                {
                    title: 'PDF',
                    url: 'www.baidu.com'
                }
            ],
            typeList: [{
                    icon: sGithub,
                    url: 'https://www.jianshu.com/u/e310ef677439'
                },
                {
                    icon: sJS,
                    url: 'https://gitee.com/cmaggie/dashboard'
                },
                {
                    icon: sWX,
                    url: ''
                },
                {
                    icon: sQQ,
                    url: 'https://www.zhihu.com/people/maggie'
                },
                {
                    icon: eMail,
                    url: ''
                }
            ]
        }
    }
};