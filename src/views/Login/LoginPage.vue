<script setup>
import { ref } from "vue";
import {useCounterStore} from "@/stores/counter.js";
import {Lock, User} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus";
import router from "@/router/index.js";




const store = useCounterStore()
const user = ref({
  username: 'Djtu@1234',
  password: '114514'
})
const open = () => {
  if (user.value.password === '123456' && user.value.username === 'admin'){
    ElMessage({
      message: '登陆成功!',
      type: 'success',
    })
    router.push('/');
    store.userinfo.username = user.value.username
    store.userinfo.password = user.value.password
  }else {
    ElMessage({
      message: '密码或用户名错误!',
      type: 'error',
    })
  }
}
</script>

<template>
  <div class="background">
    <div class="layout">
      <div class="top">
        后台管理系统
      </div>
      <el-divider/>
      <div class="bottom">
        <el-input placeholder="请输入用户名" :prefix-icon="User" style="margin-bottom: 30px" clearable v-model="user.username"/>
        <el-input placeholder="请输入密码" :prefix-icon="Lock" type="password" show-password clearable v-model="user.password"/>
        <el-button type="primary" style="width: 100%;margin-top: 30px" @click="open">登录</el-button>
        <p style="color: white;font-size: 10px;margin-top: 20px">Tips:用户名和密码分别是admin/123456</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "login.css";
</style>