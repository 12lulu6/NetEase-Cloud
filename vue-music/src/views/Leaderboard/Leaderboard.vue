<template>
  <div class="leaderboard">
    <leaderleft :cLearderBoardList="LearderBoardList"></leaderleft> 
    <leaderright></leaderright>
  </div>  
</template>

<script>
import leaderleft from '../../components/content/LearderBoard/LeaderLeft.vue'
import leaderright from '../../components/content/LearderBoard/LeaderRight.vue'

import {getLeaderBoardList} from '../../network/leaderboard'
export default {
  name:"leaderboard",
  data() {
    return {
      LearderBoardList:[]
    }
  },
  components: { 
    leaderleft,
    leaderright
   },
   created() {
     this.getallList();
   },
   methods: {
     getallList(){
       getLeaderBoardList().then(res=>{
        //  console.log(res);
         this.LearderBoardList = res.data.list;
       })
     }
   },
}
</script>

<style>
.leaderboard{
  position: relative;
}
</style>