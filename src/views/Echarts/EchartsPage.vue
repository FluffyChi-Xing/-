<script setup>
import * as echarts from 'echarts';
import {onMounted} from "vue";

onMounted(() => {
  const myChart = echarts.init(document.getElementById('a'));
  const option = {
    xAxis: {
      data: ['2023/12/09', '2023/12/10', '2023/12/11', '2023/12/12', '2023/12/13']
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: [900, 878, 650, 704, 435, 329, 128]
      }
    ]
  };
  myChart.setOption(option)
  const myChart_2 = echarts.init(document.getElementById('b'));
  const option_2 =  {
    xAxis: {
      type: 'category',
      data: ['2023/12/09', '2023/12/10', '2023/12/11', '2023/12/12', '2023/12/13']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [520, 400, 550, 120 , 350],
        type: 'line',
        label: {
          show: true,
          position: 'top',
          textStyle: {
            fontSize: 20
          }
        }
      }
    ]
  };
  myChart_2.setOption(option_2)
  const myChart_3 = echarts.init(document.getElementById('c'))
  const option_3 = {
    xAxis: {
      data: ['A', 'B', 'C', 'D', 'E']
    },
    yAxis: {},
    series: [
      {
        data: [10, 22, 28, 23, 19],
        type: 'line',
        areaStyle: {}
      },
      {
        data: [25, 14, 23, 35, 10],
        type: 'line',
        areaStyle: {
          color: '#ff0',
          opacity: 0.5
        }
      }
    ]
  }
  myChart_3.setOption(option_3)
})
</script>

<template>
  <div class="background">
    <div class="top" style="margin-left: 40px">
      Echarts图表
    </div>
    <div class="container">
      <div id="a"></div>
      <div id="b"></div>
      <div id="c"></div>
    </div>
  </div>
</template>

<style scoped>
@import "echarts.css";
</style>