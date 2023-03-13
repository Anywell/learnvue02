<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./components/MainTabBar.vue";
export default {
  name: 'App',
  components: {
   MainTabBar
  }
}
</script>

<style>
/* 引用css样式，使用@import */
  @import "./assets/css/base.css";

</style>
