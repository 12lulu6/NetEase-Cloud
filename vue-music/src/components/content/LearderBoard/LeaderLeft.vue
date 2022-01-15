<template>
  <div class="leaderleft">
    <dl>
        <dt>云特色榜单榜</dt>
        <dd @click="clickd" v-for="(item,i) of cLearderBoardList.slice(0, 4)" :key="i">
          <div class="item_name" @click="learderclick(item.id)">
            <img :src="item.coverImgUrl" alt="">
            <div class="name">
              <span>{{item.name}}</span>
              <span>{{item.updateFrequency}}</span>
            </div>
          </div>
         </dd>
    </dl>
    <dl>
        <dt>全球媒体榜</dt>
        <dd v-for="(item,i) of cLearderBoardList.slice(4, 35)" :key="i">
          <div class="item_name" @click="learderclick(item.id)">
            <img :src="item.coverImgUrl" alt="">
            <div class="name">
              <span>{{item.name}}</span>
              <span>{{item.updateFrequency}}</span>
            </div>
          </div>
         </dd>
    </dl>
  </div>  
</template>

<script>
export default {
  name:"leaderleft",
  props:{
    cLearderBoardList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    learderclick(id){
      // console.log("ddd");
      // console.log("Leaderleft",id);
      this.$store.commit('changeListid',id);
    },
    clickd(){
      console.log("sss");
    }
  },
}
</script>

<style>
.leaderleft{
  position: absolute;
  left: 0;
  width: 240px;
  z-index: 2;
  border: 1px solid rgb(199, 199, 199);
  padding-top: 40px;
}
.leaderleft dt{
  padding: 0 10px 12px 15px;
    font-size: 14px;
    color: #000;
}
.leaderleft dd{
    height: 42px;
    margin: 10px 0 10px 20px;
}
.item_name img{
    float: left;
    width: 40px;
    box-shadow: -3px 3px 4px -1px rgba(0, 0,0,.4);
}
.item_name{
  cursor: pointer;
}
.name{
  padding-left: 48px;
}
.name span{
  display: block;
  margin-bottom: 4px;
}
.name span:nth-child(1){
  color:#000;
}
</style>