<template>
  <div class="tabbarItem">
      <div class="tabbar_item" @click="btnclick">
         <div  v-if="isAct"><slot name="tab_icon"></slot></div>
         <div v-else> <slot  name="tab_icon_act"></slot></div>
         <div :class="{act : !isAct}"><slot name="tab_txt"></slot></div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'tabbarItem',
  props:{
   path: String
  },
   data(){
      return {
         // isAct:true
      }
   },
   computed:{
      isAct(){
       return  this.$route.path.indexOf(this.path) 
      }
   },
   methods:{
      btnclick(){
         this.$router.replace(this.path)
      }
   }
}
</script>
<style>
.act{color: red;}
</style>