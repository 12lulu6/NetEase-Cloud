<template>
  <div class="toptitle">
      <img :src="clistdata.coverImgUrl" alt="">
      <div class="topMassage">
        <h2>{{clistdata.name}}</h2> 
        <p>最近更新：{{getTime(clistdata.updateTime)}}</p>
        <div class="AlbumCollect">
          <el-button type="primary">播放</el-button>
          <el-button type="primary">收藏({{clistdata.subscribedCount}})</el-button>
          <el-button type="primary">分享({{clistdata.shareCount}})</el-button>
          <el-button type="primary">评论({{clistdata.commentCount}})</el-button>
        </div>
      </div>
  </div>  
</template>

<script>
export default {
  name:"toptitle",
  props:{
    clistdata:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
     //将时间戳改为日期
    getTime(dt){
      var time = new Date(dt);
      var y = time.getFullYear();
      var m = time.getMonth()+1;
      var d = time.getDate();
      return y+ '-' + (m<10? '0' +m:m) + '-' +(d<10? '0' +d:d);
    }
  },
}
</script>

<style>
.toptitle{
   position: relative;
  top: 0;
  width: 238px;
  /* background-color: rgb(247, 173, 253); */
}
.toptitle img{
  width: 150px;
  height: 150px;
  padding: 3px;
  border: 1px solid rgb(201, 201, 201);
}
.toptitle .topMassage{
  position: absolute;
  left: 150px;
  top: 0;
  padding: 3px;
  float: left;
  width: 710px;
  height: 150px;
  font-size: 14px;
  margin-left: 20px;
  /* background-color: rgb(156, 227, 245); */
}
.toptitle .topMassage p{
  margin: 10px 0 20px 0;
}
.toptitle .topMassage p::before{
 content: "";
  display:inline-block;
  width: 20px;
  height: 20px;
  vertical-align:middle;
  background-image: url(../../../assets/img/icon.png);
  background-position:-15px 429px;

}
</style>