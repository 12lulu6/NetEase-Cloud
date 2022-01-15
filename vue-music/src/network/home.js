import { request } from "./request";

export function getHomeBanner(type){
  return request({
    url: "/banner",
    params:{
      type
    }
  })
}
//获取热门歌单分类
export function getHotTags(){
  return request({
    url: "/playlist/hot"
  })
}
//获取精品歌单  
export function getHotList(cat){
  return request({
    url: "/top/playlist/highquality",
    params:{
      cat
    }
  })
}
//获得最新专辑上架
export function getNewAlbum(){
  return request({
    url: "/album/newest"
  })
}
//获取全部新碟
export function getAllAlbum(){
  return request({
    url: "/album/new"
  })
}

//获取某个排行榜
export function getOneList(id){
  return request({
    url: "/playlist/detail",
    params:{
      id
    }
  })
}
//获取音乐的url
export function getMusic(id){
  return request({
    url: "/song/url",
    params:{
      id
    }
  })
}
//获取该歌曲的信息
export function getMusicDetail(ids){
  return request({
    url: "/song/detail",
    params:{
      ids
    }
  })
}

