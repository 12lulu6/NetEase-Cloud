<template>
  <div class="mainplaylist">
    <playlistslot>
      <template v-slot:lefttitle>{{cnewdiscMassage[0]}}</template>
      <template v-slot:righttitle>{{cnewdiscMassage[1]}}</template>

      <template v-slot:contentlist>
        <playlist>
          <newdiscitem :cnewdiscitem="item" v-for="item of calbums.slice(0, 10)" :key="item.id"></newdiscitem>
        </playlist>
      </template>
    </playlistslot>
  </div>
</template>

<script>
import playlistslot from "./PlayListSlot.vue"
import playlist from './PlayList.vue'
import newdiscitem from './NewDiscItem.vue'
export default {
  name:"maindisclist",
  components:{
    playlistslot,
    playlist,
    newdiscitem
  },
  props:{
   calbums:{
      type:Array,
      default(){
        return []
      }
    },
    cnewdiscMassage:{
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