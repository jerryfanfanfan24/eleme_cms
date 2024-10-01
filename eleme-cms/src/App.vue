<template>
  <div class="app">
    <h2>App</h2>
    <router-link to="/main">主页</router-link>
    <router-link to="/login">登录</router-link>
    <router-view></router-view>

    <div class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div>

    <div>
      <el-link href="https://element-plus.org" target="_blank">default</el-link>
      <el-link type="primary">primary</el-link>
      <el-link type="success">success</el-link>
      <el-link type="warning">warning</el-link>
      <el-link type="danger">danger</el-link>
      <el-link type="info">info</el-link>
    </div>

    <div class="slider-demo-block">
      <span class="demonstration">Default value</span>
      <el-slider v-model="value1" />
    </div>
    <div class="slider-demo-block">
      <span class="demonstration">Customized initial value</span>
      <el-slider v-model="value2" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
