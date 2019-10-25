<template>
  <div class="home1" id="home1">
    <div class="item item1">

    </div>
    <div class="item item2">

    </div>
    <div class="item item3">

    </div>
    <div class="item item4">

    </div>
    <div class="item item5">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import '../assets/css/animate-common.less'
import echarts from 'echarts'

export default {
  name: 'home1',
  data(){
      return{
        show:true,
        scrollActive:[],
        scrollTop:0
      }
  },
  methods:{
    linkTo(){
      this.$router.push('/index')
    },
    drawEcharts(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('item3-1'))
      // 绘制图表
      let option = {
        tooltip: {},
        animationDurationUpdate: function(idx) {
            // 越往后的数据延迟越大
            return idx * 100;
        },
        animationEasingUpdate: 'bounceIn',
        color: ['#fff', '#fff', '#fff'],
        series: [{
            type: 'graph',
            layout: 'force',
            force: {
                repulsion: 500,
                edgeLength: 10
            },
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            data: [{
                "name": "考研",
                "value": 10000,
                "symbolSize": 100,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "borderColor": "rgb(27, 94, 93)",
                        "borderWidth": 4,
                        "shadowBlur": 100,
                        "shadowColor": "rgb(27, 94, 93)",
                        "color": "rgb(27, 94, 93)"
                    }
                }
            }, {
                "name": "兼职",
                "value": 6181,
                "symbolSize": 100,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "borderColor": "rgb(206, 188, 11)",
                        "borderWidth": 4,
                        "shadowBlur": 100,
                        "shadowColor": "rgb(206, 188, 11)",
                        "color": "rgb(206, 188, 11)"
                    }
                }
            }, {
                "name": "食堂",
                "value": 4386,
                "symbolSize": 100,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "borderColor": "rgb(165, 190, 198)",
                        "borderWidth": 4,
                        "shadowBlur": 100,
                        "shadowColor": "rgb(165, 190, 198)",
                        "color": "rgb(165, 190, 198)"
                    }
                }
            }, {
                "name": "家教",
                "value": 4055,
                "symbolSize": 100,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "borderColor": "rgb(98, 41, 72)",
                        "borderWidth": 4,
                        "shadowBlur": 100,
                        "shadowColor": "rgb(98, 41, 72)",
                        "color": "rgb(98, 41, 72)"
                    }
                }
            }, {
                "name": "大四",
                "value": 2467,
                "symbolSize": 100,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "borderColor": "rgb(175, 20, 143)",
                        "borderWidth": 4,
                        "shadowBlur": 100,
                        "shadowColor": "rgb(175, 20, 143)",
                        "color": "rgb(175, 20, 143)"
                    }
                }
            }, {
                "name": "研友",
                "value": 2244,
                "symbolSize": 100,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "borderColor": "rgb(77, 231, 55)",
                        "borderWidth": 4,
                        "shadowBlur": 100,
                        "shadowColor": "rgb(77, 231, 55)",
                        "color": "rgb(77, 231, 55)"
                    }
                }
            }, {
                "name": "论文",
                "value": 1898,
                "symbolSize": 100,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "borderColor": "rgb(26, 83, 246)",
                        "borderWidth": 4,
                        "shadowBlur": 100,
                        "shadowColor": "rgb(26, 83, 246)",
                        "color": "rgb(26, 83, 246)"
                    }
                }
            }, {
                "name": "专接本",
                "value": 1484,
                "symbolSize": 100,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "borderColor": "rgb(155, 118, 127)",
                        "borderWidth": 4,
                        "shadowBlur": 100,
                        "shadowColor": "rgb(155, 118, 127)",
                        "color": "rgb(155, 118, 127)"
                    }
                }
            }, {
                "name": "招聘",
                "value": 1112,
                "symbolSize": 100,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "borderColor": "rgb(116, 207, 18)",
                        "borderWidth": 4,
                        "shadowBlur": 100,
                        "shadowColor": "rgb(116, 207, 18)",
                        "color": "rgb(116, 207, 18)"
                    }
                }
            }, {
                "name": "讲座",
                "value": 965,
                "symbolSize": 100,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "borderColor": "rgb(98, 224, 224)",
                        "borderWidth": 4,
                        "shadowBlur": 100,
                        "shadowColor": "rgb(98, 224, 224)",
                        "color": "rgb(98, 224, 224)"
                    }
                }
            }, {
                "name": "图书馆",
                "value": 847,
                "symbolSize": 100,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "borderColor": "rgb(137, 37, 21)",
                        "borderWidth": 4,
                        "shadowBlur": 100,
                        "shadowColor": "rgb(137, 37, 21)",
                        "color": "rgb(137, 37, 21)"
                    }
                }
            }, {
                "name": "租房",
                "value": 582,
                "symbolSize": 100,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "borderColor": "rgb(81, 27, 15)",
                        "borderWidth": 4,
                        "shadowBlur": 100,
                        "shadowColor": "rgb(81, 27, 15)",
                        "color": "rgb(81, 27, 15)"
                    }
                }
            }]
        }]
     }
     myChart.setOption(option)
    }
  },
  mounted(){
    this.drawEcharts();
  }
}
</script>
<style lang="less" scoped>
.home1{
  height: 100vh;
  .item1{
    background: url('../assets/image/3917_jgdb4quz.jpg');
  }
  .item2{
    background: url('../assets/image/3917_jgdb7nsr.jpg');
  }
  .item3{
    background: url('../assets/image/3917_jgddhqaf.jpg');
  }
  .item4{
    background: url('../assets/image/3917_jgddjme9.jpg');
  }
  .item5{
    background: url('../assets/image/3917_jgddkxej.jpg');
  }
  .item{
    width: 100vw;
    height: 100vh;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
  }
}
</style>
