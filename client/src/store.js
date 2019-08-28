import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // token:'',
    userInfo:{
      regionCode: "",
      regionName: "",
      roleId: [],
      userName: "",
    },
    loginInfo:{
      user:{
        deptId:''
      }
    },
    systemShowName:{}
  },
  getters: {
    user(state){
      return state.userInfo
    },
    token(state){
      return state.token
    }

  },
  mutations: {
    setUserInfo(state,data){
      state.userInfo=data.user;
      sessionStorage.setItem("user", JSON.stringify(data.user));
      sessionStorage.setItem("accessToken", data.tokenMap.accessToken);
    },
    setloginInfo(state,data){
      state.loginInfo = data;
    },
    setSystemShowName(state,data){
      state.systemShowName = data;
    },
    LOGOUT (state){
      sessionStorage.clear();
      state.userInfo = {};
      // state.token = null
    }
  },
  actions:{

  }
})
