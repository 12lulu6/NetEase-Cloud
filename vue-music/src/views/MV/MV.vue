<template>
 <div class="mv">
  <mainmv :chotplayMassage="hotplayMassage"
          :cMvData="MvData"></mainmv> 
</div> 
</template>

<script>
import mainmv from '../../components/content/Mv/MainMv.vue'
import {getAllMv} from '../../network/mv'
export default {
  name:"search",
  components:{
    mainmv
  },
  data() {
    return {
      hotplayMassage:['全部MV',''],
      MvData:[]
    }
  },
  computed:{
    current_order(){
      return this.$store.state.current_order
    },
    curent_mvtype(){
      return this.$store.state.curent_mvtype
    },
   current_mv(){
     let current_order = this.$store.state.current_order;
     let curent_mvtype = this.$store.state.curent_mvtype;
     return {current_order,curent_mvtype}
   }
 },
 mounted() {
   console.log(this.current_order);
   console.log(this.current_order);

   this.getMV(this.curent_mvtype,this.current_order)
 },
 //这个太拽了!!!
 watch:{
   current_mv(val){
    //  console.log("lll",val.current_order)
     this.getMV(val.curent_mvtype,val.current_order)
   }
  },
   methods: {
   getMV(area,order){
    getAllMv(area,order).then(res=>{
      // console.log(res);
      this.MvData = res.data.data;
    })
  }
  },
  
}
</script>

<style>

</style>