import Vue from 'vue'
import App from './App'
// 当导入的是一个文件夹下的index.js 时，index.js 可以省略。
// import router from './router/index.js'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

/* 打印导入的router组件*/
console.log(router);
