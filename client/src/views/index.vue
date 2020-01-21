/** 首页 */
<template>
  <div class="index">
    <div class="content">
      <Header></Header>
      <div class="item1">
        <div class="left">
          <div class="logo"></div>
        </div>
        <div class="right">
          <div>WORK HARD,PLAY HARD</div>
          <div>
            一个历经沧桑，备受生活折磨，却依然相信代码可以拯救世界的程序员
          </div>
          <el-button class="btn-style-user-details" round @click="linkTo()"
            >进入后台</el-button
          >
        </div>
      </div>
      <!-- <div class="item2">
        <div class="tabs">
          <div class="active">全部</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>JAVASCRIPT</div>
          <div>框架</div>
          <div>打包构建工具</div>
          <div>其他</div>
        </div>
      </div>-->
      <div class="item3">
        <div class="item" @click="toDetails()">
          <!-- <div class="img" style="background:url('../assets/image/font.png')"></div> -->
          <img src="../assets/image/font.png" class="img" />
          <div class="title">前端清单列表</div>
          <div class="type">
            <span>前端知识清单，学习引导图</span>
          </div>
          <div class="footer-bar">
            <div>
              <i class="el-icon-view"></i>
              <span>213123</span>
              <i class="el-icon-star-off" style="margin-left:1rem"></i>
              <span>122</span>
            </div>
            <div class="time">最近更新于：2020-01-02</div>
          </div>
        </div>
        <div class="item" @click="toDetails()">
          <!-- <div class="img" :style="'background-color:'+ color[1]"></div> -->
          <img src="../assets/image/end.png" class="img" />
          <div class="title">后端清单列表</div>
          <div class="type">
            <span>一些前端的后台知识</span>
          </div>
          <div class="footer-bar">
            <div>
              <i class="el-icon-view"></i>
              <span>213123</span>
              <i class="el-icon-star-off" style="margin-left:1rem"></i>
              <span>122</span>
            </div>
            <div class="time">最近更新于：2020-01-02</div>
          </div>
        </div>
        <div class="item more" @click="toDetails()">
          <el-button class="btn-style-user-details" round @click="linkTo()"
            >正在开发中...</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/header'
import { rgb } from '../util/common'

export default {
  name: 'index',
  components: { Header },
  data() {
    return {
      color: [
        '#554183',
        '#9470D4',
        '#6F9CD0',
        'rgb(93, 124, 210)',
        'rgb(177, 179, 92)'
      ]
    }
  },
  methods: {
    rgb,
    toDetails() {
      this.$router.push({ path: '/fontList' })
    },
    linkTo() {
      this.$router.push("/login"); //$route和$router的区别,$router.push({path:'home'});本质是向history栈中添加一个路由，在我们看来是 切换路由，但本质是在添加一个history记录,route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象，可以获取对应的name,path,params,query等
    },
  }
}
</script>

<style lang="less" scoped>
.index {
  background-color: #252525;
  overflow-x: hidden;
  color: #ffffff;
  min-height: 100%;
  .content {
    width: 80%;
    margin: 0 auto;
    max-width: 1400px;
    .item1 {
      padding-top: 4rem;
      display: flex;
      .left {
        flex: 0.5;
        .logo {
          width: 200px;
          height: 200px;
          margin: 0 auto;
          border-radius: 100px;
          // border: 2px solid #332f30;
          box-shadow: 0px 0px 12px 6px rgba(99, 90, 90, 0.8);
          font-size: 4rem;
          font-weight: bold;
          line-height: 200px;
          text-align: center;
          background: url('../assets/image/logo.png');
          background-size: 100% 100%;
        }
      }
      .right {
        flex: 0.8;
        position: relative;
        > :nth-child(1) {
          font-size: 3rem;
          font-weight: bold;
          line-height: 100px;
        }
        > :nth-child(2) {
          width: 80%;
        }
        .btn-style-user-details {
          position: absolute;
          bottom: 1rem;
        }
      }
    }
    .item2 {
      margin-top: 6rem;
      .tabs {
        display: flex;
        width: 60%;
        margin: 0 auto;
        position: relative;
        left: -5%;
        > div {
          flex: 1;
          font-size: 1rem;
          text-align: center;
          cursor: pointer;
          line-height: 3rem;
        }
        .active {
          background-color: #d65268;
        }
        > div:hover {
          background-color: #793d47;
        }
      }
    }
    .item3 {
      margin-top: 5rem;
      margin-bottom: 5rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item {
        padding-bottom: 10px;
        margin-bottom: 2rem;
        width: 31%;
        height: 400px;
        background-color: #333131;
        .img {
          width: 100%;
          height: 74%;
          cursor: pointer;
          // background:url('../assets/image/font.png');
          background-size: 100% 100%;
        }
        .title {
          padding: 0 0.5rem;
          font-size: 1.4rem;
          font-weight: bold;
          margin-top: 1.5rem;
        }
        .type {
          padding: 0 0.5rem;
          margin-top: 0.8rem;
          font-size: 0.8rem;
          span {
            display: inline-block;
            background-color: #793d47;
            opacity: 0.8;
          }
        }
        .footer-bar {
          padding: 0 0.5rem;
          margin-top: 0.5rem;
          display: flex;
          > div {
            flex: 1;
            > i {
              margin-right: 0.3rem;
            }
          }
          .time {
            text-align: right;
            color: #ccc;
            font-size: 12px;
            position: relative;
            top: 6px;
          }
        }
      }
      .more {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #2f2c2d;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .index {
    .content {
      width: 100%;
      /deep/ .head {
        padding-top: 10px;
        padding-left: 5px;
        display: block;
        .user-name {
          font-size: 16px;
        }
      }
      .item1 {
        display: block;
        padding-top: 2rem;
        .right {
          font-size: 12px;
          text-align: center;
          > :nth-child(1) {
            font-size: 1.5rem;
            text-align: center;
            line-height: 50px;
            margin-top: 20px;
          }
          > :nth-child(2){
            width: 80%;
            margin: 0 auto;
          } 
          .btn-style-user-details{
            position: static;
            margin-top: 2rem;
          }
        }
      }
      .item3 {
        margin-top: 2rem;
        .item {
          width: 95%;
          border: 1px solid #4e3737;
          margin: 0 auto;
          margin-bottom: 2rem;
        }
      }
    }
  }
}
</style>
