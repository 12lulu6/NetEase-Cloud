<template>
  <div class="home">
    <banner :cbanners="banners"></banner>  
    <mainplaylist :chotplayMassage="hotplayMassage"
                  :ctitles="tags"
                  :cplaylists="playlists">
    </mainplaylist>
    <maindisclist :cnewdiscMassage="newdiscMassage"
                  :calbums="albums">
    </maindisclist>
    <maintoplist :ctoplistcMassage="toplistcMassage">
    </maintoplist>
  </div>  
</template>

<script>
import Banner from '../../components/content/Home/Banner.vue'
import mainplaylist from '../../components/content/Home/PlayList/MainPlayList.vue'
import maindisclist from '../../components/content/Home/PlayList/MainDiscList.vue'
import {getHomeBanner,
        getHotTags,
        getHotList,
        getNewAlbum} from '../../network/home.js'
import maintoplist from '../../components/content/Home/TopList/MainTopList.vue'
export default {
  name:"home",
  components: {
    Banner,
    mainplaylist,
    maindisclist,
    maintoplist,
 },
 data() {
  return {
     banners:[],
     tags:[],
     playlists:[],
     albums:[],
     hotplayMassage:['热门推荐','更多'],
     newdiscMassage:['新辑上架','更多'],
     toplistcMassage:['榜单','更多'],
   }
 },
 computed:{
   titlename(){
     return  this.$store.state.titlename;
   }
 },
 //这个太拽了!!!
 watch:{
    '$store.state.titlename'(titlename){
      this.getpoplist(titlename)
    }
  },
 created() {
   this.getBanner(2);
    this.getHotListTag();
    //这是新碟上架
    this.getAlbum();
    //这是热门推荐中点击标题跳转
    this.getpoplist(this.titlename)
    //获取榜单
 },
 methods: {
   getBanner(type){
    getHomeBanner(type).then(res=>{
      this.banners = res.data.banners
      // console.log(res);
    })
   },
   getHotListTag(){
     getHotTags().then(res=>{
       this.tags = res.data.tags
      //  console.log(res);
     })
   },
   getAlbum(){
     getNewAlbum().then(res=>{
      //  console.log(res);
      this.albums = res.data.albums
     })
   },
  getpoplist(cat){
    // console.log(cat)
    //错误：点击只发一次请求，就是state中默认值，点击其他不能发送请求，有时候就能发送，奇怪？？
    getHotList(cat).then(res=>{
      // console.log(res);
      this.playlists = res.data.playlists;
    })
  }
 },
}
</script>
<style>
.home{
  margin-top: 30px;
}
</style>