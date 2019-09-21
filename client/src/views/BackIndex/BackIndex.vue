<template>
  <div class="basic-index">
      <!-- echarts -->
      <div id="mudules1"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'BasicIndex',
  data(){
      return{
       
      }
  },
  methods:{
    init(id){
      this.chart = echarts.init(document.getElementById(id));
      this.chart.clear();
      let option = {
          title: {
            text: '博客访问量',
            x: '1%',
            top: "2%",
            bottom:'10%',
            textStyle: {
                color: '#666',
                fontSize: 16
            }
          },
          tooltip: {
              trigger: 'axis'
          },
          grid:{
            left:'2%',
            right:'2%',
          },  
          xAxis: [{
              type: 'category',
              data: ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06'],
              axisLine: {
                  lineStyle: {
                      color: "#999"
                  }
              }
          }],
          yAxis: [{
              type: 'value',
              splitNumber: 4,
              splitLine: {
                  lineStyle: {
                      type: 'dashed',
                      color: '#DDD'
                  }
              },
              axisLine: {
                  show: false,
                  lineStyle: {
                      color: "#333"
                  },
              },
              nameTextStyle: {
                  color: "#999"
              },
              splitArea: {
                  show: false
              }
          }],
          series: [{
              name: '课时',
              type: 'line',
              data: [23,60,20,36,23,85],
              lineStyle: {
                  normal: {
                      width: 8,
                      color: {
                          type: 'linear',
                          colorStops: [{
                              offset: 0,
                              color: '#A9F387' // 0% 处的颜色
                          }, {
                              offset: 1,
                              color: '#48D8BF' // 100% 处的颜色
                          }],
                          globalCoord: false // 缺省为 false
                      },
                      shadowColor: 'rgba(72,216,191, 0.3)',
                      shadowBlur: 10,
                      shadowOffsetY: 20
                  }
              },
              itemStyle: {
                  normal: {
                      color: '#fff',
                      borderWidth: 10,
                      /*shadowColor: 'rgba(72,216,191, 0.3)',
                      shadowBlur: 100,*/
                      borderColor: "#A9F387"
                  }
              },
              smooth: true
          }]
      };
      this.chart.setOption(option);
    }
  },
  mounted(){
    this.init('mudules1')
  }
}
</script>
<style lang="less" scoped>
  #mudules1{
    height: 400px;
    width: 100%;
    background-color: #fff;
  }
</style>
