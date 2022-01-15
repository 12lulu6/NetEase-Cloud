import { request } from "./request";

//获取歌单详情动态部分,如评论数,是否收藏,播放数
export function getPlayCollect(id){
  return request({
    url: "/playlist/detail/dynamic",
    params:{
      id
    }
  })
}
//获取歌单评论

export function getPlayCommit(id){
  return request({
    url: "/comment/playlist",
    params:{
      id
    }
  })
}
//获取最新上架专辑详情
export function getAlbumDetail(id){
  return request({
    url: "/album",
    params:{
      id
    }
  })
}

//可获得专辑动态信息,如是否收藏,收藏数,评论数,分享数
export function getAlbumCollect(id){
  return request({
    url: "/album/detail/dynamic",
    params:{
      id
    }
  })
}
//获取歌曲详情
export function getMusicDetail(id){
  return request({
    url: "/song/detail",
    params:{
      id
    }
  })
}

//获取专辑评论
export function getDisCommit(id){
  return request({
    url: "/comment/album",
    params:{
      id
    }
  })
}

//获取mv页面数据
export function getMVDetail(mvid){
  return request({
    url: "/mv/detail",
    params:{
      mvid
    }
  })
}

//获取mv地址
export function getMVUrl(id){
  return request({
    url: "/mv/url",
    params:{
      id
    }
  })
}
//获取mv的评论
export function getMVCommit(id){
  return request({
    url: "/comment/mv",
    params:{
      id
    }
  })
}

// 传入歌手 id, 可获得获取歌手详情
export function getSingerDetail(id){
  return request({
    url: "/artist/detail",
    params:{
      id
    }
  })
}
//获取相似歌手
export function getSimi_Singer(id){
  return request({
    url: "/simi/artist",
    params:{
      id
    }
  })
}
