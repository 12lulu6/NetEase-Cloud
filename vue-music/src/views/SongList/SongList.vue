<template>
  <div class="songlist">
    <mainsonglist :chotplayMassage="hotplayMassage"
                  :cgetAllTags="getAllTags"
                  :cplaylists="playlists">
    </mainsonglist>
  </div>
</template>

<script>
import mainsonglist from "../../components/content/SongList/MainSongList.vue"
import {getAllTags,getHotList} from '../../network/songlist'
export default {
  name:"songlist",
  components: {
     mainsonglist
  },
  data() {
    return {
      getAllTags:{},
      playlists:[],
       hotplayMassage:['全部歌单','热门'],
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
  mounted() {
    this.getListTag();
     this.getpoplist(this.titlename);
  },
   methods: {
    getListTag(){
     getAllTags().then(res=>{
       this.getAllTags = res.data;
       console.log(res);
     })
   },
   getpoplist(cat){
    console.log(cat)
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

</style>