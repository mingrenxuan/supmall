<template>
  <div class="tabbar_bx">
     <slot></slot>
  </div>
</template>

<script>
import tabbarItem from './tabbarItem.vue'
export default {
  name: 'tabBar',
}
</script>
<style>
.tabbar_bx{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 99px;
  background: #fff;
  border-top: 1px solid #3c3c3c;
  position: fixed;
  bottom: 0;left: 0;
}
.tabbar_item{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  flex-direction: column;
}
.tabbar_item img{
  display: block;
  width: 35px;
  margin: 0 auto;
  
}
.tabbar_txt{
  display: block;
  width: 100%;
  text-align: center;
  font-size: 18px;
  
}
.tabbarItem{
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
</style>

