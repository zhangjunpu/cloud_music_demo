import request from '../request';

/**
 * 推荐页面 banner 数据
 */
export function requestTopBanners() {
    return request.get('/banner');
}