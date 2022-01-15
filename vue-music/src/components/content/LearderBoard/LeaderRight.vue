<template>
  <div class="leaderright">
    <toptitle :clistdata="listdata"></toptitle>
    <songdispalylist :ctracks="tracks"></songdispalylist>
  </div>  
</template>

<script>
import toptitle from '../../common/BaseDisplay/TopTitle.vue'
import {getOneList} from '../../../network/leaderboard'
import songdispalylist from '../../common/BaseDisplay/SongDisplayList.vue'
export default {
  name:"leaderright",
  components:{
    toptitle,
    songdispalylist
  },
  data() {
    return {
      listdata:{},
      tracks:[]
    }
  },
  computed:{
    current_listid(){
      return this.$store.state.current_listid;
    } 
  },
  mounted() {
    this.getOneLeaderList(this.current_listid);
  },
  //需要一个来监听state的变化,监听computed
  watch:{
    '$store.state.current_listid'(current_listid){
      this.getOneLeaderList(current_listid)
    }
  },
  methods: {
   getOneLeaderList(id){
     console.log(id);
     getOneList(id).then(res=>{
        console.log(res);
        this.listdata = res.data.playlist;
        this.tracks = res.data.playlist.tracks;
      })
    },
   
  },
}
</script>

<style>
.leaderright{
  position: absolute;
  left: 240px;
  position: absolute;
  top: 0;
  width: 960px;
  padding: 40px 0 0 40px;
  border: 1px solid rgb(199, 199, 199);
}
</style>