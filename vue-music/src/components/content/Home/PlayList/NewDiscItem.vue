<template>
  <div class="newdiscitem">
    <nav class="listitem">
     <nav class="itemimg" @click="DiscClick(cnewdiscitem.id)">
        <img :src="cnewdiscitem.blurPicUrl" alt="">
        <a href="javascript:;" class="icon-play"></a>
     </nav>
      <nav class="itemname">{{cnewdiscitem.name}}</nav>
      <nav>{{cnewdiscitem.artist.name}}</nav>
      <!-- <a ref="#" v-for="(item,index) in cnewdiscitem.creator.expertTags" :key="index">#{{item}}</a> -->
    </nav>
  </div>  
</template>

<script>
export default {
  name:"newdiscitem",
  props:{
    cnewdiscitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    DiscClick(id){
      // console.log("将id传到路由",id);
       this.$router.push('/discdetail/'+id)
    }
  },
}
</script>

<style>
/* .newdiscitem{
  flex: 1;
} */
.listitem img{
  width: 199.6px!important;
  height: 199.6px!important;
  box-shadow: 9px 3px 9px -1px rgba(0, 0,0,.4);
  border-radius: 4px;
  margin-bottom: 5px;
  cursor: pointer;
}
.listitem a{
  color:#ea986c;
  cursor: pointer;
}
.listitem .icon-play{
  position:absolute; 
  bottom:-20px; 
  right: -24px;
  width: 90px;
  height: 90px;
  z-index:2;
  display: none;
  background-image: url(../../../../assets/img/sprite_norepeat.png);
   transform:scale(0.4);
  background-position:388px 397px;
}
.listitem .itemimg:hover .icon-play{
  display: block;
}
.listitem .itemname{
  /* text-align: center; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>