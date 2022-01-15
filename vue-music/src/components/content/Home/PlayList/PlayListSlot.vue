<template>
  <div class="playlistslot">
    <div class="playlisttop">
      <h2 ref='lefttitle'>
        <slot name="lefttitle" class="righttitle"></slot> 
      </h2>
      <slot name="titlelist"></slot> 
      <span @click="MoreClick">
        <slot name="righttitle"></slot>
      </span>
    </div>
    <slot name="contentlist"></slot>
  </div>  
</template>
<script>  
export default {
  name:"playlistslot",

  methods: {
    //点击更多
    MoreClick(){
      //将这个热门推荐和新碟存到store中
      let currentvalue = this.$refs.lefttitle.innerText;
       this.$store.commit('newTitlevalue',currentvalue);

      if(this.$refs.lefttitle.innerText == '热门推荐'){
        this.$router.push('/hotplaylistmore/'+ this.$store.state.titlename)
      }
      else if(this.$refs.lefttitle.innerText == '新辑上架'){
        this.$router.push('/newdiscmore')
      }
      else if(this.$refs.lefttitle.innerText == '榜单'){
        this.$router.push('leaderboard')
      }
      else if(this.$refs.lefttitle.innerText == '全部歌单'){
        // this.$router.push('leaderboard')
         this.$store.commit('newState','华语');

      }
      
    }
  }
}
</script>

<style>
.playlisttop{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.playlisttop h2::before{
  content: "";
  display:inline-block;
  width: 40px;
  height: 40px;
  vertical-align:middle;
  background-image: url(../../../../assets/img/index.png);
  background-position:193px 313px;
}
.playlisttop span{
  margin-left: auto;
  font-size: 15px;
  cursor: pointer;
  padding-right: 18px;
}
.playlisttop span::after{
  content: "";
  display:inline-block;
  width: 20px;
  height: 20px;
  vertical-align:middle;
  background-image: url(../../../../assets/img/index.png);
  background-position: 5px 229px;
}
</style>