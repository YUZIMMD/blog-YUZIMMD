/** 前端自检表格 */
<template>
  <div class="atlas">
    <div class="manageList" @click="dialogFormVisible = !dialogFormVisible">
      管理清单
    </div>
    <el-dialog title="清单树" :visible.sync="dialogFormVisible">
      <div class="treeBox">
        <el-tree
          :data="data"
          node-key="id"
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
    <el-dialog :visible.sync="inputDialog">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
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
      <tbody v-for="(item, index) in mapDataObj['知识体系']" :key="index">
        <tr>
          <td :rowspan="Object.keys(item).length" style="width:200px">
            {{ index }}
          </td>
          <td>{{ Object.keys(item)[0] }}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr
          v-for="(item1, index1) in item"
          :key="index1"
          v-show="index1 != Object.keys(item)[0]"
        >
          <td>{{ index1 }}</td>
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
      dialogFormVisible: true,
      inputDialog: false,
      input:'',
      data: [
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
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2',
              children: [
                {
                  id: 11,
                  label: '三级 3-2-1'
                },
                {
                  id: 12,
                  label: '三级 3-2-2'
                },
                {
                  id: 13,
                  label: '三级 3-2-3'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
    ...mapState(['mapDataObj'])
  },
  methods: {
    handleDragStart(node, ev) {
      console.log('drag start', node+ev)
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log('tree drag enter: ', dropNode.label+ev)
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log('tree drag leave: ', dropNode.label+ev)
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log('tree drag over: ', dropNode.label+ev)
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log('tree drag end: ', dropNode && dropNode.label, dropType+ev)
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log('tree drop: ', dropNode.label, dropType+ev)
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
              on-click={() => this.append(data)}
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
    append(data) {
      const newChild = { id: id++, label: 'testtest', children: [] }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },

    remove(node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    }
  },
  mounted() {}
}
</script>
<style lang="less" scoped>
.atlas {
  width: 100%;
  .manageList {
    position: fixed;
    z-index: 100;
    width: 60px;
    height: 60px;
    background-color: #080074;
    border-radius: 40px;
    box-shadow: 0px 0 10px 0 #00ff00;
    right: 1%;
    top: 50%;
    color: #fff;
    line-height: 60px;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
  }
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
