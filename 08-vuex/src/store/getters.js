export default { //类似以computed计算属性
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
}
