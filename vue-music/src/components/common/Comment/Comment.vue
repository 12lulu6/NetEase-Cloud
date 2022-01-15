<template>
  <div class="comment" v-if="ccommitlist">
    <div class="u_title">
      <h2>评论</h2>  
      <span>共有{{ccommitlist.total}}条评论</span>
    </div>
    <div class="hotcomment">
      <h3>精彩评论</h3>
      <div class="item">
        <commentitem :ccommentitem="item" v-for="(item,index) in ccommitlist.hotComments" :key="index"></commentitem>
      </div>
    </div>
  </div>  
</template>

<script>
import commentitem from './CommentItem.vue'
export default {
  components: { 
    commentitem 
  },
  name:"comment",
  props:{
    ccommitlist:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
.comment{
  margin-top: 30px;
}
.comment h2{
  float: left;
  font-size: 20px;
  font-weight: bold;
}
.u_title{
  border-bottom: 2px solid #c20c0c;
}
.hotcomment{
  margin-top: 20px;
  border-bottom: 1px solid #cfcfcf;
}
</style>