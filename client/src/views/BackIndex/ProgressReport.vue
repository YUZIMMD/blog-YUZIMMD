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
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input
            type="textarea"
            rows="10"
            v-model="formLabelAlign.type"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" size="small"
          >取 消</el-button
        >
        <el-button type="primary" size="small"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-collapse class="collapse" v-model="activeNames" @change="handleChange">
      <el-collapse-item title="2019-10-20" name="1">
        <div>
          与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
        </div>
        <div>
          在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
        </div>
      </el-collapse-item>
      <el-collapse-item title="2019-10-15" name="2">
        <div>
          控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
        </div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="2019-10-10" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>
          清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
        </div>
        <div>
          帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
        </div>
      </el-collapse-item>
      <el-collapse-item title="2019-10-02" name="4">
        <div>
          用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
        </div>
        <div>
          结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
        </div>
      </el-collapse-item>
      <el-collapse-item title="2019-10-01" name="5">
        <div>
          用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
        </div>
        <div>
          结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
        </div>
      </el-collapse-item>
      <el-collapse-item title="2019-11-1 进度开始的第一天" name="6">
        <div>进度开始的第一天</div>
        <div>想要把前端学好，学透，想要精通这一行</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'ProgressReport',
  data() {
    return {
      activeNames: ['1', '2', '3', '4'],
      dialogFormVisible: true,
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    }
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
