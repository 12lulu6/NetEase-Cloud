<template>
  <div id="nav">
   <maintabbar></maintabbar>
   <router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>
  </div>
</template>

<script>
import maintabbar from './components/common/MainTabbar.vue'
export default {
  name:"app",
  components:{
    maintabbar
  }
}
</script>

<style>
  @import "./assets/css/base.css";

#nav{
  width: 1200px;
  margin:0 auto;
}
</style>
