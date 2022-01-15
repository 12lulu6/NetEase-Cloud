<template>
  <div class="moreslot" v-if="cplaylists">
    <!-- {{cplaylists}} -->
    <playlistslot>
      <template v-slot:lefttitle>{{chotplayMassage[0]}}</template>
      <template v-slot:righttitle>{{chotplayMassage[1]}}</template>

      <template v-slot:contentlist>
        <playlist>
          <div class="mode" v-if="currentvalue == '热门推荐'">
            <playlistitem v-for="item in cplaylists"
                           :key="item.id"
                          :cplaylistitem="item"></playlistitem>
          </div>
          <div class="mode" v-else-if="currentvalue == '新辑上架'">
            <newdiscitem v-for="item in cplaylists" 
                          :key="item.id"
                          :cnewdiscitem="item">11</newdiscitem>
          </div>
        </playlist>
      </template>
    </playlistslot>
  </div>
</template>

<script>
import playlistslot from "../../../components/content/Home/PlayList/PlayListSlot.vue"
import playlist from '../../../components/content/Home/PlayList/PlayList.vue'
import playlistitem from '../../../components/content/Home/PlayList/PlayListItem.vue'
import newdiscitem from '../../../components/content/Home/PlayList/NewDiscItem.vue'
export default {
  name:"moreslot",
  components:{
    playlistslot,
    playlist,
    playlistitem,
    newdiscitem
  },
  computed:{
    currentvalue(){
      return this.$store.state.titlevalue;
    }
  },
  props:{
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
.mode{
  display: flex;
  flex-wrap: wrap;
  align-content:flex-start;
  justify-content: space-around;
  margin-top: 10px;
  padding: 20px 0;
}
</style>