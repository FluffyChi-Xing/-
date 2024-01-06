<script setup>
import { ref } from "vue";
import { Edit } from "@element-plus/icons-vue";
const num = ref(12)
</script>

<template>
  <div class="background">
    <div class="top">
      <span style="margin-left: 40px">Icon图标</span>
    </div>
    <div class="container">
      <div class="title-1">
        <div class="item_1">
          使用方法
        </div>
        <div class="item_2">
          直接通过类名设置为 el-icon-name 来使用，示例如下:
        </div>
      </div>
      <div class="title-1" style="margin-top: 50px">
        <div class="icon" v-for="item in num" :key="item">
          <Edit/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "icon.css";
</style>