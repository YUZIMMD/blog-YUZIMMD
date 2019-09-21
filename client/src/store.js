import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // token:'',
    userInfo:{
      name:''
    }
  },
  mutations: {
    setUserInfo(state,data){
      state.userInfo=data;
      localStorage.setItem('name',data.name);
    },
    LOGOUT (state){
      state.userInfo = {};
      localStorage.clear('name');
    }
  },
  actions:{

  }
})
