import { CHANGE_HOT_RECOMMENT, CHANGE_TOP_BANNER } from "./constant";
import { requestTopBanners, requestHotRecommend } from '@/services/modules/recommend'

/**
 * 更新 topbanners action
 */
const changeTopBannersAction = (banners) => ({
  type: CHANGE_TOP_BANNER,
  banners,
})

/**
 * 更新热门推荐
 */
const changeHotRecommendAction = (hotRecommend) => ({
  type: CHANGE_HOT_RECOMMENT,
  hotRecommend,
})

/**
 * 请求 topbanners 数据，并发送更新 topbanners action
 */
export const requestTopBannersAction = () => {
  return dispatch => {
    requestTopBanners().then(res => {
      return dispatch(changeTopBannersAction(res && res.banners))
    })
  }
}

/**
 * 请求热门推荐数据
 */
export const requestHotRecommendAction = () => {
  return dispatch => {
    requestHotRecommend().then(res => {
      return dispatch(changeHotRecommendAction(res && res.result));
    })
  }
}