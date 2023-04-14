<template>
  <div id="app">
    <routerView></routerView>
      <tabBar>
        <tabbarItem :path="'/Home'">
          <img slot="tab_icon" src="./assets/tabbar/home.svg" alt="">
          <img slot="tab_icon_act" src="./assets/tabbar/home_active.svg" alt="">
          <span slot="tab_txt">首页</span>
        </tabbarItem>
        <tabbarItem :path="'/About'">
          <img slot="tab_icon" src="./assets/tabbar/category.svg" alt="">
          <img slot="tab_icon_act" src="./assets/tabbar/category_active.svg" alt="">
          <span slot="tab_txt">分类</span>
        </tabbarItem>
        <tabbarItem  :path="'/news'">
          <img slot="tab_icon" src="./assets/tabbar/shopcart.svg" alt="">
          <img slot="tab_icon_act" src="./assets/tabbar/shopcart_active.svg" alt="">
          <span slot="tab_txt">购物车</span>
        </tabbarItem>
        <tabbarItem :path="'/vid'">
          <img slot="tab_icon" src="./assets/tabbar/profile.svg" alt="">
          <img slot="tab_icon_act" src="./assets/tabbar/profile_active.svg" alt="">
          <span slot="tab_txt">我的</span>
        </tabbarItem>
      </tabBar>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import tabBar  from  './components/tabbarbx/tabbar';
import tabbarItem from './components/tabbarbx/tabbarItem'
export default  {
  name :'app',
  components:{
    tabBar,
    tabbarItem,
    RouterView
  }
}

</script>
