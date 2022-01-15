<template>
  <div class="commentitem">
    <div class="head">
      <img :src="ccommentitem.user.avatarUrl" alt="">
    </div>
    <div class="antwrap">
      <a href="#"><span>{{ccommentitem.user.nickname}}:</span></a>
      <span>{{ccommentitem.content}}</span>
      <div class="commenttime">{{ccommentitem.timeStr}}</div>
      <div class="like">
        <span>{{ccommentitem.likedCount}}</span>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name:"commentitem",
  props:{
    ccommentitem:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
.commentitem{
  padding: 15px 0;
  /* width: 80px; */
  height: 80px;
    border-top: 1px dotted #ccc;
}
.head img{
  float: left;
    width: 50px;
    height: 50px;
    margin-right: -100px;
}
.antwrap{
  position: relative;
  margin-left: 60px;
}
.antwrap .commenttime{
  margin-top: 15px; 
}
.like{
  position: absolute;
  right: 0;
  bottom: 10px;
  cursor: pointer;
}
.like span::before{
   content: "";
  display:inline-block;
  width: 20px;
  height: 20px;
  vertical-align:middle;
  margin-right: 5px;
    vertical-align: -2px;
    width: 15px;
    height: 14px;
    background-image: url(../../../assets/img/icon2.png);
    background-position: -150px 0;
}
</style>