<template>
  <div id="tabbar">
    <slot></slot>
  </div>  
</template>

<script>
export default {
  name:"tabbar"
}
</script>

<style>
#tabbar{
  flex: 1;
}
</style>