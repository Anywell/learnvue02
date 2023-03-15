import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


// 1. axios基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get',
// }).then(res => {
//   console.log(res);
// })


// axios({
//   // url: 'http://123.207.32.32:8000/home/data?type=pop&page=3',
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// 2. axios发送并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 3
//   }
// })]).then(results => {
//   console.log(results)
//
//   })

// 3. 使用全局的axios配置进行网络请求
// axios.defaults.baseURL='http://123.207.32.32:8000';
// axios.defaults.timeout= 5000 // 超时5s
//
// axios.all([axios({
//   url: '/home/multidata',
//
// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 3
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1)
//   console.log(res2)
//   }))


// 4.创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
//
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })
//
// instance1({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })
//
// const instance2 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 1000,
//   method: 'get'
// })
//
// instance2({
//   url: '/category'
// }).then(res => {
//   console.log(res)
// })
//


// 5.封装一个request模块
// import {request} from "./network/request";
//
// request({
//   url: '/home/multidata',
//   method: 'get'
// }, res => {  // success回调函数
//   console.log(res)
// }, err => { // failure 回调函数
//   console.log(err)
// })


import {request2} from "./network/request";

// 参数是一个大的config，里面有三个属性
// request2({
//   baseConfig: {
//     url: '/home/multidata',
//     method: 'get'
//   },
//   success: function(res){
//     console.log(res)
//   },
//   failure: function(err){
//     console.log(err)
//   }
// })

import {request} from "./network/request";

request({
  url: '/home/multidata',
  method: 'get'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
