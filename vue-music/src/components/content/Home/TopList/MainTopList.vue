<template>
  <div class="maintoplist">
    <playlistslot>
      <template v-slot:lefttitle>{{ctoplistcMassage[0]}}</template>
      <template v-slot:righttitle>{{ctoplistcMassage[1]}}</template>
    </playlistslot>
    <toplistslot>
      <template v-slot:left>
        <toplist  :ctoplistdata="Soaring" activeStyle="#rgb(100, 150, 220)"></toplist>
      </template>
       <template v-slot:meddle>
        <toplist :ctoplistdata="New_song" activeStyle="#rgb(69, 179, 186)"></toplist>
      </template>
      <template v-slot:right>
        <toplist :ctoplistdata="Original" activeStyle="#rgb(198, 77, 110)"></toplist>
      </template>
    </toplistslot>
  </div>
</template>

<script>
import playlistslot from "../PlayList/PlayListSlot.vue"
import toplist from './TopList.vue'
import toplistslot from './TopListSlot.vue'

import {getOneList} from "../../../../network/home"
export default {
  name:"maintoplist",
  data() {
    return {
        Soaring:{},
        New_song:{},
        Original:{}
    }
  },
  components:{
    playlistslot,
    toplistslot,
    toplist
  },
  computed:{
    Soaring_list(){
      return this.$store.state.Soaring_list;
    },
    New_song_list(){
      return this.$store.state.New_song_list;
    },
    Original_list(){
      return this.$store.state.Original_list;
    }
  },
   props:{
      ctoplistcMassage:{
      type:Array,
      default(){
        return []
      }
    }
   },
   mounted() {
    this.gettoplistdata1(this.Soaring_list);
    this.gettoplistdata2(this.New_song_list);
    this.gettoplistdata3(this.Original_list);
  },
   watch:{
    '$store.state.Soaring_list'(Soaring_list){
      this.gettoplistdat1(Soaring_list)
    },
     '$store.state.New_song_list'(New_song_list){
      this.gettoplistdata2(New_song_list)
    },
     '$store.state.Original_list'(Original_list){
      this.gettoplistdata3(Original_list)
    }
  },
   methods: {
     gettoplistdata1(id){
       getOneList(id).then(res=>{
         
         this.Soaring = res.data.playlist;
        //  console.log(this.Soaring);
       })
     },
     gettoplistdata2(id){
       getOneList(id).then(res=>{
         this.New_song = res.data.playlist;
        //  console.log(this.New_song)
       })
     },
     gettoplistdata3(id){
       getOneList(id).then(res=>{
         this.Original = res.data.playlist;
        //  console.log(this.Original)
       })
     }
   },
}
</script>

<style>

</style>