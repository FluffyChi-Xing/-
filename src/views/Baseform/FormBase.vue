<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <div class="background">
    <div class="top">
      <span style="margin-left: 40px">基础表单</span>
    </div>
    <div class="container">
      <div class="box">
        <el-form
            :model="form"
            label-width="120px"
        >
          <el-form-item label="表单名称">
            <el-input v-model="form.name" style="width: 40%" />
          </el-form-item>
          <el-form-item label="区域选择">
            <el-select v-model="form.region" placeholder="请选择地区">
              <el-option label="上海" value="shanghai" />
              <el-option label="北京" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="时间选择">
            <el-col :span="11">
              <el-date-picker
                  v-model="form.date1"
                  type="date"
                  placeholder="选一个日期"
                  style="width: 300px"
              />
            </el-col>
            <el-col :span="2" class="text-center">
              <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
              <el-time-picker
                  v-model="form.date2"
                  placeholder="选一个时间"
                  style="width: 300px"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="选择开关">
            <el-switch v-model="form.delivery" />
          </el-form-item>
          <el-form-item label="多选框">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="多选一" name="type" />
              <el-checkbox label="多选二" name="type" />
              <el-checkbox label="多选三" name="type" />
              <el-checkbox label="多选四" name="type" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="单选框">
            <el-radio-group v-model="form.resource">
              <el-radio label="选项一" />
              <el-radio label="选项二" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文本框">
            <el-input v-model="form.desc" type="textarea"  style="width: 40%;resize: none"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">表单提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "form.css";
</style>