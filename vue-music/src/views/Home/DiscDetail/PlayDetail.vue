<template>
  <div class="playDetail" v-if="playData.creator">
    <div class="basemessage">
      <img :src="playData.coverImgUrl" alt="">
      <h2>{{playData.name}}</h2>
      <div class="creator">
        <img :src="playData.creator.avatarUrl" alt="">
        <a href="#"><span>{{playData.creator.nickname}}</span></a>
        <span>创建时间：{{getTime(playData.createTime)}}</span>
      </div>
      <div class="PlayCollect">
        <el-button type="primary">播放</el-button>
        <el-button type="primary">收藏({{playCollect.commentCount}})</el-button>
        <el-button type="primary">分享({{playCollect.shareCount}})</el-button>
        <el-button type="primary">评论({{playCollect.commentCount}})</el-button>
      </div>
      <div class="label">
        <b>标签：</b>
        <i v-for="(item,index) in playData.tags" :key="index">{{item}}</i>
      </div>
      <!-- <div class="introduce">
        <b>介绍：</b>
        <span>{{playData.description}}</span>
      </div> -->
    </div>
    <songdisplaylist :ctracks="playData.tracks"></songdisplaylist>
     <comment :ccommitlist="commitlist"></comment>
  </div>  
</template>

<script>import songdisplaylist from '../../../components/common/BaseDisplay/SongDisplayList.vue';
import comment from '../../../components/common/Comment/Comment.vue'
import {getOneList} from "../../../network/home"
import {getPlayCollect,getPlayCommit} from "../../../network/detail"
export default {
  name:"playdetail",
  components:{
    songdisplaylist,
    comment
  },
  data() {
    return {
      playData:{},
      playCollect:{},
      commitlist:{}
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  mounted() {
    this.getDetail(this.id);
    this.getCollect(this.id);
    this.getComment(this.id);
  },
  methods: {
    getDetail(id){
      getOneList(id).then(res=>{
        this.playData = res.data.playlist;
        // console.log(this.playData);
      })
    },
     getCollect(id){
      getPlayCollect(id).then(res=>{
        this.playCollect = res.data;
      })
    },
     getComment(id){
      getPlayCommit(id).then(res=>{
        // console.log(res);
         this.commitlist = res.data;
      })
    },
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
.playDetail{
  position: relative;
  margin-top: 50px;
}
.basemessage{
  height: 200px;
  font-size: 14px;
}
.basemessage>img{
  float: left;
  /* width: 100px; */
  height: 100%;
  margin-right: 20px; 
  box-shadow: 9px 3px 9px -1px rgba(0, 0,0,.4);
}
.basemessage h2{
    margin: 0 0 12px;
}
.basemessage h2::before{
  content: "";
  display:inline-block;
  width: 60px;
  height: 30px;
  vertical-align:middle;
  background-image: url(../../../assets/img/icon.png);
  background-position:0px -239px;
}
.creator{
  margin: 0 0 20px;
    line-height: 35px;
}
.creator img{
      float: left;
    width: 45px;
    height: 45px;
    margin-right: 10px;
}
.creator span{
  margin-right: 10px;
}
.label{
  margin: 25px 0 5px;
    line-height: 22px;
}
.label i{
  cursor: pointer;
    zoom: 1;
    padding: 5px 11px 5px 11px;
    background-position: 0 0;
    margin-right: 5px;
    border: 1px solid rgb(180, 180, 180);
    border-radius: 10px;
}
.PlayCollect{
  margin-top: 20px;
}
</style>