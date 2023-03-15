import axios from "axios";

// 传入配置config，success成功回调函数，failure失败回调函数
// export function request(config, success, failure) {
//   // 1. 创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   // 2.发送真正的网络请求
//   instance(config)
//     .then(res => {
//       //console.log(res)
//       success(res)
//     }).catch(err => {
//     //console.log(err)
//     failure(err)
//   })
// }

// 使用Promise方式
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 1. 创建axios实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//
//     // 2.发送真正的网络请求
//     instance(config)
//       .then(res => {
//         // 处理代码
//         resolve(res)
//       }).catch(err => {
//       // 处理代码
//       reject(err)
//     })
//   })
// }

export function request(config) {

  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios拦截器,拦截请求,user两个参数都是函数
  instance.interceptors.request.use(config =>{
    //console.log(config)
    // 要返回请求信息。
    return config;
  }, err => {
    console.log(err)
  })

  // 响应拦截器,interceptors.response.use
  instance.interceptors.response.use(res => {
    //console.log(res.data);
    // 一般真正使用的是响应中的data数据，即res.data
    return res.data
  }, err => {
    console.log(err)
  })


  // 3.发送真正的网络请求
  return instance(config)
}


// 传递一个参数config，里面包含三部分
// export function request2(config) {
//   // 1. 创建axios实例
//   const instance2 = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 2000
//   })
//
//   instance2(config.baseConfig)
//     .then(res => {
//       config.success(res)
//     }).catch(err => {
//       config.failure(err)
//   })
// }
