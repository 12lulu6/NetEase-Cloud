<template>
  <div class="mainsonglist">
    <playlistslot>
      <template v-slot:lefttitle>{{chotplayMassage[0]}}</template>
       <template v-slot:titlelist>
         <dropdown :ccgetAllTags="cgetAllTags"></dropdown>
      </template>
       <template v-slot:righttitle>{{chotplayMassage[1]}}</template>
         <template v-slot:contentlist>
        <playlist>
          <playlistitem :cplaylistitem="item" v-for="item of cplaylists" :key="item.id"></playlistitem>
        </playlist>
      </template>
    </playlistslot>
    <el-pagination class="Pagination"
      background
      layout="prev, pager, next"
      :total="cplaylists.length"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>  
</template>

<script>
import playlistslot from '../Home/PlayList/PlayListSlot.vue'
import dropdown from './DropDown.vue'
import playlist from '../../content/Home/PlayList/PlayList.vue'
import playlistitem from '../../content/Home/PlayList/PlayListItem.vue'
export default {
  name:"mainsonglist",
  components: { 
    playlistslot,
    dropdown,
    playlist,
    playlistitem
 },
 props:{
   chotplayMassage:{
       type:Array,
      default(){
        return []
      }
    },
    cgetAllTags:{
       type:Object,
      default(){
        return {}
      }
    },
    cplaylists:{
      type:Array,
      default(){
        return []
      }
    }
 }
}
</script>

<style>
.mainsonglist{
  margin-top: 30px;
}
</style>