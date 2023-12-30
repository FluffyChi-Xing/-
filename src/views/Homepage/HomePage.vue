<script setup>
import {
  User,
  Bell,
  Goods
} from "@element-plus/icons-vue";



const color_1 = '#07e027'
const color_2 = '#c2c20e'
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

        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-left">

      </div>
      <div class="bottom-right">

      </div>
    </div>
  </div>
</template>

<style scoped>
@import "home.css";
</style>