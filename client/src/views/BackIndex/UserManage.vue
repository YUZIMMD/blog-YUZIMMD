<template>
<div>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item>
      <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
    </el-form-item>
  </el-form>
  <el-dialog title="新增用户" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="用户名" :label-width="formLabelWidth">
        <el-input v-model="form.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth">
        <el-input v-model="form.passWord" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitFun">确 定</el-button>
    </div>
  </el-dialog>
  <div class="study-plan">
        <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="用户名">
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="updateUser(scope)">编辑</el-button>
            <el-button type="text" size="small" @click="updateUser(scope)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'StudyPlan',
  data() {
    return {
      tableData: [],
      formInline: {
        user: '',
        region: ''
      },
      dialogFormVisible: false,
      form: {
        name: '',
        passWord:''
      },
      formLabelWidth: '120px'
    }
  },
  methods:{
    submitFun(){
      this.$http('get','/user/addUserAction',this.form).then(data=>{
        console.log(data);
      });
    },
    init(){
      this.$http('get','/user/queryUserAction').then(data=>{
        this.tableData = data.userlist;
      });
    }
  },
  mounted(){
    this.init();
  }
}
</script>
<style lang="less" scoped>
  
</style>
