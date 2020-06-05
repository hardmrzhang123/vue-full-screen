<template>
  <div class="lineOne">
    <span class="spanTitle">使用时长排行</span>
    <div id="myChart" style="width:100%;height:400px"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import aa from "../assets/1212.png";
export default {
  data() {
    return {
        paper:'image://'+aa,
      startData: 13000,
      maxData: 18000,
      minData: 5000
    };
  },
  methods: {
    aa() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        backgroundColor: "#0f375f",
        tooltip: {},
        legend: {
          data: ["all"],
          textStyle: { color: "#ddd" }
        },
        grid: {
          right: 20,
          left: 140,
          bottom: 160
        },
        xAxis: {
          data: ["a", "b", "c", "d"],
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              color: "#ddd"
            }
          },
          axisLabel: { show: false }
        },
        yAxis: {
          splitLine: { show: false },
          axisTick: {
            lineStyle: {
              color: "#ddd"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#ddd"
            }
          },
          axisLabel: {
            textStyle: {
              color: "#ddd"
            }
          }
        },
        animationEasing: "cubicOut",
        animationDuration: 100,
        animationDurationUpdate: 2000,
        series: [
          {
            type: "pictorialBar",
            name: "all",
            id: "paper",
            hoverAnimation: true,
            label: {
              normal: {
                show: true,
                position: "top",
                formatter: "{c} km",
                textStyle: {
                  fontSize: 16,
                  color: "#e54035"
                }
              }
            },
            symbol: this.paper,
            symbolSize: ["40%", 100],
            symbolMargin: "-25%",
            data: [
              {
                value: this.maxData,
                symbolRepeat: 'none'
              },
              {
                value: this.startData,
                symbolRepeat: 200
              },
              {
                value: this.startData,
                symbolBoundingData: this.startData,
                symbolRepeat: 0
              },
              {
                value: this.startData,
                symbolBoundingData: this.startData,
                symbolRepeat: 0
              }
            ],
            markLine: {
              symbol: ["none", "none"],
              label: {
                normal: { show: false }
              },
              lineStyle: {
                normal: {
                  color: "#e54035"
                }
              },
              data: [
                {
                  yAxis: this.startData
                }
              ]
            }
          },
          {
            name: "all",
            type: "pictorialBar",
            symbol: "circle",
            itemStyle: {
              normal: {
                color: "#185491"
              }
            },
            silent: true,
            symbolSize: ["150%", 50],
            symbolOffset: [0, 20],
            z: -10,
            data: [1, 1, 1, 1]
          }
        ]
      })
     

    }
  },
  mounted() {
    this.aa();
  }
};
</script>
<style scoped>
#chart {
  width: 100%;
  height: 500px;
}
</style>