<template>
  <div id="app">
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--&lt;!&ndash;    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>&ndash;&gt;-->
<!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace>关于</router-link>-->
    <!--    相当于站位作用，定义组件显示的位置 -->
<!--    <router-view></router-view>-->
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
    <h2>我是App组件</h2>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- 使用 v-bind 动态绑定url-->
<!--    <router-link :to="'/user/' + userId">用户</router-link>-->
<!--&lt;!&ndash;     使用v-bind 动态绑定对象，query属性也是个对象&ndash;&gt;-->
<!--    <router-link :to="{path: '/profile', query: {name: 'libai', age: '1300', country: 'Tang'}}">-->
<!--      档案</router-link>-->

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

<!--    排除掉 Profile组件，不对其缓存 -->
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'any'
    }
  },
  methods: {
    homeClick(){
      // 通过代码的方式修改路径,VueRouter组件中有一个 $router 属性，其实就是index.js中定义的router对象。
      // this.$router.push('/home')
      this.$router.replace('/home')
      console.log("homeClick")
    },
    aboutClick(){
      this.$router.push('/about')
      console.log("aboutClick")
    },
    userClick(){
      this.$router.push('/user/' + this.userId)
    },
    profileClick(){
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 35,
          country: 'America'
        }
      })
    }
  }
}
</script>

<style>
</style>
