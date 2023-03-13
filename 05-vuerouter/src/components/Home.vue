<template>
  <div>
    <h2>我是home首页</h2>
    <p>我是home首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  date(){
    return {
      message: '你好啊'
    }
  },
  created(){
    console.log('Home created');
    //document.title = '首页'
  },
  mounted() {
    console.log('Home mounted');
  },
  destroyed(){
    console.log('Home destroyed');
  }
}
</script>

<style scoped>

</style>
