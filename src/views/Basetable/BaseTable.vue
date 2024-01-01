<script setup>
import {Edit, Memo, Search } from "@element-plus/icons-vue";
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    value: '大连',
    label: '大连',
  },
  {
    value: '北京',
    label: '北京',
  },
  {
    value: '上海',
    label: '上海',
  },
  {
    value: '天津',
    label: '天津',
  },
  {
    value: '深圳',
    label: '深圳',
  },
]

const tableData = [
  {
    id: '0001',
    account: '1000',
    date: '2016-10-03',
    statues: '在线',
    name: 'Jack',
    address: '大连',
  },
  {
    id: '0023',
    account: '700',
    date: '2019-05-13',
    statues: '在线',
    name: 'Tom',
    address: '北京',
  },
  {
    id: '1101',
    account: '90',
    date: '2019-04-10',
    statues: '在线',
    name: 'Bob',
    address: '上海',
  },
  {
    id: '0043',
    account: '1003',
    date: '2018-05-03',
    statues: '离线',
    name: 'John',
    address: '深圳',
  },
]
const username = ref('')
</script>

<template>
  <div class="background">
    <div class="top">
      <Memo style="width: 20px;height: 20px;margin-top: 15px;margin-left: 15px;margin-right: 5px"/>
      基础表格
    </div>
    <div class="container">
      <div class="item-1">
        <el-button type="primary" :icon="Edit" style="height: 30px;margin-right: 10px">批量删除</el-button>
        <el-select v-model="value" placeholder="地址" style="width: 150px;margin-right: 10px">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
          />
        </el-select>
        <el-input style="width: 300px;margin-right: 10px" placeholder="用户名" clearable v-model="username"/>
        <el-button :icon="Search" type="primary">搜索</el-button>
      </div>
      <div class="item-2">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="id" label="ID" width="180" />
          <el-table-column prop="name" label="用户名" width="180" />
          <el-table-column prop="address" label="地址" />
          <el-table-column prop="statues" label="状态" />
          <el-table-column prop="date" label="入站时间" width="180" />
        </el-table>
      </div>
      <div class="item-3">
        <el-pagination background layout="prev, pager, next" :total="1" style="float: right"/>
        <span style="float: right;line-height: 30px;margin-right: 10px">共 0 条</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "form.css";
</style>