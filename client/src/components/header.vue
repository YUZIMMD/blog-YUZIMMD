<template>
  <div class="head">
      <div class="user-name">Front-end developer-Dengyt</div>
      <div class="menu">
          <div>
            <div>首页</div>
            <div>前端</div>
            <div>后端</div>
            <div>服务器</div>
            <div>语言</div>
            <div>其他</div>
          </div>
      </div>
      <div><button class="btn-style" @click="jump()">进入后台</button></div>
  </div>
</template>

<script>
export default {
    name:'systemBasic',
    methods:{
        jump(){
            this.$router.push('/basic/BackIndex');//$route和$router的区别,$router.push({path:'home'});本质是向history栈中添加一个路由，在我们看来是 切换路由，但本质是在添加一个history记录,route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象，可以获取对应的name,path,params,query等
        }
    }
}
</script>

<style lang="less" scoped>
.head{
    display: flex;
    padding-top: 30px;
    .user-name{
        font-size: 1.5rem;
        margin-right: 30px;
    }
    .menu{
        flex: auto;
        >div{
            width: 80%;
            margin: 0 auto;
            display: flex;
            font-size: 1.2rem;
            color: #cccccc;
            letter-spacing: 2px;
            font-weight: bold;
            >div{
                padding: 0 2rem;
                cursor: pointer;
            }
            >div:hover{
                color: pink;
            }
        }
    }
    .btn-style{
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