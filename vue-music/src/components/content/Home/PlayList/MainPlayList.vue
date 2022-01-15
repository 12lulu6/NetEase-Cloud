<template>
  <div class="mainplaylist">
    <playlistslot>
      <template v-slot:lefttitle>{{chotplayMassage[0]}}</template>
      <template v-slot:titlelist>
        <ullist :cctitles="ctitles"></ullist>
      </template>
      <template v-slot:righttitle>{{chotplayMassage[1]}}</template>
      <template v-slot:contentlist>
        <playlist>
          <playlistitem :cplaylistitem="item" v-for="item of cplaylists.slice(0, 10)" :key="item.id"></playlistitem>
        </playlist>
      </template>
    </playlistslot>
  </div>
</template>

<script>
import playlistslot from "./PlayListSlot.vue"
import playlist from './PlayList.vue'
import playlistitem from './PlayListItem.vue'
import ullist from './UlList.vue'
export default {
  name:"mainplaylist",
  components:{
    playlistslot,
    ullist,
    playlist,
    playlistitem
  },
  props:{
    ctitles:{
      type:Array,
      default(){
        return []
      }
    },
    chotplayMassage:{
       type:Array,
      default(){
        return []
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

</style>