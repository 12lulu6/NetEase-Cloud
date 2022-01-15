<template>
  <div class="songdispalylist">
    <div class="u_title">
      <h3>歌曲列表</h3>
      <span>共有<strong>{{ctracks.length}}</strong>首</span>
    </div> 
    <table class="m_table" cellpadding="10" border="1">
      <thead>
        <tr>
          <th class="w0"></th>
          <th>标题</th>
          <th class="w2">时长</th>
          <th class="w3">歌手</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in ctracks" :key="index">
          <td>
            {{index+1}}
          </td>
          <td  class="itemname">
            <!-- 点击播放音乐 -->
            <span @click="PlaysongClick(item.id)">{{item.name}}</span>
            </td>
          <td>{{getTime(item.dt)}}</td>
          <td>{{item.ar[0].name}}</td>
        </tr>
      </tbody>
    </table>
  </div>  
</template>

<script>
export default {
  name:"songdispalylist",
  props:{
    ctracks:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    getTime(dt){
      var time = new Date(dt);
      var m = time.getMinutes();
      var d = time.getSeconds();
      return (m<10? '0' +m:m) + ':' +(d<10? '0' +d:d);
      // return '0' +m+ ':' + (d<10? '0' +d:d);
    },
    PlaysongClick(id){
      console.log(id);
      this.$store.commit('changeMusic',id);
    }
  },
}
</script>

<style>
.songdispalylist{
  margin-top: 50px;
  padding-right: 40px;
  /* width: 500px; */
  /* height: 800px; */
}
.u_title{
  height: 33px;
  border-bottom: 2px solid #c20c0c;
}
.u_title h3{
  float: left;
  font-size: 20px;
    line-height: 28px;
}
.u_title span{
  float: right;
  margin: 9px 0 0 20px
}
.u_title strong{
  color: #c20c0c;
}
.m_table{
    border: 1px solid #d9d9d9;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
    text-align: left;
    
}
/* .m_table thead th{
  border:1px solid #f7f7f7;
} */
.m_table .w0{
  width: 77px;
}
.m_table .w2{
  width: 91px;
}
.m_table .w3{
  width: 26%;
}
.m_table th,
.m_table td{
  height: 38px;
  padding-left: 5px;
    background-color: #f7f7f7;
    background-position: 0 0;
    background-repeat: repeat-x;
}
.m_table .itemname{
  cursor: pointer;
  padding-right: 50px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.m_table .itemname:hover{
  text-decoration: underline;
    color: #333;
}
.m_table .itemname::before{
  content: "";
  display:inline-block;
  width: 20px;
  height: 20px;
  vertical-align:middle;
  background-image: url(../../../assets/img/icon.png);
  background-position:-45px 474px;
}

</style>