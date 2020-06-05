<template>
<div class="lineChart" ref="lineChart"></div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    // 组件的名称
    name: '',
    // props 可以是数组或对象，用于接收来自父组件的数据
    props: {},
    mixins: [],
    // 数据绑定
    data () {
      return {
      }
    },
    // 组件
    components: {},
    // 注意，不应该使用箭头函数来定义 methods函数 或者  computed函数 (例如 aDouble: () => this.a * 2)。
    // 理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.a 将是 undefined
    // 方法
    methods: {
    getLineBaseOpt () {
    let lineOption = {
      color: ['rgba(235,97,0,1)', 'rgba(255, 197, 61, 1)'],
      title: {
        textStyle: {
          color: 'rgba(125, 161, 255, .7)',
          fontSize: '20',
          fontWeight: 'normal'
        }
        // padding: [20, 14]
      },
      tooltip: { // 自定义提示框提示内容跟样式
        backgroundColor: 'transparent',
        borderColor: '#000',
        trigger: 'axis',
        formatter: function (params) {
          let text = ''
          for (var i = 0; i < params.length; i++) {
            text = `<div style="font-size: 18px; font-family: Arial;"><p style="border: 1px solid rgba(20, 202, 255, 1); padding: 2px 16px; color: rgba(20, 202, 255, 1); text-align: center">${params[0].value}</p> <p style="border: 1px solid rgba(255, 197, 61, 1); padding: 2px 16px; text-align: center; color: rgba(255, 197, 61, 1); margin-top: 40px;">${params[1].value}</p></div>`
          }
          return text
        }
      },
      grid: {
        top: '10%',
        bottom: '12%',
        left: '4%',
        right: '4%',
        containLabel: true
      },
      legend: {
        data: ['实际', '计划'],
        inactiveColor: 'rgba(153, 153, 153, 0.6)',
        textStyle: {
          fontSize: 14, // 字体大小
          color: '#fff'
        },
        padding: [20, 0],
        itemGap: 20, // 设置间距
        icon: 'square' // 正方形
      },
      xAxis: {
        boundaryGap: false,
        axisTick: {
          show: false
        },
        type: 'category',
        splitLine: { // 坐标轴在 grid 区域中的分隔线。
          show: true,
          lineStyle: {
            // 使用深浅的间隔色
            color: ['#8C99B6'],
            opacity: 0.1
          }
        },
        axisLabel: {
          color: 'rgba(255, 255, 255, 0.6)',
          margin: 14
          // formatter: (value, index) => {
          //   console.log(index)
          // }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#8C99B6',
            opacity: 0.1
          }
        },
        data: Array.from(Array(12), (v, k) => {
          if (k < 9) return '0' + (k + 1)
          return '' + (k + 1)
        })
      },
      dataZoom: [
        {
          type: 'inside'
        },
        {
          textStyle: {
            color: '#fff'
          },
          fillerColor: '#146eff',
          borderColor: '#0092fe',
          handleStyle: {
            color: '#0092fe'
          },
          height: 22
        }],
      yAxis: [
        {
          name: '',
          type: 'value',
          scale: true,
          boundaryGap: ['0%', '40%'],
          axisLabel: {
            inside: false,
            margin: 14,
            show: true,
            color: 'rgba(255, 255, 255, 0.6)',
            formatter: (value) => { // y轴value
              if (value >= 10000 && value < 10000000) {
                value = value / 10000 + '万'
              } else if (value >= 10000000 && value < 100000000) {
                value = value / 10000000 + '千万'
              } else if (value >= 100000000) {
                value = value / 100000000 + '亿'
              }
              return value
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#8C99B6',
              opacity: 0.1
            }
          },
          splitLine: { // 坐标轴在 grid 区域中的分隔线。
            show: true,
            lineStyle: {
              // 使用深浅的间隔色
              color: ['#8C99B6'],
              opacity: 0.1
            }
          },
          axisTick: {
            show: false
          }
        }
      ],
      series: [
        {
          name: '实际',
          type: 'line',
          data: [20, 818, 512, 400, 753, 23, 180, 1490, 1200, 300, 234, 1111],
          smooth: true
        },
        {
          name: '计划',
          type: 'line',
          data: [ 120, 357, 284, 158, 690, 742, 171, 378, 703, 193, 408, 130 ],
          smooth: true,
          symbol: 'circle',
          symbolSize: 6, // 拐点圆的大小
          itemStyle: {
            normal: {
              borderColor: 'rgba(255, 197, 61, 1)', // 拐点边框颜色
              lineStyle: { // 线的样式
                // width: 2,
                type: 'solid' // 'dotted'为虚线，'solid'为实线
              }
            },
            emphasis: {
              color: 'rgba(255, 197, 61, 1)',
              borderColor: '#fff'
            }
          }
        }
      ]
    }
    return lineOption
    },
      initLineChart () {
        let dom = this.$refs.lineChart
        let myChart = echarts.init(dom)
        let option = this.getLineBaseOpt()
        let obj = {
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                  offset: 0,
                  // color: '#64B2ED'
                  color: 'rgba(20, 202, 255, 1)'
                },
                  {
                    offset: 0.6,
                    color: 'rgba(20, 202, 255, 0.3)',
                    opacity: 0.1
                  },
                  {
                    offset: 1,
                    color: 'rgba(20, 202, 255, 0.1)',
                    opacity: 0.1
                  }
                ]
              )
            }
            // color: '#57c5f7',
            // opacity: 0.1
          },
          // showSymbol: false, // 当鼠标移入时才显示移入那个区域的小圆点
          symbol: 'circle',
          symbolSize: 6, // 拐点圆的大小
          itemStyle: {
            normal: {
              borderColor: '#57c5f7', // 拐点边框颜色
              lineStyle: { // 线的样式
                // width: 2,
                type: 'solid' // 'dotted'为虚线，'solid'为实线
              }
            },
            emphasis: {
              color: '#57c5f7',
              borderColor: '#fff'
              // lineStyle: { // 系列级个性化折线样式
              //   // width: 0.5,
              //   type: 'dotted',
              //   color: '#57c5f7' // 折线的颜色
              // }
            }
          }
        }
        option.series[0] = {...option.series[0], ...obj}
        if (option && typeof option === 'object') {
          myChart.setOption(option, true)
          window.addEventListener('resize', () => {
            myChart.resize()
          })
        }
      }
    },
    // 计算属性
    computed: {},
    // 监听
    watch: {
      // 监听路由变化
    },
    // 常用钩子函数，总共有8个，可以参照vue的生命周期看
    // 完成了 data 数据的初始化，el没有，就是说页面的dom没有完成转化，还是 {{data}} 这种
    created () {
    },
    // 完成挂载，相当于dom ready
    mounted () {
      this.initLineChart()
    },
    // 销毁，可以做一些定时器的销毁,缓存的清除等操作
    destroyed () {
    }
  }
</script>

<style scoped>
.lineChart{
  width: 100%;
  height: 500px;
}
</style>