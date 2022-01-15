<template>
  <div class="mainmv">
    <playlistslot>
      <template v-slot:lefttitle>{{chotplayMassage[0]}}</template>
      <template v-slot:titlelist>
        <mvchose :ctitle='["排序"]' :ctitlelist='["上升最快","热门","最新"]'></mvchose>
        <mvchose :ctitle='["类型"]' :ctitlelist='["内地","港台","欧美","日本","韩国"]'></mvchose>
      </template>
       <template v-slot:contentlist>
        <playlist>
          <!-- <mvitem :cmvitem="item" v-for="(item,index) in cMvData" :key="index"></mvitem> -->
          <mvlistitem :cmvitem="item" v-for="(item,index) in cMvData" :key="index"></mvlistitem>
        </playlist>
      </template>
    </playlistslot>
  </div>  
</template>

<script>
import playlistslot from '../Home/PlayList/PlayListSlot.vue'
import mvchose from './MvChose.vue'
import playlist from '../../../components/content/Home/PlayList/PlayList.vue'
import mvlistitem from './MvListItem.vue'
export default {
  name:"mainmv",
  components:{
    playlistslot,
    mvchose,
    playlist,
    mvlistitem
  },
   props:{
   chotplayMassage:{
       type:Array,
      default(){
        return []
      }
    },
    cMvData:{
      type:Array,
      default(){
        return []
      }
    }
   }
}
</script>

<style>
.mainmv{
  margin-top: 30px;
}
</style>