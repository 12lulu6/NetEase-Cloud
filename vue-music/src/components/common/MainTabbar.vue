<template>
  <div class="maintabbar">
    <img src="../../assets/img/logo.jpg" alt="">
    <tabbar>
      <tabbaritem path="/home" activeStyle="#ea986c">
          <template v-slot:icon-text>首页</template>
      </tabbaritem> 
      <tabbaritem path="/leaderboard" activeStyle="#ea986c">
          <template v-slot:icon-text>排行榜</template>
      </tabbaritem> 
      <tabbaritem path="/songlist" activeStyle="#ea986c">
          <template v-slot:icon-text>歌单</template>
      </tabbaritem> 
      <tabbaritem path="/MV" activeStyle="#ea986c">
          <template v-slot:icon-text>MV</template>
      </tabbaritem> 
      <tabbaritem path="/singer" activeStyle="#ea986c">
          <template v-slot:icon-text>歌手</template>
      </tabbaritem> 
      <tabbaritem path="/mysong" activeStyle="#ea986c">
          <template v-slot:icon-text>我的音乐</template>
      </tabbaritem> 
    </tabbar>
    <tab-search></tab-search>
    <playmusic></playmusic>
  </div>  
</template>

<script>
import TabSearch from './TabSearch.vue'
import playmusic from '../../components/common/PlayMusic/PlayMusic.vue'
import tabbar from './Tabbar/Tabbar.vue'
import tabbaritem from './Tabbar/TabbarItem.vue'
export default {
  name:"maintabbar",
  components: {
     TabSearch,
     tabbar,
     tabbaritem,
     playmusic
  },
}
</script>

<style>
.maintabbar{
  display: flex;
  height: 70px;
  line-height: 70px;
  text-align: center;
  font-size: 15px;
  box-shadow: 0 0 5px  2px rgba(0, 0, 0, .4);
}

</style>