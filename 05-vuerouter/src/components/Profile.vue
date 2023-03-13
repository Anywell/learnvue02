<template>
  <div>
    <h2>我是Profile组件</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
    <h3>{{$route.query.country}}</h3>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created(){
    console.log('Profile created.')
  },
  destroyed() {
    console.log('Profile destroyed.')
  }
}
</script>

<style scoped>

</style>
