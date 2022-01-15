<template>
   <dl>
      <dt  ref='clicktitle'>{{ctitle[0]}}</dt>  
      <dd v-for="(item,index) in cData" 
          :key="index" 
          @click="StyleClick(item),changeClick(index)"
          :class="{active: isActive == index}">
          {{item}}
          </dd>
    </dl>   
</template>

<script>
export default {
  name:"topstyle",
  data() {
    return {
      isActive:0
    }
  },
  props:{
    cData:{
      type:Array,
      default(){
        return []
      }
    },
     ctitle:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    changeClick(index) {
     this.isActive = index; //重要处
  },
    StyleClick(data){
      console.log(data);
       let currentvalue = this.$refs.clicktitle.innerText;
      //  console.log(currentvalue)
      if(currentvalue == '热门'){
        this.$store.commit('change_singer_initial',data);
      }
      else if(currentvalue == '地区'){
        switch(data){
        case '华语':
          console.log("华语");
          this.$store.commit('change_singer_area',7);
          break;
        case '欧美':
          this.$store.commit('change_singer_area',96);
          break;
        case '日本':
          this.$store.commit('change_singer_area',8);
          break;
        case '韩国':
          this.$store.commit('change_singer_area',16);
          break;
        case '其他':
          this.$store.commit('change_singer_area',0);
          break;
        }
      }
      else if(currentvalue == '歌手'){
        switch(data){
        case '男歌手':
          this.$store.commit('change_singer_type',1);
          break;
        case '女歌手':
          this.$store.commit('change_singer_type',2);
          break;
        case '乐队':
          this.$store.commit('change_singer_type',3);
          break;
        }
      }
    }
  },
}
</script>

<style>
dl{
  margin-bottom: 10px;
}
dl dt{
  display: inline-block;
 margin-right: 20px;
 font-size: 18px;
 background-color: #ea986c;
 padding: 5px;
 border: 1px solid #ea986c;
 border-radius: 5px;
}
dl dd{
  display: inline;
  cursor: pointer;
  padding: 10px;
  margin-right: 10px;
  font-size: 16px;
}
dl dd:hover{
  color:#ea986c;
}
.active{
  color:#ea986c;
}
</style>