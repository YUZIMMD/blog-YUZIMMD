/** 前端自检表格 */ 
<template>
  <div class="atlas">
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
      <tbody v-for="(item,index) in mapDataObj['知识体系']" :key="index">
        <tr>
          <td :rowspan="Object.keys(item).length" style="width:200px">{{index}}</td>
          <td>{{Object.keys(item)[0]}}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr v-for="(item1,index1) in item" :key="index1" v-show="index1 !=Object.keys(item)[0]">
          <td>{{index1}}</td>
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
import { mapState } from "vuex";
export default {
  name: "Atlas",
  data() {
    return {};
  },
  computed: {
    ...mapState(["mapDataObj"])
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.atlas {
  width: 100%;
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
