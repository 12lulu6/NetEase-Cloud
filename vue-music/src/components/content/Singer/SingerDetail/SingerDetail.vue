<template>
  <div class="singerdetail" v-if="detaildata.artist">
    <div class="basemessage">
      <span>{{detaildata.artist.name}}</span>
      <div class="mask">
        <img :src="detaildata.artist.cover" alt="">
      </div>
    </div>
    <div class="similar_singer">
      <h2>相似歌手</h2>
      <ul>
        <li v-for="(item,index) in simi_singer.slice(0, 9)" :key="index">
          <img :src="item.picUrl" alt="">
          <nav>{{item.name}}</nav>
        </li>
      </ul>
    </div>
    <!-- 使用路由 -->
    <div class="n_artists">
      <router-link to="/singerDetail/popularsinger">热门歌曲</router-link>
      <router-link to="/singerDetail/all_albums">所有专辑</router-link>
      <router-link to="/singerDetail/related_MVs">相关MV</router-link>
      <router-link to="/singerDetail/about_artist">艺人介绍</router-link>
       <router-view></router-view>
       <!-- <div>
       </div> -->
    </div>
  </div>  
</template>

<script>
import {getSingerDetail,getSimi_Singer} from '../../../../network/detail'
export default {
  name:"singerDetail",
  data() {
    return {
      detaildata:{},
      simi_singer:[]
    }
  },
  computed:{
    singerid(){
      return this.$route.params.mvid;
    }
  },
  mounted() {
    this.getDetail(this.singerid);
    this.similarmethods(this.singerid);
  },
  methods: {
    getDetail(id){
      getSingerDetail(id).then(res=>{
        this.detaildata = res.data.data;
        console.log(res.data);
      })
    },
    similarmethods(id){
      getSimi_Singer(id).then(res=>{
        // console.log(res);
        this.simi_singer = res.data.artists;
      })
    },
    liclick(){
      console.log("111");
    }
  },
}
</script>

<style>
.singerdetail{
   position: relative;
  top: 30px;
}
.basemessage{
  position: relative;
}
.basemessage>span{
  position: absolute;
  left: 0;
  font-size: 24px;
  font-weight: 600;
}
.basemessage .mask{
  position: absolute;
  top: 34px;
  left: 0px;
  width: 640px;
  height: 400px;
  overflow: hidden;
}
.basemessage img{
  position: absolute;
  top: -25px;
  width: 640px;
}
.similar_singer{
  position: absolute;
  left: 60%;
  padding-right: 120px;
}
.similar_singer ul li{
  float: left;
  margin: 30px 20px 0 0;
}
.similar_singer ul li img{
  width: 80px;
  height: 80px;
}
.n_artists{
  position: absolute;
  top: 440px;
  left: 0;
}
.n_artists a{
  padding:0 20px;
  cursor: pointer;
  font-size: 16px;
}
.n_artists a:hover{
  color:red
}
</style>