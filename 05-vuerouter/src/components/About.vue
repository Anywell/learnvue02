<template>
  <div>
    <h2>我是about页</h2>
    <p>我是about页内容</p>
  </div>
</template>

<script>
export default {
  name: "about",
  created(){
    console.log('About created');
    //document.title = '关于';
  },
  destroyed() {
    console.log('About destroyed');

  }
}
</script>

<style scoped>

</style>
