import { createStore } from "vuex";

export default createStore({
  state: {
    //这个存的市热门推荐的name
    titlename:'电子',
    //是热门还是新碟
    titlevalue:'',
    //存三个榜单的id 飙升榜，新歌榜 不用去/toplist请求
    Soaring_list:19723756,
    New_song_list:3779629,
    Original_list:2884035,
    //控制下方的播放条是否显示
    dialog_visible: false,
    //存的是点击该歌曲的id，默认为1894094482
    musicid:1894094482,
    //存当前榜单的id 默认飙升榜
    current_listid:19723756,
    //存mv当前值为什么？上升最快,最热,最新
    current_order:'上升最快',
    //mv类型
    curent_mvtype:'全部',
    //选取歌手类型
    current_type:-1,
    current_area:-1,
    current_initial:'A',
  },
  mutations: {
    newState(state,payload){
      state.titlename = payload;
      // console.log(state.titlename);
    },
    newTitlevalue(state,payload){
      state.titlevalue = payload;
      // console.log(state.titlevalue);
    },
    changeListid(state,payload){
      state.current_listid = payload;
      // console.log("index",state.current_listid);
    },
    //改变播放条显示,将点击歌曲的id存到
    changeMusic(state,payload){
      state.musicid = payload;
      state.dialog_visible = true;
    },
    changeVisible(state){
      state.dialog_visible = false;
    },
    changeOrder(state,payload){
      state.current_order = payload;
    },
    changeMvtype(state,payload){
      state.curent_mvtype = payload;
    },
    //改变singer
    change_singer_type(state,payload){
      state.current_type = payload;
      // console.log(state.current_type);
    },
    change_singer_area(state,payload){
      state.current_area = payload;
      // console.log(state.current_area);
    },
    change_singer_initial(state,payload){
      state.current_initial = payload;
      // console.log(state.current_initial);
    }
  },  
  actions: {},  
  modules: {},
});
