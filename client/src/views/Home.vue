<template>
  <div class="home">
    <div class="item1">
      <div>
        <div class="user-logo">
          <div class="user-logo-img"></div>
          <div>
            Designer-Dengyt
          </div>
        </div>
      </div>
      <div class="user-details">
          <div class="fadeInRight">
            <div>欢迎来到我的地盘</div>
            <div></div>
            <div>一个xxx但依然热爱生活但web前端码农</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import '../assets/css/animate-common.less'

export default {
  name: 'home',
  
}
</script>
<style lang="less" scoped>
  .home{
    background: url('../assets/image/bg.jpg');
    height: 100%;
    background-size: 100% 100%;
    color: #ffffff;
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
          background-color: rgba(0, 0, 0, 0.6);
          height: 100%;
          display: flex;
          // justify-content: center; /* 相对父元素水平居中 */
          align-items: center; /*  子元素相对父元素垂直居中 */
          >div{
            border: 1px solid #ccc;
            margin-left: 10%;
          }
      }
    }
  }
</style>
