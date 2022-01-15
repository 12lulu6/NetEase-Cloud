import { request } from "./request";

//获取全部歌单分类
export function getAllTags(){
  return request({
    url: "/playlist/catlist"
  })
}
//获取该歌单
export function getHotList(cat){
  return request({
    url: "/top/playlist/highquality",
    params:{
      cat
    }
  })
}