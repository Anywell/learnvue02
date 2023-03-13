<template>
  <tab-bar>
    <!--      动态传入 path 和活跃颜色 -->
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="../assets/img/tabbar/home.png">
      <img slot="item-icon-active" src="../assets/img/tabbar/home-active.png">
      <div slot="item-text"> 首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="blue">
      <img slot="item-icon" src="../assets/img/tabbar/category.png">
      <img slot="item-icon-active" src="../assets/img/tabbar/category-active.png">
      <div slot="item-text"> 分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
      <img slot="item-icon" src="../assets/img/tabbar/cart.png">
      <img slot="item-icon-active" src="../assets/img/tabbar/cart-active.png">
      <div slot="item-text"> 购物车</div>
    </tab-bar-item>
    <tab-bar-item path="profile" activeColor="blue">
      <img slot="item-icon" src="../assets/img/tabbar/profile.png">
      <img slot="item-icon-active" src="../assets/img/tabbar/profile-active.png">
      <div slot="item-text"> 我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>

import TabBar from './tabbar/TabBar.vue'
import TabBarItem from "./tabbar/TabBarItem.vue";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
