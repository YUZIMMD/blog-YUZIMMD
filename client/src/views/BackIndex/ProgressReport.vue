/** 进度报表 */
<template>
  <div class="progress-report">
    <div class="manageList" @click="dialogFormVisible = !dialogFormVisible">
      管理清单
    </div>
    <el-dialog title="又有进度啦" :visible.sync="dialogFormVisible">
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
        class="dialogForm"
      >
        <el-form-item label="标题">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input
            type="textarea"
            rows="10"
            v-model="formLabelAlign.content"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" size="small"
          >取 消</el-button
        >
        <el-button type="primary" @click="addOne()" size="small"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-collapse class="collapse" v-model="activeNames" @change="handleChange">
      <el-collapse-item
        :title="item.createTime + ' ' + item.name"
        :name="index"
        v-for="(item, index) in list"
        :key="index"
      >
        <div>{{ item.content }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'ProgressReport',
  data() {
    return {
      activeNames: ['1', '2', '3', '4'],
      dialogFormVisible: false,
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        content: ''
      },
      list: []
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    },
    addOne() {
      this.$http('post', '/progress/addProgressAction', {
        name: this.formLabelAlign.name,
        content: this.formLabelAlign.content
      }).then(res => {
        if (res.code == 200) {
          this.dialogFormVisible = !this.dialogFormVisible
          this.getList()
        }
      })
    },
    getList() {
      this.$http('get', '/progress/queryProgressAction').then(res => {
        this.list = res.Progresslist.map(item => {
          item.createTime = dayjs(dayjs(item.createTime).valueOf()).format(
            'YYYY-MM-DD HH:mm:ss'
          )
          return item
        }).reverse()
      })
    }
  },
  mounted() {
    this.getList()
  }
}
</script>
<style lang="less" scoped>
.progress-report {
  background-color: #fff;
  padding: 30px;
}
.dialogForm {
  width: 80%;
  margin: 0 auto;
}
</style>
