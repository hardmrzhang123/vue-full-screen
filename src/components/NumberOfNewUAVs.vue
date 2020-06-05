<template>
  <div class="NumberOfNewUAVs">
    <div class="NumberOfNewUAVs-title">
      <!-- 区域数据分布TOP10 -->
      <div class="NumberOfNewUAVs-title-font">新增无人机数量</div>
    </div>
    <div class="NumberOfNewUAVs-data">
      <div id="myChart"></div>
    </div>
    <div class="l1"></div>
    <div class="l2"></div>
    <div class="l3"></div>
    <div class="l4"></div>
    <div class="l5"></div>
    <div class="l6"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
    tt();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        xAxis: {
          name: "(时间)",
          boundaryGap: false, //解决数值与线不对齐的问题
          type: "category",
          data: [
            "",
            "10.1",
            "10.2",
            "10.3",
            "10.4",
            "10.5",
            "10.6",
            "10.7",
            ""
          ],
          //网格样式
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#142E46"],
              width: 2,
              type: "solid"
            }
          },
          nameTextStyle: {
            fontSize: 12,
            color: "#03B0D8",
            fontWeight: 400,
            align: "left"
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#03AFD7",
              fontSize: "12px",
              family: "PingFangSC-Regular",
              weight: "Regular"
            }
          }
        },
        yAxis: {
          name: "(人次)",
          nameLocation: "end",
          scale: false,
          boundaryGap: false, //解决数值与线不对齐的问题
          type: "value",
          // data: ["100", "200", "300", "400", "500", "600"],
          //网格样式
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#142E46"],
              width: 2,
              type: "solid"
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#03AFD7",
              fontSize: "12px",
              family: "PingFangSC-Regular",
              weight: "Regular"
            }
          },
          nameTextStyle: {
            fontSize: 12,
            color: "rgba(3,175,215,1)",
            fontWeight: 400,
            align: "right",
            lineHeight: 16
          }
        },
        grid: {
          left: "8%",
          right: "10%",
          top: "15%",
          bottom: "5%",
          containLabel: true
        },
        series: [
          {
            name: "新增无人机",
            data: ["", 200, 300, 250, 400, 300, 100, 200],
            type: "line",
            smooth: true,
            symbol: "none",
            areaStyle: {
              normal: {
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#31B06C" // 0% 处的颜色
                    },
                    {
                      offset: 0.7,
                      color: "rgba(220,56,129,0)" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                }
              }
            },
            itemStyle: {
              normal: {
                // 拐点上显示数值
                label: {
                  show: true
                },
                borderColor: "#31B06C", // 拐点边框颜色
                lineStyle: {
                  width: 6, // 设置线宽
                  type: "solid", //'dotted'虚线 'solid'实线
                  color: "#32B16C" //改变折线颜色
                }
              }
            }
          }
        ],
        legend: {
          align: "left",
          itemWidth: 21,
          itemHeight: 2,
          borderColor: "rgba(3,176,216,1)",
          data: ["新增无人机"],
          right: 85,
          top: 31,
          textStyle: {
            fontSize: 12,
            color: "rgba(3,176,216,1)"
          }
        }
      });
      window.onresize = function() {
        setTimeout(()=>{
              myChart.resize();
        },400) 
      };
      // window.tt = function() {
      //   myChart.resize();
      // };

      // window.addEventListener('resize',function(){
      //   myChart.resize();
      // })
    }
  }
};
</script>
<style lang="scss" scoped>
// .NumberOfNewUAVs{
//   position: absolute;
//   z-index: 0;
// }
.NumberOfNewUAVs-title {
  position: absolute;
  top: 284px;
  right: 40px;
  width: 400px;
  height: 45px;
  background: linear-gradient(
    90deg,
    rgba(2, 89, 130, 0.29) 0%,
    rgba(3, 96, 140, 0) 100%
  );
}
.NumberOfNewUAVs-title-font {
  text-align: left;
  margin-left: 22px;
  margin-top: 12px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(0, 204, 255, 1);
}
.NumberOfNewUAVs-data {
  position: absolute;
  top: 340px;
  right: 40px;
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
  right: 437px;
  width: 3px;
  height: 3px;
  background: rgba(0, 215, 255, 1);
}
.l2 {
  position: absolute;
  top: 326px;
  right: 437px;
  width: 3px;
  height: 3px;
  background: rgba(0, 215, 255, 1);
}
.l3 {
  position: absolute;
  top: 339px;
  right: 437px;
  width: 3px;
  height: 3px;
  background: rgba(0, 215, 255, 1);
}
.l4 {
  position: absolute;
  top: 654px;
  right: 437px;
  width: 3px;
  height: 3px;
  background: rgba(0, 215, 255, 1);
}
.l5 {
  position: absolute;
  top: 339px;
  right: 40px;
  width: 3px;
  height: 3px;
  background: rgba(0, 215, 255, 1);
}
.l6 {
  position: absolute;
  top: 654px;
  right: 40px;
  width: 3px;
  height: 3px;
  background: rgba(0, 215, 255, 1);
}
#myChart {
  width: 400px;
  height: 318px;
  margin-right: 100px;
}

// .lineChart {
//   width: 100%;
//   height: 500px;
// }
</style>