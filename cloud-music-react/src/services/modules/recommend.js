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