<template>
  <div class="histogram">
    <div class="histogram-title">
      <!-- 区域数据分布TOP10 -->
      <div class="histogram-title-font">区域数据分布TOP10</div>
    </div>
    <div class="l1"></div>
    <div class="l2"></div>
    <div class="l3"></div>
    <div class="l4"></div>
    <div class="l5"></div>
    <div class="l6"></div>
    <div class="histogram-data">
      <div id="histogramChart"></div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import aa from "../assets/1212.png";
export default {
  data() {
    return {
      paper: "image://" + aa,
      startData: 13000,
      maxData: 18000,
      minData: 5000
    };
  },
  methods: {
    drawchart() {
      var myChart = echarts.init(document.getElementById("histogramChart"));
      var barWidth = 30;
      var option = {
        tooltip: {
          trigger: "item"
        },
        xAxis: {
          axisTick: {
            show: true
          },
          axisLine: {
            show: false
          },
          data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          axisLabel: {
            color: "#8495C2",
            width: 23,
            height: 12,
            fontSize: 12,
            fontWeight: 400
          }
        },
        yAxis: {
          show: false
        },
        series: [
          {
            z: 1,
            type: "bar",
            barWidth: barWidth / 2,
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
              normal: {
                borderColor: "#00D7FFFF",
                color: "#0C1B30",
                borderWidth: 1
              }
            },
            barGap: 0
          },
          {
            z: 2,
            type: "bar",
            barWidth: barWidth / 2,
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
              normal: {
                borderColor: "#00D7FFFF",
                borderWidth: 1,
                color: "#0C1B30"
              }
            }
          },
          {
            z: 3,
            name: "底部",
            type: "pictorialBar",
            data: [1, 1, 1, 1, 1, 1, 1],
            symbol: "diamond",
            symbolOffset: [0, "50%"],
            symbolSize: [barWidth, 7],
            itemStyle: {
              normal: {
                borderColor: "#00D7FFFF",
                borderWidth: 1,
                color: "#0C1B30"
              }
            }
          },
          {
            z: 4,
            name: "上部1",
            type: "pictorialBar",
            symbolPosition: "end",
            data: [220, 182, 191, 234, 290, 330, 310],
            symbol: "diamond",
            symbolOffset: [0, "-50%"],
            symbolSize: [barWidth - 5, (15 * (barWidth - 5)) / barWidth],
            itemStyle: {
              normal: {
                borderColor: "#00D7FFFF",
                borderWidth: 1,
                color: "#0C1B30"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        setTimeout(() => {
          myChart.resize();
        }, 400);
      });
    }
  },
  mounted() {
    this.drawchart();
  }
};
</script>
<style lang="scss" scoped>
.histogram-title {
  position: absolute;
  top: 284px;
  bottom: 751px;
  left: 40px;
  width: 400px;
  height: 45px;
  background: linear-gradient(
    90deg,
    rgba(2, 89, 130, 0.29) 0%,
    rgba(3, 96, 140, 0) 100%
  );
}
.histogram-title-font {
  text-align: left;
  margin-left: 22px;
  margin-top: 12px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(0, 204, 255, 1);
}
.histogram-data {
  position: absolute;
  top: 340px;
  left: 40px;
  bottom: 211.5px;
  width: 400px;
  height: 318px;
  background: linear-gradient(
    -39deg,
    rgba(12, 116, 214, 0.1),
    rgba(19, 50, 121, 0.1)
  );
  border: 1px solid;
  border-image: radial-gradient(
      circle,
      rgba(13, 54, 78, 0.35),
      rgba(3, 110, 154, 0.35)
    )
    1 1;
}
.l1 {
  position: absolute;
  top: 284px;
  left: 40px;
  width: 3px;
  height: 3px;
  background: rgba(0, 215, 255, 1);
}
.l2 {
  position: absolute;
  top: 326px;
  left: 40px;
  width: 3px;
  height: 3px;
  background: rgba(0, 215, 255, 1);
}
.l3 {
  position: absolute;
  top: 339px;
  left: 40px;
  width: 3px;
  height: 3px;
  background: rgba(0, 215, 255, 1);
}
.l4 {
  position: absolute;
  top: 654px;
  left: 40px;
  width: 3px;
  height: 3px;
  background: rgba(0, 215, 255, 1);
}
.l5 {
  position: absolute;
  top: 339px;
  left: 437px;
  width: 3px;
  height: 3px;
  background: rgba(0, 215, 255, 1);
}
.l6 {
  position: absolute;
  top: 654px;
  left: 437px;
  width: 3px;
  height: 3px;
  background: rgba(0, 215, 255, 1);
}
#histogramChart {
  width: 100%;
  height: 100%;
  margin: 10px, 10px, 10px, 10px;
}
</style>