import {INCREMENT} from "./mutations-types";

export default {

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

}
