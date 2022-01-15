<template>
  <div id="tabbaritem" @click="itemClick">
    <div :style="isActiveStyle">
      <slot name="icon-text"></slot> 
    </div>
  </div>  
</template>

<script>
export default {
  name:"tabbaritem",
  props:{
    path:{
      type:String
    },
    activeStyle:{
      type:String,
      default:'red'
  }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    isActiveStyle(){
    return this.isActive?{color:this.activeStyle}:{}
    }
  },
  methods: {
    itemClick(){
      return this.$router.push(this.path)
    }
  }
  }
</script>

<style>
#tabbaritem{
   float: left;
  width: 13%;
}
#tabbaritem div:hover{
  color:#ea986c;
  border-bottom: 3px solid #ea986c;
}
</style>