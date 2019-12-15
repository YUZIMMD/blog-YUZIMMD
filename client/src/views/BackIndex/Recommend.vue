/** 主页管理 */ 
<template>
  <div class="font">
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
        <div class="cascader-box">
            <el-cascader :props="props"></el-cascader>
        </div>
    </el-dialog>
    <div class="recommend-content">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="文章标题"></el-table-column>
        <el-table-column label="文章分类">
          <template slot-scope="scope">{{ options[scope.row.kinds] }}</template>
        </el-table-column>
        <el-table-column prop="updateTime" label="最近修改时间"></el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="updateUser(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
let id = 0;
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
      options: ["前端规范", "html", "css", "JavaScript", "框架", "工具"],
      title: "新增文章",
      props: {
        lazy: true,
        lazyLoad (node, resolve) {
        const { level } = node;
        setTimeout(() => {
            console.log('1123213',node)
            const nodes = Array.from({ length: level + 1 }) // eslint-disable-next-line 
            .map(item => {
                return { 
                    value: ++id,
                    label: `选项${id}`,
                    leaf: level >= 2
                }
            });
            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
            resolve(nodes);
        }, 1000);
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
.cascader-box{
    min-height: 600px;
}
</style>
