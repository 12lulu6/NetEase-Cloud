<template>
  <div class="palymusic" v-if="songDetail.al" @mouseleave="onMouseOut">
    <div class="wrap">
      <!-- <div class="btns">
        <span class="btn_left"></span>
        <span class="btn_meddle" :class="{clickmeddle:isActive}" @click="play"></span>
        <span class="btn_right"></span>
      </div> -->
      <div class="head">
        <img :src="songDetail.al.picUrl" alt="">
      </div>
      <div class="play">
        <span>{{songDetail.al.name}}</span>
        <span>{{songDetail.ar[0].name}}</span>

        <audio :src="musicUrl.url" autoplay="autoplay" controls="controls"></audio>  
      </div>
    </div>
  </div>  
</template>

<script>
import {getMusic,getMusicDetail} from "../../../network/home"
export default {
  name:"playmusic",
  data() {
    return {
      isActive:false,
      musicUrl:{},
      songDetail:{}
    }
  },
  computed:{
    visible(){
      return this.$store.state.dialog_visible;
    },
    musicid(){
      return this.$store.state.musicid;
    }
  },
  mounted() {
      this.MusicMethods(this.musicid);
      this.MusicDetail(this.musicid);
  },
  watch:{
    '$store.state.musicid'(musicid){
      this.MusicMethods(musicid);
       this.MusicDetail(this.musicid);
    }
  },
  methods: {
    MusicMethods(id){
      getMusic(id).then(res=>{
      // console.log(res);
      this.musicUrl = res.data.data[0];
      })
    },
    MusicDetail(id){
      getMusicDetail(id).then(res=>{
      this.songDetail = res.data.songs[0];
      // console.log(this.songDetail);
    })
    },
    onMouseOut() {
       this.$store.commit('changeVisible');
    },
    play(){
      console.log("221");
      this.isActive = !this.isActive;
      // console.log(this.isActive);
    }
  },
}
</script>

<style>
.palymusic{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 20;
  background-image: url(../../../assets/img/b.jpg);
  background-position: 0 0;
}
.palymusic .wrap{
  position: absolute;
  left: 20%;
  width: 980px;
    height: 50px;
    margin: 0 auto;
  /* background-color: rgb(124, 101, 101); */
}
.btns>span{
  content: "";
  display:inline-block;
  width: 30px;
  height: 30px;
  vertical-align:middle;
  cursor: pointer;
  background-image: url(../../../assets/img/playbar.png);
}
.wrap .btns{
  float: left;
  height: 50px;
  line-height: 50px;
  margin-right: 20px;
}
.wrap .btn_left{
  background-position:0px 489px;
}
.wrap .btn_left:hover{
  background-position:-30px 489px;
}
.wrap .btn_right{
  background-position:72px 489px;
}
.wrap .btn_right:hover{
  background-position:42px 489px;
}
.wrap .btn_meddle{
  width: 40px;
  height: 40px;
  background-position:155px 415px;
}
.wrap .btn_meddle:hover{
  background-position:115px 415px;
}
.clickmeddle{
  width: 40px;
  height: 40px;
  background-position:155px 445px;
}
.clickmeddle:hover{
  background-position:115px 445px;
}
.head{
  float: left;
  height: 50px;
  line-height: 50px;
  margin: 6px 15px 0 0;
}
.head img{
  margin-bottom: 17px;
  vertical-align: middle;
  width: 34px;
  height: 34px;
}
.play{
  /* float: left; */
  position: relative;
  height: 50px;
}
.play span{
  position: absolute;
  top: -24px;
  height: 25px;
  float: left;
  color: #fff;
  font-size: 14px;
}
.play span:nth-child(2){
  left: 400px;
  font-size: 12px;
  color:#999  
}
.play audio{
  width: 720px;
  height: 20px;
}
</style>