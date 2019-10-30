<template>
  <div class="basic-index">
    <!-- echarts -->
    <div id="mudules1"></div>
    <div id="mudules3"></div>
    <div id="mudules2"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "BasicIndex",
  data() {
    return {};
  },
  methods: {
    init(id) {
      let myChart = echarts.init(document.getElementById(id));
      myChart.clear();
      let option = {
        title: {
          text: "博客访问量",
          x: "1%",
          top: "2%",
          bottom: "10%",
          textStyle: {
            color: "#666",
            fontSize: 16
          }
        },
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "2%",
          right: "2%"
        },
        xAxis: [
          {
            type: "category",
            data: [
              "2019-01",
              "2019-02",
              "2019-03",
              "2019-04",
              "2019-05",
              "2019-06"
            ],
            axisLine: {
              lineStyle: {
                color: "#999"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            splitNumber: 4,
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "#DDD"
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#333"
              }
            },
            nameTextStyle: {
              color: "#999"
            },
            splitArea: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "课时",
            type: "line",
            data: [23, 60, 20, 36, 23, 85],
            lineStyle: {
              normal: {
                width: 8,
                color: {
                  type: "linear",
                  colorStops: [
                    {
                      offset: 0,
                      color: "#A9F387" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#48D8BF" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                shadowColor: "rgba(72,216,191, 0.3)",
                shadowBlur: 10,
                shadowOffsetY: 20
              }
            },
            itemStyle: {
              normal: {
                color: "#fff",
                borderWidth: 10,
                /*shadowColor: 'rgba(72,216,191, 0.3)',
                      shadowBlur: 100,*/
                borderColor: "#A9F387"
              }
            },
            smooth: true
          }
        ]
      };
      myChart.setOption(option);
    },
    updateText(id) {
      let myChart = echarts.init(document.getElementById(id));
      myChart.clear();
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        title: {
          text: "文章上传分析",
          x: "1%",
          top: "2%",
          bottom: "10%",
          textStyle: {
            color: "#666",
            fontSize: 16
          }
        },
        grid: {
          left: "1%",
          right: "2%",
          bottom: "14%",
          top: "16%",
          containLabel: true
        },
        legend: {
          data: ["1", "2", "3"],
          right: 10,
          top: 12,
          textStyle: {
            color: "#fff"
          },
          itemWidth: 12,
          itemHeight: 10
          // itemGap: 35
        },
        xAxis: {
          type: "category",
          data: [
            "2019-01",
            "2019-02",
            "2019-03",
            "2019-04",
            "2019-05",
            "2019-06",
            "2019-05",
            "2019-06"
          ],
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          },
          axisLabel: {
            textStyle: {
              fontFamily: "Microsoft YaHei"
            }
          }
        },
        yAxis: {
          type: "value",
          max: "40",
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#DDD"
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#333"
            }
          },
          nameTextStyle: {
            color: "#999"
          },
          splitArea: {
            show: false
          }
        },
        dataZoom: [
          {
            show: true,
            // height: 12,
            xAxisIndex: [0],
            bottom: "8%",
            start: 10,
            end: 90,
            textStyle: {
              color: "#000"
            },
            borderColor: "#E8ECF0"
          },
          {
            type: "inside",
            show: true,
            height: 15,
            start: 1,
            end: 35
          }
        ],
        series: [
          {
            name: "1",
            type: "bar",
            barWidth: "10%",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#fccb05"
                  },
                  {
                    offset: 1,
                    color: "#f5804d"
                  }
                ]),
                barBorderRadius: 12
              }
            },
            data: [1, 5, 10, 15, 20, 25, 30, 35, 40]
          },
          {
            name: "2",
            type: "bar",
            barWidth: "10%",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#8bd46e"
                  },
                  {
                    offset: 1,
                    color: "#09bcb7"
                  }
                ]),
                barBorderRadius: 11
              }
            },
            data: [1, 5, 10, 15, 20, 25, 30, 35, 40]
          },
          {
            name: "3",
            type: "bar",
            barWidth: "10%",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#248ff7"
                  },
                  {
                    offset: 1,
                    color: "#6851f1"
                  }
                ]),
                barBorderRadius: 11
              }
            },
            data: [1, 5, 10, 15, 20, 25, 30, 35, 40]
          }
        ]
      };

      var app = {
        currentIndex: -1
      };
      setInterval(function() {
        var dataLen = option.series[0].data.length;

        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: app.currentIndex
        });
        app.currentIndex = (app.currentIndex + 1) % dataLen;
        //console.log(app.currentIndex);
        // 高亮当前图形
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: app.currentIndex
        });
        // 显示 tooltip
        myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: app.currentIndex
        });
      }, 1000);
      myChart.setOption(option);
    },
    read(id) {
      let myChart = echarts.init(document.getElementById(id));
      myChart.clear();
      let option = {
        title: {
          text: "阅读数分析",
          x: "1%",
          top: "2%",
          bottom: "10%",
          textStyle: {
            color: "#666",
            fontSize: 16
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#57617B"
            }
          }
        },
        legend: {
          icon: "rect",
          itemWidth: 14,
          itemHeight: 10,
          itemGap: 13,
          data: ["前端", "后端", "服务器","语言","其他"],
          right: "4%",
          top:'4%',
          textStyle: {
            fontSize: 12
          }
        },
        grid: {
          left: "1%",
          right: "2%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "13:00",
            "13:05",
            "13:10",
            "13:15",
            "13:20",
            "13:25",
            "13:30",
            "13:35",
            "13:40",
            "13:45",
            "13:50",
            "13:55"
          ],
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          },
          axisLabel: {
            textStyle: {
              fontFamily: "Microsoft YaHei"
            }
          }
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#DDD"
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#333"
            }
          },
          nameTextStyle: {
            color: "#999"
          },
          splitArea: {
            show: false
          }
        },
        series: [
          {
            name: "移动",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(137, 189, 27, 0.3)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(137, 189, 27, 0)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: "rgb(137,189,27)",
                borderColor: "rgba(137,189,2,0.27)",
                borderWidth: 12
              }
            },
            data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
          },
          {
            name: "电信",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0, 136, 212, 0.3)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(0, 136, 212, 0)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: "rgb(0,136,212)",
                borderColor: "rgba(0,136,212,0.2)",
                borderWidth: 12
              }
            },
            data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
          },
          {
            name: "联通",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(219, 50, 51, 0.3)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(219, 50, 51, 0)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: "rgb(219,50,51)",
                borderColor: "rgba(219,50,51,0.2)",
                borderWidth: 12
              }
            },
            data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
          }
        ]
      };
      myChart.setOption(option);
    }
  },
  mounted() {
    this.init("mudules1");
    this.updateText("mudules2");
    this.read("mudules3");
  }
};
</script>
<style lang="less" scoped>
#mudules1,
#mudules2,
#mudules3 {
  height: 400px;
  width: 100%;
  background-color: #fff;
  margin-top: 20px;
  margin-bottom: 30px;
}
#mudules2 {
  height: 600px;
}
</style>
