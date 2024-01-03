<script setup>
import { Ticket} from "@element-plus/icons-vue";
import { ref } from 'vue'


const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<template>
  <div class="background">
    <div class="top">
      <Ticket style="width: 20px;height: 20px;margin-top: 15px;margin-left: 15px;margin-right: 5px"/>
      tab选项卡
    </div>
    <div class="container">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="未读消息（2）" name="first">
          <div class="item">
            <div class="item_1">
              <span style="line-height: 42px;color: dodgerblue;float: left">【系统通知】 该系统将于今晚凌晨两点到五点更新维护</span>
              <span style="line-height: 42px;margin-left: 50%;float: left">2023-04-19&nbsp;20:00:00</span>
              <el-button style="background: transparent;height: 30px;margin-top: 10px;margin-left: 20px">标为已读</el-button>
            </div>
            <el-divider style="margin-top: 10px;margin-bottom: 10px"/>
            <div class="item_1">
              <span style="line-height: 42px;color: dodgerblue;float: left">【系统通知】 该系统将于今晚九点停机</span>
              <span style="line-height: 42px;margin-left: 58.5%;float: left">2023-04-19&nbsp;21:00:00</span>
              <el-button style="background: transparent;height: 30px;margin-top: 10px;margin-left: 20px">标为已读</el-button>
            </div>
            <el-divider style="margin-top: 10px;margin-bottom: 10px"/>
            <div class="item_1">
              <el-button type="primary" style="height: 30px;margin-top: 10px">全部标为已读</el-button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已读消息（2）" name="second">
          <div class="item">
            <div class="item_1">
              <span style="line-height: 42px;float: left;text-overflow: ellipsis;overflow: hidden">【系统通知】 该系统将于今晚凌晨两点到五点更新维护</span>
              <span style="line-height: 42px;margin-left: 50%;float: left">2023-04-19&nbsp;20:00:00</span>
              <el-button style="background: transparent;height: 30px;margin-top: 10px;margin-left: 20px">放入回收站</el-button>
            </div>
            <el-divider style="margin-top: 10px;margin-bottom: 10px"/>
            <div class="item_1">
              <span style="line-height: 42px;float: left;text-overflow: ellipsis;overflow: hidden">【系统通知】 该系统将于今晚九点停机</span>
              <span style="line-height: 42px;margin-left: 58.5%;float: left">2023-04-19&nbsp;21:00:00</span>
              <el-button style="background: transparent;height: 30px;margin-top: 10px;margin-left: 20px">放入回收站</el-button>
            </div>
            <el-divider style="margin-top: 10px;margin-bottom: 10px"/>
            <div class="item_1">
              <el-button type="info" style="height: 30px;margin-top: 10px">全部放入回收站</el-button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="回收站（1）" name="third">
          <div class="item_1">
            <span style="line-height: 42px;float: left;">【系统通知】 该系统将于今晚凌晨两点到五点更新维护</span>
            <span style="line-height: 42px;margin-left: 50%;float: left">2023-04-19&nbsp;20:00:00</span>
            <el-button style="background: transparent;height: 30px;margin-top: 10px;margin-left: 20px">删除</el-button>
          </div>
          <el-divider style="margin-top: 10px;margin-bottom: 10px"/>
          <div class="item_1">
            <el-button type="danger" style="height: 30px;margin-top: 10px">全部删除</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped>
@import "tab.css";
</style>