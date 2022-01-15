<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(item,index) in cbanners" :key="index">
      <img :src="item.pic" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name:"banner",
  props:{
    cbanners:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style>
  .el-carousel__item img {
    width: 100%;
    height: 100%;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>