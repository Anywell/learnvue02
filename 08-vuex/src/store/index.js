import Vue from 'vue'
import Vuex from 'vuex'

import mutations from '/mutations'
import actions from "./actions"
import getters from "./getters"
import moduleA from "./modules/moduleA"


// 1. 安装Vuex插件
Vue.use(Vuex)

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
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

// 3.导出store组件
export default store
