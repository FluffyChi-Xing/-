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
      default-active="/"
      class="el-menu-vertical-demo"
      :collapse="store.isCollapse"
      background-color="#0b0b28"
      text-color="#ffffff"
      router
  >
    <el-menu-item index="/">
      <el-icon><home-filled /></el-icon>
      <template #title>系统首页</template>
    </el-menu-item>
    <el-menu-item index="/table">
      <el-icon><memo /></el-icon>
      <template #title>基础表格</template>
    </el-menu-item>
    <el-menu-item index="/tab">
      <el-icon><ticket /></el-icon>
      <template #title>tab选项卡</template>
    </el-menu-item>
    <el-sub-menu index="4">
      <template #title>
        <el-icon><files /></el-icon>
        <span>表单相关</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/form">基本表单</el-menu-item>
        <el-menu-item index="/load">文件上传</el-menu-item>
        <el-sub-menu index="4-1">
          <template #title>
            <span>三级菜单</span>
          </template>
          <el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/text">富文本编辑器</el-menu-item>
              <el-menu-item index="/markdown">Markdown编辑器</el-menu-item>
            </el-menu-item-group>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="/icon">
      <el-icon><box /></el-icon>
      <template #title>自定义图标</template>
    </el-menu-item>
    <el-menu-item index="/echarts">
      <el-icon><pie-chart /></el-icon>
      <template #title>echarts图表</template>
    </el-menu-item>
    <el-menu-item index="/rank">
      <el-icon><rank /></el-icon>
      <template #title>拖拽组件</template>
    </el-menu-item>
    <el-menu-item index="8">
      <el-icon><guide /></el-icon>
      <template #title>国际化</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
@import "menu.css";
</style>