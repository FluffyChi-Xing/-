<script setup>
import {useCounterStore} from "@/stores/counter.js";
import {
  Files,
  Memo,
  Guide,
  Ticket,
  Box,
  PieChart,
  HomeFilled,
  Rank,
} from '@element-plus/icons-vue'
const store = useCounterStore()
</script>

<template>
  <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="store.isCollapse"
      background-color="#0b0b28"
      text-color="#ffffff"
  >
    <el-menu-item index="1">
      <el-icon><home-filled /></el-icon>
      <template #title>系统首页</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><memo /></el-icon>
      <template #title>基础表格</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><ticket /></el-icon>
      <template #title>tab选项卡</template>
    </el-menu-item>
    <el-sub-menu index="4">
      <template #title>
        <el-icon><files /></el-icon>
        <span>表单相关</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="5">
      <el-icon><box /></el-icon>
      <template #title>自定义图标</template>
    </el-menu-item>
    <el-menu-item index="6">
      <el-icon><pie-chart /></el-icon>
      <template #title>echarts图表</template>
    </el-menu-item>
    <el-sub-menu index="7">
      <template #title>
        <el-icon><rank /></el-icon>
        <span>拖拽组件</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="8">
      <el-icon><guide /></el-icon>
      <template #title>国际化</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
@import "menu.css";
</style>