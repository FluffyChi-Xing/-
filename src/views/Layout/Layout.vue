<script setup>
import LayoutMenu from "@/components/Layout/LayoutMenu.vue";
import {Fold} from "@element-plus/icons-vue";
import {useCounterStore} from "@/stores/counter.js";
const store = useCounterStore()
const control = () => {
  store.isCollapse = !store.isCollapse
}
</script>

<template>
  <div class="background">
    <div class="layout-top">
      <div class="control-btn">
        <el-button :icon="Fold" style="border: none;width: 50px;height: 50px;background-color: transparent;color: white" @click="control"/>
      </div>
      <div class="layout-slagord">
        后台管理系统
      </div>
    </div>
    <div class="layout-bottom">
      <LayoutMenu/>
      <div class="layout-right">
        <div class="right-top">

        </div>
        <RouterView/>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "layout.css";
</style>
