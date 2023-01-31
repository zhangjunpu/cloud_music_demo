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
export function requestHotRecommend() {
  return request({
    url: "/personalized",
    params: {
      limit: 8
    }
  });
}