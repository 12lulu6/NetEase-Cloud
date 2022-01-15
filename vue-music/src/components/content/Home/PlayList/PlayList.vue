<template>
  <div class="playlist">
    <slot></slot> 
  </div>  
</template>

<script>
export default {
  name:"playlist"
}
</script>

<style>
.playlist{
  display: flex;
  flex-wrap: wrap;
  align-content:flex-start;
  justify-content: space-around;
  margin-top: 10px;
  padding: 20px 0;
  border: 1px solid rgb(180, 180, 180);
  box-shadow: 0px 0px 30px 3px rgba(0, 0,0,.4);
}
</style>