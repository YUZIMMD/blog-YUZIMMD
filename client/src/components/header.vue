<template>
  <div class="head">
    <div class="user-name">Front-end developer-Dengyt</div>
    <div class="menu">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="transparent"
        text-color="#fff"
        active-text-color="#d65268"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <!-- <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu> -->
      </el-menu>
    </div>
    <div>
      <button class="btn-style" @click="jump()">进入后台</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "systemBasic",
  data() {
    return {
      // ['首页','','后端','服务器','语言','其他']
      activeIndex: "1",
      list: [
        // {
        //     title:'首页',
        //     active:true
        // },
        // {
        //     title:'前端',
        //     active:false
        // },
        // {
        //     title:'前端',
        //     active:false
        // }
      ]
    };
  },
  methods: {
    jump() {
      this.$router.push("/login"); //$route和$router的区别,$router.push({path:'home'});本质是向history栈中添加一个路由，在我们看来是 切换路由，但本质是在添加一个history记录,route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象，可以获取对应的name,path,params,query等
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
.head {
  display: flex;
  padding-top: 30px;
  .user-name {
    font-size: 1.5rem;
    margin-right: 30px;
  }
  .menu {
    flex: auto;
    position: relative;
    top: -8px;
    padding-left: 20px;
    > div {
      width: 80%;
      margin: 0 auto;
      display: flex;
      font-size: 1.2rem;
      color: #cccccc;
      letter-spacing: 2px;
      font-weight: bold;
      > div {
        padding: 0 2rem;
        cursor: pointer;
      }
      > div:hover {
        color: pink;
      }
    }
    /deep/ .el-menu.el-menu--horizontal {
      border: none;
      .el-menu-item,
      .el-submenu .el-submenu__title {
        padding: 0;
        margin: 0 15px;
        font-size: 16px;
        height: 50px;
        line-height: 50px;
      }
      .is-active {
        font-size: 17px;
      }
    }
  }
  .btn-style {
    border: 1px solid #d65268;
    background-color: transparent;
    color: #d65268;
    padding: 3px 10px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>