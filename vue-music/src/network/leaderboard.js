import { request } from "./request";

//获取榜单
export function getLeaderBoardList(){
  return request({
    url: "/toplist"
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