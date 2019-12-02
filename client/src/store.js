import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // token:'',
    userInfo: {
      name: ""
    },
    mapDataObj: {
      知识体系: {
        javaScript基础: {
          变量和类型: false,
          原型和原型链: false,
          作用域和闭包: false,
          执行机制: false,
          语法和API: false
        },
        HTML和css: {
          HTML: false,
          CSS: false,
          手写: false
        },
        框架和类库: {
          TypeScript: false,
          react: false,
          vue: false,
          多端开发: false,
          数据流管理: false,
          实用库: false,
          开发和调试: false
        },
        前端工程: {
          项目构建: false,
          nginx: false,
          开发提速: false,
          持续集成: false,
          版本控制: false
        },
        数据结构和算法: {
          javaScript编码能力: false,
          手动实现前端轮子: false,
          数据结构: false,
          算法: false
        },
        计算机基础: {
          编译原理: false,
          网络协议: false,
          设计模式: false
        },
        运行环境: {
          浏览器API: false,
          浏览器原理: false,
          Node: false
        },
        项目和业务: {
          后端技能: false,
          性能优化: false,
          前端安全: false,
          业务相关: false
        },
        学习提升: false,
        技术之外: false
      }
    },
    clientMenuList:[
      {
        '首页':{
          list:['前端'], // 子菜单
          sub:{} // 下拉菜单
        },
      }
    ],
    activeClientMenu:'' // 客户端选中的大菜单
  },
  mutations: {
    setUserInfo(state, data) {
      state.userInfo = data;
      localStorage.setItem("name", data.name);
    },
    LOGOUT(state) {
      state.userInfo = {};
      localStorage.clear("name");
    }
  },
  actions: {}
});
