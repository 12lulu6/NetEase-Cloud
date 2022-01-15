<template>
  <ul>
    <li v-for="(item,index) of cctitles.slice(0, 5)" 
        :key="index"
        @click="cpoplistclick(item.name),changeClick(index)"
        >
      <a href="#" :class="{current: isActive == index}">{{item.name}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name:"ullist",
  data() {
    return {
      isActive:0,
    }
  },
  props:{
    cctitles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    changeClick(index){
      this.isActive = index;
      console.log(this.isActive);
    },
    cpoplistclick(name){
      //使用vuex来传祖孙组件之间传数据
     this.$store.commit('newState',name);
    //  console.log(this.$store.state.titlename);
      // this.$emit('cpoplistclick',name);
      this.isactive = !this.isactive;
    },
  },
}
</script>

<style>
ul{
  box-sizing: content-box;
  text-align: center;
  margin-left: 20px;
  font-size: 14px;
}
ul li{
  float: left;
  cursor: pointer;
}
ul li a{
  padding:10px 15px;
}
ul li:hover a{
  color: #ea986c;
  border-bottom: 2px solid #ea986c;
}
.current{
  color:#ea986c;
  border-bottom: 2px solid #ea986c;
}
</style>