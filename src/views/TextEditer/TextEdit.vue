<script setup>

import {QuillEditor} from "@vueup/vue-quill";
</script>

<template>
  <div class="background">
    <div class="top">
      <span style="margin-left: 40px">富文本编辑器</span>
    </div>
    <div class="container">
      <div class="top-1">
        Vue-Quill-Editor: 基于Quill适用于Vue3的富文本编辑器，访问地址:
        <a href="https://quilljs.com/" target="_blank" style="color: #409eff">Quill-Editor</a>
      </div>
      <div class="text">
        <QuillEditor theme="snow"/>
      </div>
      <div class="btn">
        <el-button type="primary" style="height: 30px;margin-top: 10px;float: left;margin-left: 20px">提交</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "Text.css";
</style>