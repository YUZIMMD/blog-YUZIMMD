/** 前端自检表格 */
<template>
  <div class="atlas">
    <div class="manageList" @click="dialogFormVisible = !dialogFormVisible">
      管理清单
    </div>
    <el-dialog title="清单树" :visible.sync="dialogFormVisible">
      <div class="treeBox">
        <el-tree
          :data="treeData"
          node-key="id"
          :props="defaultProps"
          default-expand-all
          @node-drag-start="handleDragStart"
          @node-drag-enter="handleDragEnter"
          @node-drag-leave="handleDragLeave"
          @node-drag-over="handleDragOver"
          @node-drag-end="handleDragEnd"
          @node-drop="handleDrop"
          draggable
          :allow-drop="allowDrop"
          :allow-drag="allowDrag"
          :render-content="renderContent"
          :expand-on-click-node="false"
        >
        </el-tree>
      </div>
      <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" size="small"
          >取 消</el-button
        >
        <el-button type="primary" @click="submitFun" size="small"
          >确 定</el-button
        >
      </div> -->
    </el-dialog>
    <el-dialog :visible.sync="inputDialog" width="600px">
      <el-input v-model="input" placeholder="请输入添加name"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="inputDialog = false" size="small">取 消</el-button>
        <el-button type="primary" @click="append()" size="small"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <table border="1" cellspacing="0">
      <thead>
        <tr>
          <th colspan="2">分类</th>
          <th>整理链接</th>
          <th style="width:20%">熟练度</th>
          <th style="width:25%">未掌握</th>
          <th style="width:20%">计划</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in treeData[0].children" :key="index">
        <tr>
          <td :rowspan="item.children>0 ?item.children.length:0" style="width:200px">
            {{ item.name }}
          </td>
          <td>{{item.children?item.children[0].name:''}}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr
          v-for="(item1, index1) in item.children"
          :key="index1"
          v-show="index1 != 0"
        >
          <td>{{ item1.name }}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
let id = 1000
export default {
  name: 'Atlas',
  data() {
    return {
      dialogFormVisible: false,
      inputDialog: false,
      input: '',
      data: [
        {
          id: 0,
          name: '一级 1',
          fname: '213213',
          fid: '111',
          children: [
            {
              id: 1,
              label: '一级 1',
              children: [
                {
                  id: 4,
                  label: '二级 1-1',
                  children: [
                    {
                      id: 9,
                      label: '三级 1-1-1'
                    },
                    {
                      id: 10,
                      label: '三级 1-1-2'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      treeData: [],
      appendData: []
    }
  },
  computed: {
    ...mapState(['mapDataObj'])
  },
  methods: {
    handleDragStart(node, ev) {
      console.log('drag start', node + ev)
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log('tree drag enter: ', dropNode.label + ev)
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log('tree drag leave: ', dropNode.label + ev)
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log('tree drag over: ', dropNode.label + ev)
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log('tree drag end: ', dropNode && dropNode.label, dropType + ev)
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log('tree drop: ', dropNode.label, dropType + ev)
    },
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.label === '二级 3-1') {
        return type !== 'inner'
      } else {
        return true
      }
    },
    allowDrag(draggingNode) {
      return draggingNode.data.label.indexOf('三级 3-2-2') === -1
    },
    renderContent(h, { node, data, store }) {
      console.log(store)
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.isinputDialog(data)}
            >
              添加一个子节点
            </el-button>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.remove(node, data)}
            >
              删除节点
            </el-button>
          </span>
        </span>
      )
    },
    isinputDialog(data) {
      this.inputDialog = !this.inputDialog
      this.appendData = data
      alert(JSON.stringify(data))
    },
    append() {
      // 前端实现效果，再往数据库中添加（优化:不需要树型化数据）
      const newChild = { id: id++, name: this.input, children: [] }
      this.$http('post', '/fontList/addfontAction', {
        name: this.input,
        fid: this.appendData.id,
        fname: this.appendData.name
      }).then(res => {
        console.log(res)
        if (!this.appendData.children) {
          this.$set(this.appendData, 'children', [])
        }
        this.appendData.children.push(newChild)
        this.input = ''
        this.inputDialog = !this.inputDialog
        this.$http('get', '/fontList/queryfontAction').then(res => {
          let result = res.result
          // 将数据封装成树
          this.listToTree(result)
        })
      })
    },

    remove(node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    }
  },
  mounted() {
    this.$http('get', '/fontList/queryfontAction').then(res => {
      this.treeData = res.result
    })
  }
}
</script>
<style lang="less" scoped>
.atlas {
  width: 100%;
  .treeBox {
    /deep/ .custom-tree-node {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      padding-right: 8px;
    }
    /deep/ .el-tree {
      background: #f7f3f3;
      padding: 20px 10px;
      .is-current .el-tree-node__content:hover,
      .is-current .el-tree-node__content {
        background-color: #5d5054;
        color: #fff;
      }
      .el-tree-node__label {
        font-size: 14px;
      }
      .el-tree-node__content {
        height: 36px;
      }
    }
  }
  table {
    border-top: 1px solid #000000;
    border-left: 1px solid #000000;
    border-collapse: collapse; /*设置单元格的边框合并为1*/
    width: 100%;
    background-color: #fff;
    thead {
      border: 1px solid #ccc;
      th {
        border: 1px solid #ccc;
        padding: 15px;
        letter-spacing: 2px;
        font-size: 14px;
      }
    }
    tbody {
      tr {
        td {
          border: 1px solid #ccc;
          padding: 10px;
          color: #000;
        }
      }
    }
  }
}
</style>
