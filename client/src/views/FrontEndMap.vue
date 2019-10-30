<template>
  <div>
    <div class="FrontEndMap" id="FrontEndMap"></div>
    <el-button class="btn-style-user-details" round @click="linkToHome()">回到首页</el-button>
  </div>
</template>

<script>
import echarts from "echarts";
import { mapState } from 'vuex';
export default {
  name: "FrontEndMap",
  data() {
    return {
      objKey: [],
      objLinks: []
    };
  },
  computed:{
      ...mapState(['mapDataObj'])
  },
  methods: {
      linkToHome(){
          this.$router.push('/')
      },
    atlasGetKeys(obj, keyName) {
      let keys = Object.keys(obj); // 获取到keys数组
      this.objKey = this.objKey.concat(keys); // 赋值给最终数组
      keys.forEach(item => {
        if (keyName != "") {
          this.objLinks.push({
            source: keyName,
            target: item
          });
        }
        //循环遍历数组，假如下面有值，按照上面到方式继续遍历下面，如果没有，结束本次循环，到下个循环
        if (obj[item]) {
          this.atlasGetKeys(obj[item], item);
        } else {
          return false;
        }
      });
    },
    rgb() {
      //rgb颜色随机
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      var rgb = "rgba(" + r + "," + g + "," + b + ",1)";
      return rgb;
    },
    drawEchartsRelation() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("FrontEndMap"));
      // 绘制图表
      this.atlasGetKeys(this.mapDataObj, "");
      let data = [];
      let arr = [80, 90, 100, 110, 120, 130, 140, 150];
      for (let i in this.objKey) {
        data.push({
          name: this.objKey[i],
          symbolSize: arr[Math.floor(Math.random() * arr.length)],
          draggable: true,
          category: 0,
          itemStyle: {
            normal: {
              borderColor: this.rgb(),
              borderWidth: 6,
              shadowBlur: 20,
              shadowColor: this.rgb(),
              color: this.rgb()
            }
          }
        });
      }
      let option = {
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 1000,
              edgeLength: 50,
              focusNodeAdjacenc: true
            },
            roam: "move",
            label: {
              normal: {
                show: true
              }
            },
            data: data,
            links: this.objLinks,
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 5,
                curveness: 0
              }
            },
            categories: [{ name: "0" }, { name: "1" }, { name: "2" }]
          }
        ]
      };
      myChart.setOption(option);
    }
  },
  mounted() {
    this.drawEchartsRelation();
  }
};
</script>
<style lang="less" scoped>
.FrontEndMap {
  background-color: #000;
  height: 100vh;
}
.btn-style-user-details {
  color: #d24c63;
  z-index: 100000000;
  position: fixed;
  right: 20px;
  top: 20px;
  background-color: #000;
  border: 2px solid #d24c63;
}
</style>