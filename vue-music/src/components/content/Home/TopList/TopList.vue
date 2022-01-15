<template>
  <dl v-if="ctoplistdata.tracks" class="toplist" :style="{BackgroundColor:this.activeStyle}">
    <dt class="top"  @click="MoreClick(ctoplistdata.id)">
      <img :src="ctoplistdata.coverImgUrl" alt="">
      <div class="titleMessage">
        <h3>{{ctoplistdata.name}}</h3>
        <span class="titlelogo1"></span>
        <span class="titlelogo2"></span>
      </div> 
    </dt>
    <dd>
      <ol>
        <li v-for="(item,i) of ctoplistdata.tracks.slice(0,10)" :key="i">
          <span class="Serial_number ">{{i+1}}</span>&nbsp;
          <span @click="musicClick(item.id)">{{item.name}}</span>
        </li>
      </ol>
    </dd>  
    <p @click="MoreClick(ctoplistdata.id)">查看更多></p>  
  </dl>
</template>
<script>
export default {
  name:"toplist",
  props:{
    ctoplistdata:{
      type:Object,
      default(){
        return {}
      }
    },
     activeStyle:{
      type:String,
      default:'red'
  }
  },
  methods: {
    MoreClick(id){
      this.$store.commit('changeListid',id);
      this.$router.push('leaderboard')
    },
    musicClick(id){
      this.$store.commit('changeMusic',id);
    }
  },

}
</script>

<style>
.toplist{
  padding: 20px;
  position: relative;
  left: 0;
  display: inline;
  width: 250px;
  border: 1px solid #cccccc;
  cursor: pointer;
}
.toplist img{
  width: 100px;
  height: 100px;
   box-shadow: 9px 3px 9px -1px rgba(0, 0,0,.4);
}
.toplist dd ol .Serial_number{
  color: #c10d0c;
  font-size: 15px;
}
.toplist .titleMessage{
  /* background: violet; */
  position: absolute;
  left: 120px;
  display: inline-block;
  width: 150px;
  height: 100px;
  padding: 5px 0 0 10px;
}
.toplist ol{
  margin-top: 10px;
}
.toplist ol li{
  margin-top: 5px;
}
.toplist p{
  cursor: pointer;
  font-size: 16px;
  color:rgb(0, 0, 0);
  display: block;
  float: right;
  padding-top: 10px;
}
.toplist .titleMessage .titlelogo1::before,
.toplist .titleMessage .titlelogo2::after{
   content: "";
  display:inline-block;
  width: 30px;
  height: 30px;
  vertical-align:middle;
  background-image: url(../../../../assets/img/index.png);
}
.toplist .titleMessage .titlelogo1::before{
  background-position:149px 268px;
}
.toplist .titleMessage .titlelogo2::after{
  background-position:120px 268px;
}
.toplist .titleMessage .titlelogo1:hover::before{
  background-position:149px 237px;
  cursor: pointer;
}
.toplist .titleMessage .titlelogo2:hover::after{
  background-position:120px 237px;
  cursor: pointer;
}

</style>