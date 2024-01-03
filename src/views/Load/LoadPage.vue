<script setup>
import { UploadFilled } from '@element-plus/icons-vue'
</script>

<template>
  <div class="background">
    <div class="top">
      <span style="margin-left: 40px">文件上传</span>
    </div>
    <div class="container">
      <div class="text">
        支持拖拽
      </div>
      <div class="text-2">
        Element UI 自带文件上传组件，访问:
        <a href="https://element-plus.org/zh-CN/component/upload.html#%E6%8B%96%E6%8B%BD%E4%B8%8A%E4%BC%A0" target="_blank" style="color: #409eff">Element UI UPLOAD</a>
      </div>
      <div class="load">
        <el-upload
            class="upload-demo"
            drag
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            将文件拖到此处 或<em>点击上传</em>
          </div>
          <template #tip>
            <div class="el-upload__tip" style="text-align: left">
              只能上传jpg/png 图片， 且不超过 500kb
            </div>
          </template>
        </el-upload>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "load.css";
</style>