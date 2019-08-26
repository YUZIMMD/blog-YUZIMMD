<template>
  <div class="home" id="home">
    <div class="item1">
      <div>
        <div class="user-logo">
          <div class="user-logo-img"></div>
          <div>
            Front-end developer-Dengyt
          </div>
        </div>
      </div>
      <div class="user-details">
        {{scrollActive}}
          <div :class="scrollActive>=0?'fadeInRight':''" v-if="scrollActive >=0">
            <div>stay hungry  stay foolish</div>
            <div class="hr"></div>
            <div class="size-1">一个时刻保持初学者心态，专注而简单的人</div>
            <!-- <div class="size-1">关于茶叶分类，茶叶分为绿茶，红茶，乌龙茶</div> -->
            <el-button class="btn-style-user-details" round @click="linkTo()">个人主页</el-button>
          </div>
      </div>
    </div>
    <div class="item2">
      <div class="item2-1">
        <div :class="scrollActive >600?'fadeInLeft':''" v-if="scrollActive>600">
          <div class="title">一些想法{{scrollActive}}</div>
          <div class="details">凡是你认真去学习，认真去做过的事情，都不会是徒劳的，时间会证明你学到的都会有用到的那天。遇到难的东西，只要学到新的东西就是进步，不过分思考结果，感受过程-来自心灵鸡汤欺骗法则</div>
        </div>
      </div>
      <div class="item2-2"></div>
    </div>
    <div class="item3">
      <div class="item3-1"></div>
      <div class="item3-2">
        <div :class="scrollActive >1600?'fadeInRight':''" v-if="scrollActive>1600">
          <div class="title">一个标题{{scrollActive}}</div>
          <div class="details">一个不知道放什么的模块，但是作为一个前端程序员，我有自己独特的审美（别问为什么，这里就是要放一块，和第二块对应🐶）</div>
        </div>
      </div>
    </div>
    <div class="item4">
      <div class="item4-1">
        <div :class="scrollActive >2600?'fadeInLeft':''" v-if="scrollActive>2600">
          <div class="title">技术栈{{scrollActive}}</div>
          <div class="details"><a class="link" target="_blank" href="https://www.runoob.com/w3cnote/webfrontendstack.html">前端技术图谱</a></div>
        </div>
      </div>
      <div class="item4-2">
       <el-row :gutter="4">
          <el-col :span="6" :class="scrollActive >2300?'fadeInDown':''" v-if="scrollActive>2300">
            <div class="grid-content">Web三剑客<div class="modal-content"><div>HTML (HyperText Markup Language)<br/>CSS (Cascading Style Sheets)<br/>JavaScript</div></div></div>
          </el-col>
        </el-row>
        <el-row :gutter="4">
          <el-col :span="6">
            <div class="opacity">1</div>
          </el-col>
           <el-col :span="6" :class="scrollActive >2300?'fadeInDown':''" v-if="scrollActive>2300">
            <div class="grid-content">库 / 框架<div class="modal-content"><div>基础库,模块化,框架,UI框架
</div></div></div>
          </el-col>
           <el-col :span="6" :class="scrollActive >2300?'fadeInRight':''" v-if="scrollActive>2300">
            <div class="grid-content">数据可视化<div class="modal-content"><div>D3 ,Echarts ,HighCharts ,Vis.js ,Flot </div></div></div>
          </el-col>
        </el-row>
        <el-row :gutter="4">
           <el-col :span="6" :class="scrollActive >2300?'fadeInLeft':''" v-if="scrollActive>2300">
            <div class="grid-content">流程控制<div class="modal-content"><div>ES6,ES7,async,Promise</div></div></div>
          </el-col>
          <el-col :span="6" :class="scrollActive >2300?'fadeInUpLeft':''" v-if="scrollActive>2300">
            <div class="grid-content">安全<div class="modal-content"><div>Sandbox,XSS,CORS</div></div></div>
          </el-col>
           <el-col :span="6">
            <div class="opacity">1</div>
          </el-col>
          <el-col :span="6" :class="scrollActive >2300?'fadeInRight':''" v-if="scrollActive>2300">
            <div class="grid-content">基础工具<div class="modal-content">Node.js,Phantom.js,SpiderMonkey</div></div>
          </el-col>
        </el-row>
        <el-row :gutter="4" class="rowStyle">
           <el-col :span="6">
            <div class="opacity">1</div>
          </el-col>
           <el-col :span="6">
            <div class="opacity">1</div>
          </el-col>
           <el-col :span="6" :class="scrollActive >2300?'fadeInUpLeft':''" v-if="scrollActive>2300">
            <div class="grid-content">编辑器<div class="modal-content"><div>Visual Studio Code,Sublime Text ,WebStorm,Vim</div></div></div>
          </el-col>
           <el-col :span="6" :class="scrollActive >2000?'fadeInUpLeft':''" v-if="scrollActive>2000">
            <div class="grid-content">质量控制<div class="modal-content">111</div></div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import '../assets/css/animate-common.less'

export default {
  name: 'home',
  data(){
      return{
        scrollActive:0,
        show:true
      }
  },
  methods:{
    // 监听原生滚动事件
    handleScroll: function () {
      let scrollTop = document.getElementById('home').scrollTop;
      this.scrollActive = scrollTop;
      console.log(scrollTop)
    },
    linkTo(){
      this.$router.push('/index')
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
  }
}
</script>
<style lang="less" scoped>
  .home{
    background: url('../assets/image/bg.jpg');
    height: 100%;
    background-size: 100% 100%;
    color: #ffffff;
    overflow-y: scroll;
    overflow-x: hidden;
    .item1{
      height: 100%;
      display: flex;
      >div{
        flex: 1;
        .user-logo{
          padding: 2%;
          display: flex;
          font-size: 1.3rem;
          line-height: 50px;
          .user-logo-img{
            width: 50px;
            height: 50px;
            background: url('../assets/image/logo.png');
            background-size: 100% 100%;
            border-radius:25px; 
            margin-right: 1rem;
          }
        }
      }
      .user-details{
          font-size: 1.4rem;
          background-color: rgba(0, 0, 0, 0.6);
          height: 100%;
          display: flex;
          letter-spacing: 2px;
          // justify-content: center; /* 相对父元素水平居中 */
          align-items: center; /*  子元素相对父元素垂直居中 */
          >div{
            margin-left: 8%;
            .hr{
              width: 8%;
              border-bottom:1px solid #ffffff; 
              margin: 20px 0 40px 0;
            }
            .size-1{
              font-size: 3.4rem;
              width: 80%;
            }
            .btn-style-user-details{
              margin-top: 2.5rem;
              background-color: #d24c63;
              color: #ffffff;
            }
          }
      }
    }
    .item2{
      display: flex;
      height: 70%;
      >div{
        flex: 1;
      }
      .item2-1{
          display: flex;
          letter-spacing: 2px;
          justify-content: center; /* 相对父元素水平居中 */
          // align-items: center; /*  子元素相对父元素垂直居中 */
          background-color: #1B1C21;
          padding-top: 6rem;
          >div{
            width: 70%;
            .title{
              font-size: 3rem;
            }
            .details{
              margin-top: 2rem;
              font-size: 0.8rem;
              color: #cccccc;
              line-height: 1.6rem;
            }
          }
      }
      .item2-2{
        background: url('../assets/image/item-1.jpg');
        background-size: 100% 100%;
      }
    }
    .item3{
      display: flex;
      height: 70%;
      >div{
        flex: 1;
      }
      .item3-1{
        background: url('../assets/image/item-3.jpg');
        background-size: 100% 100%;
      }
      .item3-2{
        display: flex;
          letter-spacing: 2px;
          justify-content: center; /* 相对父元素水平居中 */
          // align-items: center; /*  子元素相对父元素垂直居中 */
          background-color: #1B1C21;
          padding-top: 6rem;
          >div{
            width: 70%;
            .title{
              font-size: 3rem;
            }
            .details{
              margin-top: 2rem;
              font-size: 0.8rem;
              color: #cccccc;
              line-height: 1.6rem;
            }
          }
      }
    }
    .item4{
      display: flex;
      height: 70%;
      >div{
        flex: 1;
      }
      .item4-1{
          display: flex;
          letter-spacing: 2px;
          justify-content: center; /* 相对父元素水平居中 */
          // align-items: center; /*  子元素相对父元素垂直居中 */
          background-color: #1B1C21;
          padding-top: 6rem;
          >div{
            width: 70%;
            .title{
              font-size: 3rem;
            }
            .details{
              margin-top: 2rem;
              font-size: 1.5rem;
              color: #cccccc;
              line-height: 1.6rem;
              .link{
                color: #cccccc;
                text-decoration: none;
                cursor: pointer;
              }
            }
          }
      }
      .item4-2{
        background-color: rgba(0, 0, 0, 0.6);
        position: relative;
        .rowStyle{
          position: absolute;
          width: 100%;
          bottom: 0;

        }
        .opacity{
          opacity: 0;
        }
        .el-col-6{
          position: relative;
        }
        .grid-content{
            background-color: #2E2E34;
            height: 14rem;
            line-height: 14rem;
            text-align: center;
            margin-bottom: 0.3rem;
            font-size: 1.4rem;
            cursor: pointer;
        }
        .modal-content{
          display: none;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          position: absolute;
          text-align: center;
          line-height: 2rem;
          font-size: 1rem;
          font-weight: bold;
          >div{
            transform: translate(0, 50%);
          }
        }
        .grid-content:hover > .modal-content{
          display: block;
          animation-name: enlarge;//规定需要绑定到选择器的 keyframe 名称。。
          -webkit-animation-name: enlarge;
          animation-duration: 1.5s !important;//定完成动画所花费的时间，以秒或毫秒计。
          -webkit-animation-duration: 1.5s !important;
        }
      }
    }
  }
</style>
