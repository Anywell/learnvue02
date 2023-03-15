export default {
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
}
