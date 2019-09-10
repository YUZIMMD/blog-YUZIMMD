<template>
  <div class="login">
    <div class="login-box">
      <div class="title">欢迎登录</div>
      <input type="text" v-model="ruleForm.name" auto-complete="off"/>
      <input type="password" v-model="ruleForm.pass" auto-complete="off"/>
      <div class="hr"></div>
      <el-button class="btn-style">登 录</el-button>
      <div class="notice">没有账户?注册？想都不要想，不可能的</div>
      <div class="bg-fill2"></div>
      <div class="bg-fill"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data(){
      return{
        ruleForm:{
          name:'',
          pass:''
        }
      }
  },
  methods:{
  }
}
</script>
<style lang="less" scoped>
  .login{
    height: 100%;
    background: url('../assets/image/timg.jpeg') no-repeat;
    background-size: 100% 100%;
    .login-box{
      box-shadow: 0 0 20px 4px #3c383742;
      position: relative;
      top: 20%;
      margin: 0 auto;
      width: 380px;
      background: -webkit-linear-gradient(left top,rgba(255,255,255,0.5),#fff);
      padding-bottom:10px; 
      .title{
        text-align: center;
        padding: 30px 20px;
        font-size: 16px;
        letter-spacing: 2px;
        font-weight: bold;
      }
      input{
        display: block;
        width: 65%;
        margin: 0 auto;
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid pink;
        border-radius:20px;
        outline: none;
      }
      .hr{
        border-top:1px solid #e2748c; 
      }
      input:focus {
          border: 2px solid pink;
      }
      input:-internal-autofill-selected {
        background-color: transparent!important; 
      }
      .btn-style{
        width: 40%;
        display: block;
        margin: 0 auto;
        color: #fff;
        background-color: #e2748c;
        border: none;
        margin-top: 20px;
      }
      .notice{
        margin-top: 8px;
        color: #7d6d6d;
        text-align: center;
        font-size: 12px;
      }
    }
    .bg-fill{
      position: absolute;
      width: 100%;
      height: 11px;
      bottom: -11px;
      background-color: #edefe491;
      width: 96%;
      left: 2%;
      z-index: 2;
    }
    .bg-fill2{
      position: absolute;
      height: 22px;
      bottom: -22px;
      background-color: #edefe47a;
      width: 90%;
      left: 5%;
    }
  }
</style>
