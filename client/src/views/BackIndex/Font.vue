<template>
  <div class="font">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-button
          type="primary"
          class="addBtn"
          @click="dialogFormVisible = true,title = '新增文章'"
        >新 增</el-button>
      </el-form-item>
      <el-form-item>
        <el-select class="selectBox" v-model="form.kinds" placeholder="请选择所属大类">
          <el-option v-for="(item, index) in options" :key="index" :label="item" :value="index"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input class="searchBox" v-model="input" placeholder="请输入关键字"></el-input>
        <el-button type="primary" class="searchBtn">搜 索</el-button>
      </el-form-item>
    </el-form>
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="form.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属分类" :label-width="formLabelWidth">
          <el-select v-model="form.kinds" placeholder="请选择">
            <el-option v-for="(item, index) in options" :key="index" :label="item" :value="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章标签" :label-width="formLabelWidth">
          <el-input v-model="form.tags" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" :label-width="formLabelWidth">
          <quill-editor v-model="form.content" :options="editorOption" ref="QuillEditor"></quill-editor>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitFun">确 定</el-button>
      </div>
    </el-dialog>
    <div class="study-plan">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="文章标题"></el-table-column>
        <el-table-column label="所属大类">
          <template slot-scope="scope">{{ options[scope.row.kinds] }}</template>
        </el-table-column>
        <el-table-column label="文章标签">
          <template slot-scope="scope">
            <el-tag
              type="success"
              class="m-r-sm"
              v-for="(item,index) in scope.row.tags.split('，')"
              :key="index"
            >{{item}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="上传时间"></el-table-column>
        <el-table-column prop="updateTime" label="最近修改时间"></el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="updateUser(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="deleteUser(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "Font",
  data() {
    return {
      input:'',
      tableData: [],
      formInline: {
        user: "",
        region: ""
      },
      dialogFormVisible: false,
      form: {
        title: "",
        kinds: "",
        tags: "",
        content: ""
      },
      options: ["前端规范", "html", "css", "JavaScript", "框架", "工具"],
      formLabelWidth: "120px",
      title: "新增文章",
      editorOption: {
        modules: {
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike"], // toggled buttons
              ["blockquote", "code-block"],

              [{ header: 1 }, { header: 2 }], // custom button values
              [{ list: "ordered" }, { list: "bullet" }],
              [{ script: "sub" }, { script: "super" }], // superscript/subscript
              [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
              [{ direction: "rtl" }], // text direction

              [{ size: ["small", false, "large", "huge"] }], // custom dropdown
              [{ header: [1, 2, 3, 4, 5, 6, false] }],

              [{ color: [] }, { background: [] }], // dropdown with defaults from theme
              [{ font: [] }],
              [{ align: [] }],
              ["link", "image", "video"],
              ["clean"] // remove formatting button
            ] // 工具栏
            // handlers: {
            //     'image': function (value) {
            //         if (value) {
            //             // alert('自定义图片')
            //         } else {
            //             this.quill.format('image', false);
            //         }
            //     }
            // }
          }
        }
      }
    };
  },
  methods: {
    submitFun() {
      let url =
        this.title == "新增文章"
          ? "/font/addfontAction"
          : "/font/updatefontAction";
      this.$http("post", url, this.form).then(data => {
        if (data.code == 200) {
          this.dialogFormVisible = false;
          this.init();
        }
      });
    },
    init() {
      this.$http("get", "/font/queryfontAction").then(data => {
        this.tableData = data.fontlist.map(item => {
          if (item.createTime) {
            item.createTime = dayjs(dayjs(item.createTime).valueOf()).format(
              "YYYY-MM-DD HH:mm:ss"
            );
            item.updateTime = dayjs(dayjs(item.updateTime).valueOf()).format(
              "YYYY-MM-DD HH:mm:ss"
            );
          }
          return item;
        });
      });
    },
    updateUser(row) {
      this.form = row;
      this.title = "修改用户";
      this.dialogFormVisible = true;
      console.log(row);
    },
    deleteUser(row) {
      this.$http("get", "/font/deletefontAction?id=" + row.id).then(data => {
        if (data.code == 200) {
          this.init();
        }
      });
    }
  },
  mounted() {
    this.init();
    console.log(dayjs);
  }
};
</script>
<style lang="less" scoped>
</style>
