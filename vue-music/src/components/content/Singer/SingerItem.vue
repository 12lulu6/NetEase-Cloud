<template>
  <div class="singeritem">
    <img :src="csingerData.picUrl" alt="" @click="singerClick(csingerData.id)">
    <nav>{{csingerData.name}}</nav>
    <nav>专辑：{{csingerData.albumSize}}</nav>
  </div>  
</template>

<script>
export default {
  name:"singeritem",
  props:{
    csingerData:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    singerClick(id){
      this.$router.push('/singerDetail/'+id)
      console.log(id)
    }
  },
}
</script>

<style>
.singeritem{
  text-align: center;
  flex: 1;
  padding:30px 30px;
  cursor: pointer;
}
.singeritem img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.singeritem nav{
  margin-top: 5px;
}
</style>