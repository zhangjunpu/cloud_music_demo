import request from '../request';

/**
 * banner 数据
 */
export function requestTopBanners() {
  return request.get('/banner');
}

/**
 * 热门歌单
 */
export function requestHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit,
    }
  });
}

/**
 * 新碟上架
 */
export function requestNewAlbums(limit) {
  return request({
    url: "/album/new",
    params: {
      limit,
    }
  });
}

/**
 * 请求榜单数据
 */
export function requestRanking(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
      s: 0,
    }
  });
}

/**
 * 请求榜单数据
 */
export function requestToplist() {
  return Promise.all([requestRanking(19723756), requestRanking(3779629), requestRanking(2884035)]).then(res => {
    return res.map(item => item.playlist);
  })
}

/**
 * 入驻歌手
 */
export function requestSettledSinger(limit) {
  return request({
    url: "/artist/list",
    params: {
      limit
    }
  })
}

/**
 * 热门主播
 */
export function requestHotAnchor(limit) {
  return request({
    url: "/dj/toplist/popular",
    params: {
      limit
    }
  })
}