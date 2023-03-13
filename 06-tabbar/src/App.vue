<template>
  <div id="app">
    <div id="tab-bar">
      <div class="tab-bar-item">首页</div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* 引用css样式，使用@import */
  @import "./assets/css/base.css";

  #tab-bar {
    /* 水平平均分布 */
    display: flex;
    /* 背景色 */
    background-color: #f6f6f6;

    /* 放置在底部*/
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

  /*  阴影 向上  */
    box-shadow: 0px -1px 1px rgba(100,100,100,.1);


  }

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }


</style>
