<template>
  <div class="hotplaylistmore">
    <moreslot :cplaylists="playlists"
              :chotplayMassage="hotplayMassage">
    </moreslot>
    <el-pagination class="Pagination"
      background
      layout="prev, pager, next"
      :total="playlists.length"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>  
</template>

<script>
import {getHotList} from '../../../network/home'
import moreslot from './MoreSlot.vue';
export default {
  components: { 
    moreslot
   },
  data() {
    return {
      hotplayMassage:['热门推荐','热门'],
      playlists:[]
    }
  },
  created() {
    this.getpoplist(this.cat)
  },

   computed:{
    cat(){
      return this.$store.state.titlename;
    }
  },
  watch:{
    '$store.state.titlename'(cat){
      this.getpoplist(cat)
    }
  },
  methods: {
    getpoplist(name){
    getHotList(name).then(res=>{
      console.log(res);
      this.playlists = res.data.playlists;
    })
  },
  handleCurrentChange(){
    console.log("点击跳转下一页")
  }
  },
}
</script>

<style>
.Pagination{
  text-align: center;
  margin: 20px 20px;
}
</style>