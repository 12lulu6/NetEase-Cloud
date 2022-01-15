import { request } from "./request";

//可获取全部 mv
export function getAllMv(area,order){
  return request({
    url: "/mv/all",
    params:{
      area,
      order
    }
  })
}