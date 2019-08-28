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
      <div><button class="btn-style">进入后台</button></div>
  </div>
</template>

<script>
export default {

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
    }
}
</style>