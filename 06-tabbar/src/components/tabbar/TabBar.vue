<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar"
}
</script>

<style scoped>
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


</style>
