<!-- App.vue 示例代码： -->
<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>student_id</th>
          <th>name</th>
          <th>subject</th>
          <th>grade</th>
          <th>sex</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in list" :key="index">
          <td>{{item.student_id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.subject}}</td>
          <td>{{item.grade}}</td>
          <td>{{item.sex}}</td>
        </tr>
      </tbody>
    </table>
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
    <button @click="getData2()">新增</button>
    <button @click="getData3()">修改</button>
    <button @click="getData4()">删除</button>
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
            this.list = res.data.studentlist;
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
              this.getData();
          })
          .catch(err=>{
              console.log(err)
          })
      },
      // 改
      getData4(){
        this.$axios.get('/students/deleteStudentAction',{params:{studentid:this.param.studentid}})
          .then(res=>{
              console.log(res)//返回请求的结果
              this.getData();
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
