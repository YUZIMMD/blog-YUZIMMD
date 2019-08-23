<!-- App.vue 示例代码： -->
<template>
  <div>
    <div>
      <span>student_id</span>
      <input type="text" v-model="param.studentid"/>
    </div>
    <div>
      <span>name</span>
      <input type="text" v-model="param.name"/>
    </div>
    <div>
      <span>subject</span>
      <input type="text" v-model="param.subject"/>
    </div>
    <div>
      <span>grade</span>
      <input type="text" v-model="param.grade"/>
    </div>
    <div>
      <span>sex</span>
      <input type="text" v-model="param.sex"/>
    </div>
    <button @click="getData3()">保存</button>
  </div>
</template>

<script>
  // 组件中的逻辑代码
  export default {
    name: 'HelloWorld',
    data () {
      return {
        list:[],
        param:{
          studentid:'',
          name:'',
          subject:'',
          grade:'',
          sex:''
        }
      }
    },
    methods:{
      // 查
      getData(){
        this.$axios.get('/students/queryStudentAction')
          .then(res=>{
              console.log(res)//返回请求的结果
          })
          .catch(err=>{
              console.log(err)
          })
      },
      // 增
      getData2(){
        this.$axios.get('/students/addStudentAction',{params:this.param})
          .then(res=>{
              console.log(res)//返回请求的结果
          })
          .catch(err=>{
              console.log(err)
          })
      },
      // 改
      getData3(){
        this.$axios.post('/students/updateStudentAction',this.param)
          .then(res=>{
              console.log(res)//返回请求的结果
          })
          .catch(err=>{
              console.log(err)
          })
      },
    },
    mounted() {
     this.getData(); 
    }
  }
</script>

<style>
/* 组件样式 */
h1 {
  color: red;
}
</style>
