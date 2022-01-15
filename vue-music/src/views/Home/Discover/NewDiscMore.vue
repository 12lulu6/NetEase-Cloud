<template>
  <div class="newdiscmore">
    <moreslot :cplaylists="albums"
              :chotplayMassage="hotplayMassage">
    </moreslot>
    <el-pagination class="Pagination"
      background
      layout="prev, pager, next"
      :total="albums.length"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>  
</template>

<script>
import {getAllAlbum} from '../../../network/home'
import moreslot from './MoreSlot.vue';
export default {
  name:"newdiscmore",
  components: { 
    moreslot
   },
  data() {
    return {
      hotplayMassage:['全部新辑','热门'],
      albums:[]
    }
  },
  created() {
    this.getAll()
  },
  methods: {
    getAll(){
    getAllAlbum().then(res=>{
      console.log(res);
      this.albums = res.data.albums;
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