<template>
  <div class="home1" id="home1">
    <div class="item item1">

    </div>
    <div class="item item2">

    </div>
    <div class="item item3">

    </div>
    <div class="item item4">

    </div>
    <div class="item item5">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import '../assets/css/animate-common.less'

export default {
  name: 'home1',
  data(){
      return{
        show:true,
        scrollActive:[],
        scrollTop:0
      }
  },
  methods:{

  },
  mounted(){
  }
}
</script>
<style lang="less" scoped>
.home1{
  height: 100vh;
  .item1{
    background: url('../assets/image/3917_jgdb4quz.jpg');
  }
  .item2{
    background: url('../assets/image/3917_jgdb7nsr.jpg');
  }
  .item3{
    background: url('../assets/image/3917_jgddhqaf.jpg');
  }
  .item4{
    background: url('../assets/image/3917_jgddjme9.jpg');
  }
  .item5{
    background: url('../assets/image/3917_jgddkxej.jpg');
  }
  .item{
    width: 100vw;
    height: 100vh;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
  }
}
</style>
