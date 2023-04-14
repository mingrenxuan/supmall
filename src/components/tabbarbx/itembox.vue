<template>
  <div class="tabbarItem">
      <div class="tabbar_item">
        <img src="./../../assets/tabbar/home.svg" alt="">
        <span>首页</span>
     </div>
     <div class="tabbar_item">
        <img src="./../../assets/tabbar/category.svg" alt="">
        <span>分类</span>
     </div>
     <div class="tabbar_item">
        <img src="./../../assets/tabbar/shopcart.svg" alt="">
        <span>购物车</span>
     </div>
     <div class="tabbar_item">
        <img src="./../../assets/tabbar/profile.svg" alt="">
        <span class="tabbar_txt">我的</span>
     </div>

  </div>
</template>

<script>

export default {
  name: 'tabbarItem',
  props: {
    msg: String
  }
}
</script>
