<template>
  <div class="singer">
    <div class="title">
      <topstype :ctitle='["热门"]' :cData="alphabet"></topstype>
      <topstype :ctitle='["地区"]' :cData="area"></topstype>
      <topstype :ctitle='["歌手"]' :cData="singType"></topstype>
    </div>
    <singeritem :csingerData="item" v-for="(item,index) in SingerData" :key="index"></singeritem>
  </div>  
</template>

<script>
import {getAllSinger} from '../../network/singer'
import topstype from '../../components/common/TopStype/TopStype.vue'
import singeritem from '../../components/content/Singer/SingerItem.vue'
export default {
  components: { 
    topstype,
    singeritem
 },
  name:'singer',
  data() {
    return {
      alphabet:['A','B','C','D','E','F','G','H','I','J',
      'K','L','M','N','O','P','Q','R','S','T','U','V',
      'W','X','Y','Z'],
      area:['华语','欧美','日本','韩国','其他'],
      singType:['女歌手','男歌手','乐队'],
      SingerData:[]
    }
  },
   computed:{
    current_type(){
      return this.$store.state.current_type
    },
    current_area(){
      return this.$store.state.current_area
    },
    current_initial(){
      return this.$store.state.current_initial
    },
   current_singer(){
     let current_type = this.$store.state.current_type;
     let current_area = this.$store.state.current_area;
     let current_initial = this.$store.state.current_initial;
     return {current_type,current_area,current_initial}
   }
 },
 mounted() {
   this.getSinger(this.current_type,this.current_area,this.current_initial)
 },
 //这个太拽了!!!
 watch:{
   current_singer(val){
     console.log("lll",val)
     this.getSinger(val.current_type,val.current_area,val.current_initial)
   }
  },
   methods: {
   getSinger(type,area,initial){
    getAllSinger(type,area,initial).then(res=>{
      console.log(res);
      this.SingerData = res.data.artists;
    })
  }
  },
}
</script>

<style>
.singer{
  display: flex;
  flex-wrap: wrap;
  align-content:flex-start;
  justify-content: space-around;
  margin-top: 10px;
  padding: 20px 0;
  border: 1px solid rgb(180, 180, 180);
  box-shadow: 0px 0px 30px 3px rgba(0, 0,0,.4);
  /* display: flex; */
}

</style>