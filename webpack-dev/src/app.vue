<!-- App.vue 示例代码： -->
<template>
  <div>
    <h1>VUE 单文件组件示例 -- App.vue</h1>
    <p>这是 {{msg}}</p>
  </div>
</template>

<script>
  // 组件中的逻辑代码
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      //调用外部接口
        getData(){
          // 调用一个外部的接口
            this.$axios.get('https://www.apiopen.top/journalismApi')
            .then(res=>{
                console.log(res)//返回请求的结果
            })
            .catch(err=>{
                console.log(err)
            })
        },
      //调用本地接口
      getData2(){
         this.$axios.get('/add')
            .then(res=>{
                console.log(res)//返回请求的结果
            })
            .catch(err=>{
                console.log(err)
            })
      }  
    },
    mounted() {
     this.getData(); 
     this.getData2();
    }
  }
</script>

<style>
/* 组件样式 */
h1 {
  color: red;
}
</style>
