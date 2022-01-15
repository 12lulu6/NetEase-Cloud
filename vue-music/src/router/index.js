import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";

const routes = [
  {
    path: '/',
    redirect: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: "/leaderboard",
    name: "leaderboard",
    component: () =>
      import("../views/Leaderboard/Leaderboard.vue"),
  },
  {
    path: "/songlist",
    name: "songlist",
    component: () =>
      import("../views/SongList/SongList.vue"),
  },
  {
    path: "/MV",
    name: "MV",
    component: () =>
      import("../views/MV/MV.vue"),
  },
  {
    path: "/singer",
    name: "singer",
    component: () =>
      import("../views/Singer/Singer.vue"),
  },
  {
    path: "/mysong",
    name: "mysong",
    component: () =>
      import("../views/Mysong/Mysong.vue"),
  },
  {
    path: "/discdetail/:id",
    name: "discdetail",
    component: () =>
      import("../views/Home/DiscDetail/DiscDetail.vue"),
  },
  {
    path: "/musicdetail/:id",
    name: "musicdetail",
    component: () =>
      import("../views/Home/MusicDetail/MusicDetail.vue"),
  },
  {
    path: "/playdetail/:id",
    name: "playdetail",
    component: () =>
      import("../views/Home/DiscDetail/PlayDetail.vue"),
  },
  {
    path: "/mvdetail/:mvid",
    name: "mvdetail",
    component: () =>
      import("../components/content/Mv/MvDetail/MvDetail.vue"),
  },
  {
    path: "/singerDetail/:mvid",
    name: "singerDetail",
    component: () => import("../components/content/Singer/SingerDetail/SingerDetail.vue"),
    children:[
      {
        path: "popularsinger",
        component: () =>
        import("../components/content/Singer/SingerDetail/Children/Popular_Singer.vue"),
      },
      {
        path: "all_albums",
        component: () =>
        import("../components/content/Singer/SingerDetail/Children/All_Albums .vue"),
      },
      {
        path: "related_MVs",
        component: () =>
        import("../components/content/Singer/SingerDetail/Children/Related_MVs .vue"),
      },
      {
        path: "about_artist",
        component: () =>
        import("../components/content/Singer/SingerDetail/Children/About_Artist.vue"),
      },
    ]
  },
  
  {
    path: "/hotplaylistmore/:name",
    name: "hotplaylistmore",
    component: () =>
      import("../views/Home/Discover/HotPlayListMore.vue"),
  },
  {
    path: "/newdiscmore",
    name: "newdiscmore",
    component: () =>
      import("../views/Home/Discover/NewDiscMore.vue"),
  },
  {
    path: "/playmusic",
    name: "playmusic",
    component: () =>
      import("../components/common/PlayMusic/PlayMusic.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
