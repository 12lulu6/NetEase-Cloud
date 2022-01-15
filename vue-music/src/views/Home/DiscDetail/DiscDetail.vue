<template>
  <div class="discdetail" v-if="calbum">
    <div class="baseMessage">
      <img :src="calbum.album.artist.img1v1Url" alt="">
      <h2>{{calbum.album.name}}</h2> 
      <p>
        <b>歌手：</b>
        <span>{{calbum.album.artist.name}}</span>
      </p>
      <p>
        <b>发行时间：</b>
        <span>{{getTime(calbum.album.publishTime)}}</span>
      </p>
      <p>
        <b>发行公司：</b>
        <span>{{calbum.album.company}}</span>
      </p>
      <div class="AlbumCollect">
        <el-button type="primary">播放</el-button>
        <el-button type="primary">收藏({{calubmCollect.commentCount}})</el-button>
        <el-button type="primary">分享({{calubmCollect.shareCount}})</el-button>
        <el-button type="primary">评论({{calubmCollect.commentCount}})</el-button>
      </div>
    </div>
    <div class="introduce">
      <h3>专辑介绍：</h3>
      <p>{{calbum.album.description}}</p>
    </div>
    <songdisplaylist :ctracks="calbum.songs"></songdisplaylist>
     <comment :ccommitlist="commitlist"></comment>
  </div>  
</template>

<script>
import songdisplaylist from '../../../components/common/BaseDisplay/SongDisplayList.vue';
import comment from '../../../components/common/Comment/Comment.vue'
import {getAlbumDetail,getAlbumCollect,getDisCommit} from "../../../network/detail"
export default {
  components: {
     songdisplaylist,
     comment
   },
  name:"discdetail",
  data() {
    return {
      calbum:{},
      calubmCollect:{},
      commitlist:{}
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    
  },
  created() {
    this.getDetail(this.id);
    this.getCollect(this.id);
    this.getComment(this.id);
  },
  methods: {
    //获取最新上新的专辑详情
    getDetail(id){
      getAlbumDetail(id).then(res=>{
        // console.log(res);
        this.calbum = res.data;
      })
    },
    //获取专辑收藏等信息
    getCollect(id){
      getAlbumCollect(id).then(res=>{
        // console.log(res);
        this.calubmCollect = res.data
      })
    },
    getComment(id){
      getDisCommit(id).then(res=>{
        console.log(res);
         this.commitlist = res.data;
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
  /* position: absolute; */
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