import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const cpn = {
  template: `<div>{{message}}</div>`,
  data(){
    return {
      message: '我是组件中的message'
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render : function (createElement){
    // 1. 普通用法  createElement('标签', 标签数据对象(可以不传), ['内容数组']

    // return createElement('h2',
    //   {class : 'box'},
    //   ['Hello World!', createElement('button', ['按钮'])])

    // 2. 传入组件对象
    return createElement(cpn);
  }
})
