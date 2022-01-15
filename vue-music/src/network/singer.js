import { request } from "./request";

//可获取全部 歌手分类
export function getAllSinger(type,area,initial){
  return request({
    url: "/artist/list",
    params:{
      type,
      area,
      initial
    }
  })
}