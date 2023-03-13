<template>
<!-- 监听点击事件   -->
  <div class="tab-bar-item" @click="itemClick">
  <!--   动态获取 图片和文本 -->
  <!--  插槽外面包装一层 div，在div中定义属性，在替换时不会被替换掉 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else >
      <slot name="item-icon-active"></slot>
    </div>
<!--  动态绑定 style -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data(){
      return {
        //isActive: true
      }
    },
    computed: {
      isActive(){
        // 当前活跃的路由，自己的path，当前活跃的路由中存在自己的path时，即点击了。
        return this.$route.path.indexOf(this.path) != -1;
      },
      activeStyle(){  //
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick(){
        // console.log('itemclick');
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>

  .tab-bar-item {
    flex: 1;  /* 均等分布 */
    text-align: center;
    height: 49px; /* 高度 */
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle; /* 去掉图片和文字之间的空隙 */
    margin-bottom: 2px;

}

  .active {
    color: ;
  }


</style>
