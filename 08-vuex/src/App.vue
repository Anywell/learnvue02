<template>
  <div id="app">
<!--    <h2>APP: {{$store.state.counter}}</h2>-->
<!--    <h2>{{message}}</h2>-->
<!--    <button @click="addCounter">+</button>-->
<!--    <button @click="subCounter">-</button>-->
<!--    <button @click="addCount(5)">+5</button>-->
<!--    <button @click="subCounter">-</button>-->
<!--    <button @click="addStudent">添加学生</button>-->

<!--    <h2>-&#45;&#45;&#45;&#45;App组件，getters的使用，方法名后不能有括号-&#45;&#45;&#45;&#45;</h2>-->
<!--    <h2>{{$store.getters.powerCounter}}</h2>-->

<!--    <h2>获取年龄大于30的学生：{{more30Stu}}</h2>-->
<!--    <h2>获取年龄大于40的学生：{{$store.getters.more40Stu}}</h2>-->
<!--    <h2>获取年龄大于40的学生人数：{{$store.getters.more40StuLength}}</h2>-->
<!--    <h2>获取年龄大于指定年龄的学生：{{$store.getters.moreAgesStu(30)}}</h2>-->

<!--    <h2>&#45;&#45;&#45;&#45;App组件：info对象是否是响应式的&#45;&#45;&#45;&#45;</h2>-->
<!--    <h2>{{$store.state.info}}</h2>-->
<!--    <button @click="updateInfo">修改info信息</button>-->

    <h2>----App组件：Modules中的内容----</h2>
    <h2>name: {{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>

    <h2>fullName: {{$store.getters.fullName}}</h2>
    <h2>fullName2: {{$store.getters.fullName2}}</h2>
    <h2>fullName3: {{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>


    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'
  import {
    INCREMENT
  } from "./store/mutations-types";

  export default {
  name: 'App',
  data(){
    return {
      message: '你好啊'
    }
  },
  computed: {
    more30Stu(){
      return this.$store.state.students.filter(s => {
        return s.age > 30
      })
    }
  },
  components: {
    HelloVuex
  },
  methods: {
    addCounter(){
      // 通过commit调用方法
      // this.$store.commit('increment')
      this.$store.commit(INCREMENT)
    },
    subCounter(){
      this.$store.commit('decrement')
    },
    addCount(count){
      // 1. 普通的提交风格
      // this.$store.commit('incrementCount', count)

      // 2.特殊的提交风格
      this.$store.commit({
        type: 'incrementCount',
        count
      })
    },
    addStudent(){
      const stu = {id: 20, name: 'zhaoyun', age: 35}
      this.$store.commit('addStudent', stu)
    },
    updateInfo(){
      // this.$store.commit('updateInfo')
      // this.$store.dispatch("aUpdateInfo", '我是参数payload')
      // 传递对象参数，可以传递回调函数
      // this.$store.dispatch("aUpdateInfo", {
      //   message: '我是携带的信息',
      //   success: ()=> {
      //     console.log('回调函数success')
      //   }
      // })

      this.$store
        .dispatch('aUpdateInfo', '我是携带的信息')
        .then((res) => {
          console.log('里面完成了info修改')
          console.log(res)
        })
    },
    updateName(){
      this.$store.commit('updateName', 'jerry')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>

</style>
