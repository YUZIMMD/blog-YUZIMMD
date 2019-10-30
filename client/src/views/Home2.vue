<template>
  <div class="home" id="home">
    <div class="item item1">
      <div>
        <div class="user-logo">
          <div class="user-logo-img"></div>
          <div>Front-end developer-Dengyt</div>
        </div>
      </div>
      <div class="user-details">
        <div class="fadeInRight" v-if="scrollTop >=scrollActive[0]">
          <div>stay hungry stay foolish</div>
          <div class="hr"></div>
          <div class="size-1">一个时刻保持初学者心态，专注而简单的人</div>
          <!-- <div class="size-1">关于茶叶分类，茶叶分为绿茶，红茶，乌龙茶</div> -->
          <el-button class="btn-style-user-details" round @click="linkTo()">个人主页</el-button>
        </div>
      </div>
    </div>
    <div class="item item2">
      <div class="item2-1">
        <div class="fadeInLeft" v-if="scrollTop >=scrollActive[1]">
          <div class="title">一些想法</div>
          <div
            class="details"
          >凡是你认真去学习，认真去做过的事情，都不会是徒劳的，时间会证明你学到的都会有用到的那天。遇到难的东西，只要学到新的东西就是进步，不过分思考结果，感受过程-来自心灵鸡汤欺骗法则</div>
        </div>
      </div>
      <div id="item2-2"></div>
    </div>
    <div class="item item3">
      <div id="item3-1"></div>
      <div class="item3-2">
        <div class="fadeInRight" v-if="scrollTop >=scrollActive[2]">
          <div class="title">自检图谱</div>
          <div class="details">不断自我检查，自我提升</div>
          <el-button class="btn-style-user-details" round @click="linkToMap()">详细图谱</el-button>
        </div>
      </div>
    </div>
    <div class="item item4">
      <div class="item4-1">
        <div class="fadeInLeft" v-if="scrollTop >=scrollActive[3]">
          <div class="title">技术栈</div>
          <div class="details">
            <a
              class="link"
              target="_blank"
              href="https://www.runoob.com/w3cnote/webfrontendstack.html"
            >前端技术图谱</a>
          </div>
          <div class="m-t-md text">
            前端开发是一个非常特殊的行业，它的历史实际上不是很长，但是知识之繁杂，技术迭代速度之快是其他技术所不能比拟的。
            到现在为止，前端工程师已经成为研发体系中的重要岗位之一。
            可是，与此相对的是，我发现极少或者几乎没有大学的计算机专业愿意开设前端课程，更没有系统性的教学方案出现。
            大部分前端工程师的知识，其实都是来自于实践和工作中零散的学习。
            这时候，我们需要整理属于我们自己的一个前端技能图谱。
            网上不乏有许多很完善的图谱，但是对于我们自身，我们应该有针对的来整理，并且关联到最细的那个知识点。
            将学到的理论知识运用到代码中，是体现自学能力最好的方法！
          </div>
        </div>
      </div>
      <div class="item4-2">
        <el-row :gutter="4">
          <el-col :span="6" class="fadeInDown" v-if="scrollTop >=scrollActive[3]">
            <div class="grid-content">
              Web三剑客
              <div class="modal-content">
                <div>
                  HTML (HyperText Markup Language)
                  <br />CSS (Cascading Style Sheets)
                  <br />JavaScript
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="4">
          <el-col :span="6">
            <div class="opacity">1</div>
          </el-col>
          <el-col :span="6" class="fadeInDown" v-if="scrollTop >=scrollActive[3]">
            <div class="grid-content">
              库 / 框架
              <div class="modal-content">基础库,模块化,框架,UI框架</div>
            </div>
          </el-col>
          <el-col :span="6" class="fadeInRight" v-if="scrollTop >=scrollActive[3]">
            <div class="grid-content">
              数据可视化
              <div class="modal-content">
                <div>D3 ,Echarts ,HighCharts ,Vis.js ,Flot</div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="4">
          <el-col :span="6" class="fadeInLeft" v-if="scrollTop >=scrollActive[3]">
            <div class="grid-content">
              流程控制
              <div class="modal-content">
                <div>ES6,ES7,async,Promise</div>
              </div>
            </div>
          </el-col>
          <el-col :span="6" class="fadeInUpLeft" v-if="scrollTop >=scrollActive[3]">
            <div class="grid-content">
              安全
              <div class="modal-content">
                <div>Sandbox,XSS,CORS</div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="opacity">1</div>
          </el-col>
          <el-col :span="6" class="fadeInRight" v-if="scrollTop >=scrollActive[3]">
            <div class="grid-content">
              基础工具
              <div class="modal-content">Node.js,Phantom.js,SpiderMonkey</div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="4" class="rowStyle">
          <el-col :span="6">
            <div class="opacity">1</div>
          </el-col>
          <el-col :span="6">
            <div class="opacity">1</div>
          </el-col>
          <el-col :span="6" class="fadeInUpLeft" v-if="scrollTop >=scrollActive[3]">
            <div class="grid-content">
              编辑器
              <div class="modal-content">
                <div>Visual Studio Code,Sublime Text ,WebStorm,Vim</div>
              </div>
            </div>
          </el-col>
          <el-col :span="6" class="fadeInUpLeft" v-if="scrollTop >=scrollActive[3]">
            <div class="grid-content">
              质量控制
              <div class="modal-content">11231231</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="position-circle">
      <div class="circleBox">
        <div v-if="scrollTop >=scrollActive[0] && scrollTop <scrollActive[1]" class="circle"></div>
      </div>
      <div class="circleBox">
        <div v-if="scrollTop >=scrollActive[1] && scrollTop <scrollActive[2]" class="circle"></div>
      </div>
      <div class="circleBox">
        <div v-if="scrollTop >=scrollActive[2] && scrollTop < scrollActive[3]" class="circle"></div>
      </div>
      <div class="circleBox">
        <div v-if="scrollTop >=scrollActive[3]" class="circle"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "../assets/css/animate-common.less";
import echarts from "echarts";
import { mapState } from 'vuex'
export default {
  name: "home",
  data() {
    return {
      show: true,
      scrollActive: [],
      scrollTop: 0,
      objKey: [],
      objLinks: [],
      index:0 // 遍历深度
    };
  },
  computed:{
      ...mapState(['mapDataObj'])
  },
  methods: {
    linkToMap() {
        this.$router.push("/FrontEndMap");
    },
    //   递归得到key值,并且获取关系数组对象objLinks
    atlasGetKeys(obj, keyName) {
      let keys = Object.keys(obj); // 获取到keys数组
      this.objKey = this.objKey.concat(keys); // 赋值给最终数组
      this.index = this.index+1;
      keys.forEach(item => {
        if (keyName != "") {
          this.objLinks.push({
            source: keyName,
            target: item
          });
        }
        //循环遍历数组，假如下面有值，按照上面到方式继续遍历下面，如果没有，结束本次循环，到下个循环
        if (obj[item] && this.index<2) {
          this.atlasGetKeys(obj[item], item);
        } else {
          return false;
        }
      });
    },
    // 监听原生滚动事件
    handleScroll: function() {
      this.scrollTop = document.getElementById("home").scrollTop;
    },
    rgb() {
      //rgb颜色随机
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      var rgb = "rgba(" + r + "," + g + "," + b + ",1)";
      return rgb;
    },
    linkTo() {
      this.$router.push("/index");
    },
    drawEcharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("item2-2"));
      // 绘制图表
      let option = {
        tooltip: {},
        animationDurationUpdate: function(idx) {
          // 越往后的数据延迟越大
          return idx * 100;
        },
        animationEasingUpdate: "bounceIn",
        color: ["#fff", "#fff", "#fff"],
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 500,
              edgeLength: 10
            },
            roam: "move",
            label: {
              normal: {
                show: true
              }
            },
            data: [
              {
                name: "考研",
                value: 10000,
                symbolSize: 100,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "#554183",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "#554183",
                    color: "#554183"
                  }
                }
              },
              {
                name: "学习",
                value: 6100081,
                symbolSize: 150,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "#9470D4",
                    borderWidth: 4,
                    shadowBlur: 80,
                    shadowColor: "#9470D4",
                    color: "#9470D4"
                  }
                }
              },
              {
                name: "吃饭",
                value: 43806,
                symbolSize: 110,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgb(165, 190, 98)",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "rgb(165, 190, 98)",
                    color: "rgb(165, 190, 98)"
                  }
                }
              },
              {
                name: "英语",
                value: 4055,
                symbolSize: 80,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgb(98, 41, 72)",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "rgb(98, 41, 72)",
                    color: "rgb(98, 41, 72)"
                  }
                }
              },
              {
                name: "日语",
                value: 2467,
                symbolSize: 70,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "#6F9CD0",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "#6F9CD0",
                    color: "#6F9CD0"
                  }
                }
              },
              {
                name: "工作",
                value: 224400,
                symbolSize: 130,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "#6A2C72",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "#6A2C72",
                    color: "#6A2C72"
                  }
                }
              },
              {
                name: "家人",
                value: 1,
                symbolSize: 100,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "pink",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "'pink",
                    color: "pink"
                  }
                }
              },
              {
                name: "朋友",
                value: 1484,
                symbolSize: 100,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgb(155, 118, 127)",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "rgb(155, 118, 127)",
                    color: "rgb(155, 118, 127)"
                  }
                }
              },
              {
                name: "旅游",
                value: 712,
                symbolSize: 90,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgb(116, 207, 18)",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "rgb(116, 207, 18)",
                    color: "rgb(116, 207, 18)"
                  }
                }
              },
              {
                name: "电影",
                value: 965,
                symbolSize: 50,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "#D7A073",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#D7A073",
                    color: "#D7A073"
                  }
                }
              },
              {
                name: "未来",
                value: 847000,
                symbolSize: 100,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "#73D792",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "#73D792",
                    color: "#73D792"
                  }
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    drawEchartsRelation() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("item3-1"));
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
              repulsion: 2000,
              edgeLength: [20,100],
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
    let itemTop = document.getElementsByClassName("item");
    for (let i = 0; i < itemTop.length; i++) {
      if (i == 0) {
        this.scrollActive.push(itemTop[i].offsetTop);
      } else {
        this.scrollActive.push(itemTop[i].offsetTop - itemTop[i].offsetTop / 2);
      }
    }
    window.addEventListener("scroll", this.handleScroll, true); // 监听（绑定）滚轮滚动事件
    this.drawEcharts();
    this.drawEchartsRelation();
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll); //  离开页面清除（移除）滚轮滚动事件
  }
};
</script>
<style lang="less" scoped>
.home {
  background: url("../assets/image/bg.jpg");
  height: 100%;
  background-size: 100% 100%;
  color: #ffffff;
  overflow-y: scroll;
  overflow-x: hidden;
  .btn-style-user-details {
    margin-top: 4.5rem;
    background-color: #d24c63;
    color: #ffffff;
    border: none;
  }
  .item1 {
    height: 100%;
    display: flex;
    > div {
      flex: 1;
      .user-logo {
        padding: 2%;
        display: flex;
        font-size: 1.3rem;
        line-height: 50px;
        .user-logo-img {
          width: 50px;
          height: 50px;
          background: url("../assets/image/logo.png");
          background-size: 100% 100%;
          border-radius: 25px;
          margin-right: 1rem;
        }
      }
    }
    .user-details {
      font-size: 1.4rem;
      background-color: rgba(0, 0, 0, 0.6);
      height: 100%;
      display: flex;
      letter-spacing: 2px;
      // justify-content: center; /* 相对父元素水平居中 */
      align-items: center; /*  子元素相对父元素垂直居中 */
      > div {
        margin-left: 8%;
        .hr {
          width: 8%;
          border-bottom: 1px solid #ffffff;
          margin: 20px 0 40px 0;
        }
        .size-1 {
          font-size: 3.4rem;
          width: 80%;
        }
      }
    }
  }
  .item2 {
    display: flex;
    height: 70%;
    > div {
      flex: 1;
    }
    .item2-1 {
      display: flex;
      letter-spacing: 2px;
      justify-content: center; /* 相对父元素水平居中 */
      // align-items: center; /*  子元素相对父元素垂直居中 */
      background-color: rgba(0, 0, 0, 0.6);
      padding-top: 6rem;
      > div {
        width: 70%;
        .title {
          font-size: 3rem;
        }
        .details {
          margin-top: 2rem;
          font-size: 0.8rem;
          color: #cccccc;
          line-height: 1.6rem;
        }
      }
    }
    #item2-2 {
      background-color: #1b1c21;
    }
  }
  .item3 {
    display: flex;
    height: 70%;
    > div {
      flex: 1;
    }
    #item3-1 {
      background-color: #1b1c21;
    }
    .item3-2 {
      display: flex;
      letter-spacing: 2px;
      justify-content: center; /* 相对父元素水平居中 */
      // align-items: center; /*  子元素相对父元素垂直居中 */
      background-color: rgba(0, 0, 0, 0.6);
      padding-top: 6rem;
      > div {
        width: 70%;
        .title {
          font-size: 3rem;
        }
        .details {
          margin-top: 2rem;
          font-size: 0.8rem;
          color: #cccccc;
          line-height: 1.6rem;
        }
      }
    }
  }
  .item4 {
    display: flex;
    height: 70%;
    > div {
      flex: 1;
    }
    .item4-1 {
      display: flex;
      letter-spacing: 2px;
      justify-content: center; /* 相对父元素水平居中 */
      // align-items: center; /*  子元素相对父元素垂直居中 */
      background-color: #1b1c21;
      padding-top: 6rem;
      > div {
        width: 70%;
        .title {
          font-size: 3rem;
        }
        .details {
          margin-top: 2rem;
          font-size: 1.5rem;
          color: #cccccc;
          line-height: 1.6rem;
          .link {
            color: #cccccc;
            text-decoration: none;
            cursor: pointer;
          }
        }
      }
      .text {
        line-height: 30px;
        font-size: 12px;
      }
    }
    .item4-2 {
      background-color: rgba(0, 0, 0, 0.6);
      position: relative;
      .rowStyle {
        position: absolute;
        width: 100%;
        bottom: 0;
      }
      .opacity {
        opacity: 0;
      }
      .el-col-6 {
        position: relative;
      }
      .grid-content {
        background-color: #2e2e34;
        height: 14rem;
        line-height: 14rem;
        text-align: center;
        margin-bottom: 0.3rem;
        font-size: 1.4rem;
        cursor: pointer;
      }
      .modal-content {
        display: none;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        text-align: center;
        line-height: 2rem;
        font-size: 1rem;
        font-weight: bold;
        > div {
          transform: translate(0, 50%);
        }
      }
      .grid-content:hover > .modal-content {
        display: block;
        animation-name: enlarge; //规定需要绑定到选择器的 keyframe 名称。。
        -webkit-animation-name: enlarge;
        animation-duration: 1.5s !important; //定完成动画所花费的时间，以秒或毫秒计。
        -webkit-animation-duration: 1.5s !important;
      }
    }
  }
  .position-circle {
    position: fixed;
    top: 50%;
    right: 20px;
    .circleBox {
      width: 10px;
      height: 10px;
      border: 1px solid #fff;
      border-radius: 10px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      .circle{
          width: 4px;
          height: 4px;
          background-color: #fff;
          border-radius:5px; 
      }
    }
  }
}
</style>
