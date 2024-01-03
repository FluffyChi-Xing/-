<script setup>
import { h } from 'vue'
import router from "@/router/index.js";
import {ElNotification} from "element-plus";
const back = () => {
  router.push('/')
  ElNotification({
    title: '通知',
    message: h('i', { style: 'color: teal' }, '返回首页'),
  })
}
</script>
<template>
  <div class="background">
    <div class="container">
      <el-button type="primary" round style="margin-top: 20%;margin-left: auto;margin-right: auto" @click="back">返回</el-button>
    </div>
  </div>
</template>

<style scoped>
@import "404.css";
</style>
