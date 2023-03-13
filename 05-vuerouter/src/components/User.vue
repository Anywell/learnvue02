<template>
  <div>
    <h2>我是User页面</h2>
    <p>我是User页面内容</p>
<!--    下面两个相同 -->
    <h2>{{userId}}</h2>
    <h2>{{$route.params.id}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId(){
     // $route 为当前活跃的路由映射，即点击了哪个,此处的userId即为 inde.js 中path属性中配置的userId，二者名字一致即可。
      return this.$route.params.id
    }
  },
  created(){
    console.log('User created.')
  },
  destroyed() {
    console.log('User destroyed.')
  },
  methods: {
    btnClick(){
      console.log(this.$router);
      console.log(this.$route);
    },

  }
}
</script>

<style scoped>

</style>
