<script setup>
import { ref } from "vue";
import LayoutMenu from "@/components/Layout/LayoutMenu.vue";
import {Bell, Fold, Rank} from "@element-plus/icons-vue";
import {useCounterStore} from "@/stores/counter.js";
import router from "@/router/index.js";
import {useRoute} from "vue-router";
const store = useCounterStore()
const route = useRoute()
const control = () => {
  store.isCollapse = !store.isCollapse
}
const exit = () => {
  router.push('/login')
}

//tag

const list = ref(route.matched)

console.log(list)
const handleClose = (tag) => {
  list.value.splice(list.value.indexOf(tag), 1)
}
const refresh = () => {
  location.reload()
}
</script>

<template>
  <div class="background">
    <div class="layout-top">
      <div class="control-btn">
        <el-button :icon="Fold" style="border: none;width: 50px;height: 50px;background-color: transparent;color: white" @click="control"/>
      </div>
      <div class="layout-slagord" @click="refresh">
        后台管理系统
      </div>
      <div class="layout-control-bar">
        <div class="control-1">
          <el-button :icon="Rank" style="width: 50px;height: 50px;
border: none;background-color: transparent;color: white"/>
        </div>
        <div class="control-1">
          <el-button :icon="Bell" style="width: 50px;height: 50px;
border: none;background-color: transparent;color: white"/>
        </div>
        <div class="control-1">
          <img src="../../assets/images/avatar.png">
        </div>
        <div class="control-2">
          <el-popover placement="bottom" :width="100" trigger="click">
            <template #reference>
              <el-button style="margin-right: 16px;width: 100%;border: none;background-color: transparent;color: white">admin</el-button>
            </template>
            <el-button style="width: 100%;border: none" @click="exit">退出登录</el-button>
          </el-popover>
        </div>
      </div>
    </div>
    <div class="layout-bottom">
      <LayoutMenu/>
      <div class="layout-right">
        <div class="right-top">
          <el-tag
              v-for="tag in list"
              :key="tag"
              class="mx-1"
              closable
              :disable-transitions="false"
              @close="handleClose(tag.name)"
              style="height: 30px;margin-top: 10px;margin-right: 10px;float: left;margin-left: 10px"
          >
            {{tag.name }}
          </el-tag>
        </div>
        <RouterView/>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "layout.css";
</style>
