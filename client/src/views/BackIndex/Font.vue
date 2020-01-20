/** 前端 */
<template>
  <div class="font">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-button
          type="primary"
          class="addBtn"
          size="small"
          @click=";(dialogFormVisible = true), (title = '新增文章')"
          >新 增</el-button
        >
      </el-form-item>
      <el-form-item>
         <el-cascader class="selectBox" size="small" v-model="formInline.kinds" :options="treeData" :props="{ label: 'name',value:'name' }"></el-cascader>
      </el-form-item>
      <el-form-item>
        <el-input
          class="searchBox"
          v-model="input"
          placeholder="请输入关键字"
          size="small"
        ></el-input>
        <el-button type="primary" class="searchBtn" size="small"
          >搜 索</el-button
        >
      </el-form-item>
    </el-form>
    <el-dialog :title="title" width="800px" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input
            v-model="form.title"
            auto-complete="off"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item label="所属分类" :label-width="formLabelWidth">
            <el-cascader v-model="form.kinds" :options="treeData" :props="{ label: 'name',value:'name' }"></el-cascader>
        </el-form-item>
        <el-form-item label="文章标签" :label-width="formLabelWidth">
          <el-input
            v-model="form.tags"
            auto-complete="off"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item label="文章内容" :label-width="formLabelWidth">
          <div id="main">
            <mavon-editor v-model="form.content" />
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" size="small"
          >取 消</el-button
        >
        <el-button type="primary" @click="submitFun" size="small"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <div class="study-plan">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="文章标题"></el-table-column>
        <el-table-column label="所属大类">
          <template slot-scope="scope">{{ scope.row.kinds | kindsF }}</template>
        </el-table-column>
        <el-table-column label="文章标签">
          <template slot-scope="scope">
            <el-tag
              type="success"
              class="m-r-sm"
              v-for="(item, index) in scope.row.tags.split('，')"
              :key="index"
              >{{ item }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="上传时间"></el-table-column>
        <el-table-column
          prop="updateTime"
          label="最近修改时间"
        ></el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="updateUser(scope.row)"
              >编辑</el-button
            >
            <el-button type="text" size="small" @click="deleteUser(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'Font',
  data() {
    return {
      input: '',
      tableData: [],
      formInline: {
        user: '',
        kinds: []
      },
      dialogFormVisible: false,
      form: {
        title: '',
        kinds: [],
        tags: '',
        content: ''
      },
      formLabelWidth: '120px',
      title: '新增文章',
      treeData:[]
    }
  },
  filters:{
    kindsF(val){
      // return val.join().replace(/,/g, " <= ");
      return val.join();
    }
  },
  methods: {
    submitFun() {
      this.form.kinds = this.form.kinds.join(',')
      let url =
        this.title == '新增文章'
          ? '/font/addfontAction'
          : '/font/updatefontAction'
      this.$http('post', url, this.form).then(data => {
        if (data.code == 200) {
          this.dialogFormVisible = false
          this.init()
        }
      })
    },
    init() {
      this.$http('get', '/font/queryfontAction').then(data => {
        this.tableData = data.fontlist.map(item => {
          if (item.createTime) {
            item.createTime = dayjs(dayjs(item.createTime).valueOf()).format(
              'YYYY-MM-DD HH:mm:ss'
            )
            item.updateTime = dayjs(dayjs(item.updateTime).valueOf()).format(
              'YYYY-MM-DD HH:mm:ss'
            )
          }
          item.kinds = item.kinds.split(',')
          return item
        })
      })
    },
    updateUser(row) {
      this.form = row
      this.title = '修改用户'
      this.dialogFormVisible = true
      console.log(row)
    },
    deleteUser(row) {
      this.$http('get', '/font/deletefontAction?id=' + row.id).then(data => {
        if (data.code == 200) {
          this.init()
        }
      })
    },
    getTreeData() {
      this.$http('get', '/fontList/queryfontAction').then(res => {
        this.treeData = res.result[0].children
      })
    }
  },
  mounted() {
    this.init()
    this.getTreeData()
    console.log(dayjs)
  }
}
</script>
<style lang="less" scoped></style>
