<template>
  <div class="musicdetail">
    <!-- <div class="baseMessage">
      <img :src="calbum.blurPicUrl" alt="">
      <h2>{{calbum.name}}</h2> 
      <p>
        <b>歌手：</b>
        <span>{{calbum.artist.name}}</span>
      </p>
      <p>
        <b>发行时间：</b>
        <span>{{getTime(calbum.publishTime)}}</span>
      </p>
      <p>
        <b>发行公司：</b>
        <span>{{calbum.company}}</span>
      </p>
      <div class="AlbumCollect">
        <el-button type="primary">播放</el-button>
        <el-button type="primary">收藏({{calubmCollect.commentCount}})</el-button>
        <el-button type="primary">分享({{calubmCollect.shareCount}})</el-button>
        <el-button type="primary">评论({{calubmCollect.commentCount}})</el-button>
      </div>
    </div> -->
    <div class="introduce">
      <h3>专辑介绍：</h3>
      <!-- <p>{{calbum.description}}</p> -->
    </div>
  </div>  
</template>

<script>
import {getMusicDetail} from "../../../network/detail"
export default {
  name:"musicdetail",
  data() {
    return {
      songs:[],
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    
  },
  created() {
    this.getDetail(this.id);
  },
  methods: {
    //获取最新上新的专辑详情
    getDetail(id){
      getMusicDetail(id).then(res=>{
        console.log(res);
        this.calbum = res.data.songs
      })
    },
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
.discdetail{
  position: relative;
  margin-top: 50px;
}
.baseMessage{
  height: 200px;
  font-size: 14px;
}
.baseMessage img{
  float: left;
  height: 100%;
  margin-right: 20px; 
  box-shadow: 9px 3px 9px -1px rgba(0, 0,0,.4);
}
.baseMessage h2{
  margin-bottom: 5px;
}
.baseMessage p{
  margin-top: 5px;
}
.introduce{
  position: absolute;
  left: 0;
  margin-top: 50px;

  overflow: hidden; 
  text-overflow: ellipsis;
  /* 用有弹性伸缩盒子模型显示 */
  display: -webkit-box;
  /* 限制在一个快元素显示的文本的行数--省略号在哪行 */
  -webkit-line-clamp: 11;
  /* 设置伸缩盒子对象的子元素的排列方式：垂直居中 */
  -webkit-box-orient: vertical;
}
.AlbumCollect{
  margin-top: 20px;
}
</style>