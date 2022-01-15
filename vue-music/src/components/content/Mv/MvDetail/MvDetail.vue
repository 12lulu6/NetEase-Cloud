<template>
  <div class="mvdetail">
    <div class="basemassage">
      <span class="titlename">{{detaildata.name }}</span>
      <a href="#">{{detaildata.artistName}}</a>
      <div class="Introduction">
        <span>播放量：{{detaildata.playCount}}</span>
        <span>发布时间：{{detaildata.publishTime}}</span>
      </div>
    </div>
    <video :src="mvurl.url" muted="muted" autoplay="autoplay" loop="loop" controls="controls"></video>
    <comment :ccommitlist="commitlist"></comment>
  </div>
</template>

<script>
import {getMVDetail,getMVUrl,getMVCommit} from '../../../../network/detail'
import comment from '../../../common/Comment/Comment.vue';
export default {
  components: { 
    comment
 },
  name:"mvdetail",
  data() {
    return {
      detaildata:{},
      mvurl:{},
      commitlist:{}
    }
  },
  computed:{
    mvid(){
      return this.$route.params.mvid;
    }
  },
  mounted() {
    this.geturl(this.mvid);
    this.getDetail(this.mvid);
    this.getcommit(this.mvid);
  },
  methods: {
    getDetail(mvid){
      getMVDetail(mvid).then(res=>{
        // console.log(res);
        this.detaildata = res.data.data;
      })
    },
    geturl(id){
      getMVUrl(id).then(res=>{
        this.mvurl = res.data.data;
        // console.log(this.mvurl);
      })
    },
    getcommit(id){
      getMVCommit(id).then(res=>{
      this.commitlist = res.data;
      // console.log(res);
      })
    }
  }
}
</script>

<style>
.mvdetail{
  margin-top: 30px;
}
.basemassage .titlename::before{
  content: "";
  display:inline-block;
  width: 20px;
  height: 20px;
  vertical-align:middle;
  margin-right: 10px;
  background-image: url(../../../../assets/img/icon.png);
  background-position:-1px -17px;
}
.basemassage .titlename{
  font-size: 25px;
  font-weight: bold;
}
.basemassage a{
  font-size: 16px;
  margin-left: 20px;
}
.Introduction{
  float: right;
   margin: 9px 0 0 20px;
}
.Introduction span{
  margin-left: 5px;
}
video{
           width: 100%;
           height: 683px;
           /* height: 100%; */
       }
</style>