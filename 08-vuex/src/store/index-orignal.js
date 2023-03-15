import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from "./mutations-types";


// 1. 安装Vuex插件
Vue.use(Vuex)

const moduleA = {
  state: {
    name: 'tom'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullName(state) {
      return 'hello, ' + state.name
    },
    fullName2(state, getters) {
      return getters.fullName + '22222'
    },
    fullName3(state, getters, routeState) {
      return getters.fullName2 + routeState.counter
    }
  },
  actions: {
    aUpdateName(context){
      setTimeout(() =>{
        context.commit('updateName', 'lisi')
      })
    }
  }

}

const state = {
  counter: 1000,
    students: [
    {id: 11, name: 'caocao', age: 30},
    {id: 12, name: 'liubei', age: 40},
    {id: 13, name: 'sunquan', age: 50},
    {id: 14, name: 'guanyu', age: 50}
  ],
    info: {
    name: 'kobe',
      age: 40,
      height: 1.98
  }
}

// 2. 创建对象
const store = new Vuex.Store({


  mutations: {
    // 定义方法，默认有个state参数
    // increment(state){
    //   state.counter++;
    // },
    [INCREMENT](){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    // incrementCount(state, count){
    //   state.counter += count;
    // },
    // 此时的payload是一个对象
    incrementCount(state, payload){
      console.log(payload)
      state.counter += payload.count;
    },
    addStudent(state, stu){
      state.students.push(stu)
    },
    updateInfo(state) {

       state.info.name = 'jack'
  // 错误代码，不能在mutation里进行异步操作
      // setTimeout(() => {
      //   state.info.name = 'rose'
      // }, 3000)
    }
      // state.info['address'] = '洛杉矶'、
      // 添加属性，响应式
    //   Vue.set(state.info, 'address', '北京')
    //   // 删除属性，响应式
    //   Vue.delete(state.info, 'age')
    // }
  },
  actions: {
    // 默认属性 context：上下文，理解为store对象，可以使用payload接收参数
    aUpdateInfo(context, payload){
      return new Promise((resolve, reject) => {
        setTimeout(() =>{
          // 修改state
          // context.commit('updateInfo')
          // console.log(payload.message)
          // // 调用回调函数
          // payload.success();
          console.log(payload)
          resolve('info信息修改完成了')
        }, 1000)
      })
    }
  },
  getters: { //类似以computed计算属性
    powerCounter(state){
      return state.counter * state.counter;
    },
    more40Stu(state){
      return state.students.filter(s => s.age > 40)
    },
    // getters 也可以作为方法的参数
    more40StuLength(state, getters){
      return getters.more40Stu.length;
    },
    // 传入自定义参数，返回一个函数，函数参数为要传入的参数
    moreAgesStu(state){
      return function(age){
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {
    a: moduleA
  }

})

// 3.导出store组件
export default store
