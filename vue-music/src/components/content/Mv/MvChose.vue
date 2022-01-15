<template>
  <div class="mvchose"  @mouseenter="onMouseOver" @mouseleave="onMouseOut">
     <h3 ref='clicktitle'>{{ctitle[0]}}</h3>
    <div class="cateListBox" v-show="seen" @mouseleave="onMouseOut">
       <p></p>
      <ul>
        <li @click="titleClick(item)" v-for="(item,index) in ctitlelist" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:"mvchose",
  props:{
    ctitlelist:{
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
   data() {
    return {
      seen:false
    }
  },
  methods: {
    titleClick(name){
      // console.log(name);
       let currentvalue = this.$refs.clicktitle.innerText;
      //  console.log(currentvalue)
      if(currentvalue == '排序'){
        this.$store.commit('changeOrder',name);
      }
      else if(currentvalue == '类型'){
        this.$store.commit('changeMvtype',name);
      }
    },
      onMouseOver() {
        this.seen=true
      },
      onMouseOut() {
        this.seen=false
      },
  },
    
}
</script>

<style>
.mvchose{
  position: relative;
  z-index: 2;
  margin-left: 30px;
  padding:0 10px;
  border-radius: 8px;
  border: 1px solid rgb(172, 172, 172);
}
.mvchose span::after{
  content: '';
  width: 0;
  height: 0;
}
.cateListBox{
  display: block;
  float: left;
  position: absolute;
  top: 50px;
  left: -10px;
  width: 80px;
  border-radius: 10px;
  background-color: rgb(218, 218, 218);
  box-shadow: 0px 0px 30px 1px rgba(0, 0,0,.4);
}
.cateListBox p{
  position: absolute;
  left: 24px;
  top: -14px;
  width: 0;
  height: 0;
  line-height: 0;
  font-size: 0;
  border: 7px solid transparent;
  border-bottom-color: rgb(218, 218, 218);
}
ul{
  margin-left: 0;
}
ul li{
  float: none;
}
</style>