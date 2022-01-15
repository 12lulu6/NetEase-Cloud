<template>
  <div class="dropdown" @mouseenter="onMouseOver" @mouseleave="onMouseOut">
   <el-button type="primary" plain>选择分类</el-button>
  <div class="cateListBox" v-show="seen"  @mouseleave="onMouseOut">
    <p></p>
    <dl v-for="(value,key,index) in ccgetAllTags.categories" :key="index">
      <dt>
        {{value}}
      </dt>
      <div class="itemcontent" v-for="(item,index) in ccgetAllTags.sub" :key="index">
          <dd v-if="item.category == key">
            <span @click="cpoplistclick(item.name)">{{item.name}}</span>
          </dd>
      </div>
    </dl>
  </div>
  </div>  
</template>

<script>
export default {
  name:"dropdown",
   methods: {
      handleClick() {
        alert('button click');
      },
      onMouseOver() {
        this.seen=true
      },
      onMouseOut() {
        this.seen=false
      },
       cpoplistclick(name){
      //使用vuex来传祖孙组件之间传数据
     this.$store.commit('newState',name);
    //  console.log(this.$store.state.titlename);
    },
  },
  data() {
    return {
      seen:false
    }
  },
  props:{
    ccgetAllTags:{
       type:Object,
      default(){
        return {}
      }
    },
  }
}
</script>

<style>
.dropdown{
  position: relative;
  z-index: 2;
}
.dropdown button{
  margin-left: 10px;
  float: left;
}
.dropdown span::after{
  content: '';
  width: 0;
  height: 0;
}
.cateListBox{
  /* display: none; */
  float: left;
  position: absolute;
  top: 50px;
  left: 0;
  width: 720px;
  height: 410px;
  border-radius: 10px;
  background-color: rgb(218, 218, 218);
  box-shadow: 0px 0px 30px 1px rgba(0, 0,0,.4);
}
.cateListBox p{
  position: absolute;
  left: 67px;
  top: -14px;
  width: 0;
  height: 0;
  line-height: 0;
  font-size: 0;
  /* 宽高为0 只设置边框 让四边都为透明色 只设置底部边框的颜色 */
  border: 7px solid transparent;
  border-bottom-color: rgb(218, 218, 218);
}
dl{
  /* display: block; */
  float: left;
  width: 720px;
  margin-top: 20px;
}
dl dt{
  float: left;
    display: inline;
    width: 70px;
    margin: 0 28px 0 24px;;
    padding-top: 15px;
    border-right: 1px solid #e6e6e6;
    font-weight: bold;
}
dl dd{
  float: left;
  /* margin-left: 20px; */
  padding-left: 5px;
    border-left: 1px solid #e6e6e6;
    line-height: 24px;
}
dl dd span{
  white-space: nowrap;
}
dl .itemcontent{
  /* display: inline; */
  /* float: left; */
}
</style>