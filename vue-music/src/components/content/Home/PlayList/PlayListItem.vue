<template>
  <div class="playlistitem" v-if="cplaylistitem">
    <nav class="listitem">
      <nav class="itemimg" @click="DiscClick(cplaylistitem.id)">
        <img :src="cplaylistitem.coverImgUrl" alt="">
        <a href="javascript:;" class="icon-play"></a>
     </nav>
      <div class="itemname">{{cplaylistitem.name}}</div>
      <a ref="#" v-for="(item,index) in cplaylistitem.creator.expertTags" :key="index">#{{item}}</a>
    </nav>
  </div>  
</template>

<script>
export default {
  name:"playlistitem",
  props:{
    cplaylistitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    DiscClick(id){
      // console.log(id);
      this.$router.push('/playdetail/'+id)
    }
  },
}
</script>

<style>
.listitem img{
  width: 199.6px!important;
  height: 199.6px!important;
  box-shadow: 9px 3px 9px -1px rgba(0, 0,0,.4);
  border-radius: 4px;
  margin-bottom: 5px;
  cursor: pointer;
}
.listitem .listitem{
  font-size: 13px;
}
.listitem a{
  color:#ea986c;
  cursor: pointer;
}
.itemimg{
  position: relative;
  left: 0;
}
.itemname{
  width: 200.6px;
  white-space: nowrap;
    /* 溢出部分隐藏 */
    overflow: hidden;
    /* 文字用省略号来代替 */
    text-overflow: ellipsis;

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

</style>