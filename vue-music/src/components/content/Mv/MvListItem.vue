<template>
  <div class="mvlistitem">
      <nav class="listitem">
      <nav class="itemimg" @click="MvClick(cmvitem.id)">
        <img :src="cmvitem.cover" alt="">
     </nav>
      <div class="itemname">
        <span>{{cmvitem.name}}</span>
        <nav>{{cmvitem.artistName}}</nav>
        <div>{{cmvitem.playCount}}</div>
        </div>
    </nav>
  </div>  
</template>

<script>
export default {
  name:"mvlistitem",
   props:{
    cmvitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    MvClick(mvid){
      this.$router.push('/mvdetail/'+mvid);
    }
  },
}
</script>

<style>
.mvlistitem{
  width: 200px;
  height: 250px;
  flex: 1;
}
.listitem img{
  width: 199.6px!important;
  height: 125.6px!important;
  box-shadow: 9px 3px 9px -1px rgba(0, 0,0,.4);
  border-radius: 4px;
  margin-bottom: 5px;
}
.listitem div{
  /* width: 199.6px; */
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

.itemname div::before{
 content: "";
  display:inline-block;
  width: 20px;
  height: 20px;
  vertical-align:middle;
  background-image: url(../../../assets/img/icon.png);
  background-position:-55px 248px; 
}
</style>