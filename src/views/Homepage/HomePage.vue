<script setup>
import {
  User,
  Bell,
  Goods
} from "@element-plus/icons-vue";
import {onMounted} from "vue";
import * as echarts from 'echarts';
import { ref } from "vue";

const tableData = [
  {
    date: '2016-05-03',
    statues: '完成',
    message: '修100个bug',
  },
  {
    date: '2016-05-02',
    statues: '完成',
    message: '修100个bug',
  },
  {
    date: '2016-05-04',
    statues: '未完成',
    message: '修100个bug',
  },
  {
    date: '2016-05-01',
    statues: '未完成',
    message: '修100个bug',
  },
]

const color_1 = '#07e027'
const color_2 = '#c2c20e'

//echarts图表
onMounted(() => {
  const myChart = echarts.init(document.getElementById('box_1'));
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
  const myChart_2 = echarts.init(document.getElementById('box_2'));
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
})

//抽屉
const drawer = ref(false)
const drawer_2 = ref(false)
const radio = ref(1)
</script>

<template>
  <div class="background">
    <div class="top">
      <div class="top-left">
        <div class="top-left-top" style="margin-bottom: 15px">
          <div class="user-info">
            <div class="user-avatar"></div>
            <div class="information">
              <p>admin</p>
              <p>普通用户</p>
            </div>
          </div>
          <el-divider/>
          <div class="user-info-2">
            <p>上次登录时间:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023-09-09</p>
            <p>上次登陆地点:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大连市</p>
          </div>
        </div>
        <div class="top-left-top">
          <div class="more">语言详情</div>
          <el-divider/>
          <div class="progress">
            <div class="demo-progress">
              <p style="text-align: left">Vue</p>
              <el-progress :percentage="90" :color="color_1" />
              <p style="text-align: left">Javascript</p>
              <el-progress :percentage="67" :color="color_2" />
              <p style="text-align: left">Css</p>
              <el-progress :percentage="43" />
            </div>
          </div>
        </div>
      </div>
      <div class="top-right">
        <div class="top-right-top" style="margin-bottom: 15px">
          <div class="top-item">
            <div class="item-icon" style="background-color: dodgerblue">
              <User style="color: white"/>
            </div>
            <div class="item-2">
              <p style="line-height: 20px;color: dodgerblue;font-size: 20px;font-weight: bold">1234</p>
              <p style="line-height: 20px;font-size: 15px">用户访问量</p>
            </div>
          </div>
          <div class="top-item">
            <div class="item-icon" style="background-color: limegreen">
              <Bell style="color: white"/>
            </div>
            <div class="item-2">
              <p style="line-height: 20px;color: limegreen;font-size: 20px;font-weight: bold">321</p>
              <p style="line-height: 20px;font-size: 15px">系统消息</p>
            </div>
          </div>
          <div class="top-item">
            <div class="item-icon" style="background-color: orangered">
              <Goods style="color: white"/>
            </div>
            <div class="item-2">
              <p style="line-height: 20px;color: orangered;font-size: 20px;font-weight: bold">5000</p>
              <p style="line-height: 20px;font-size: 15px">数量</p>
            </div>
          </div>
        </div>
        <div class="top-right-bottom">
          <div class="top-2">
            待办事项
            <el-button style="float: right" type="primary" @click="drawer_2 = true">添加</el-button>
          </div>
          <el-divider/>
          <div class="table">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column fixed="right" label="操作" width="120">
                <template #default>
                  <el-button link type="primary" size="small"
                  >删除</el-button
                  >
                  <el-button link type="primary" size="small" @click="drawer = true">修改</el-button>
                </template>
              </el-table-column>
              <el-table-column prop="statues" label="状态" width="180" />
              <el-table-column prop="message" label="内容" />
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-left">
        <div class="title-1">
          最近七天用户访问量
        </div>
        <div class="container-1" id="box_1">

        </div>
      </div>
      <div class="bottom-right">
        <div class="title-1">
          最近七天用户访问趋势
        </div>
        <div class="container-1" id="box_2">

        </div>
      </div>
    </div>
  </div>
  <el-drawer v-model="drawer" title="I am the title" :with-header="false">
    <span>修改事项</span>
    <el-input placeholder="请输入内容" style="margin-top: 50px"/>
    <el-radio-group style="margin-top: 50px" v-model="radio">
      <el-radio :label="1">已完成</el-radio>
      <el-radio :label="2">未完成</el-radio>
    </el-radio-group>
    <el-button style="width: 100%;margin-top: 50px" type="primary">确认修改</el-button>
  </el-drawer>
  <el-drawer v-model="drawer_2" title="I am the title" :with-header="false">
    <span>添加!</span>
  </el-drawer>
</template>

<style scoped>
@import "home.css";
</style>