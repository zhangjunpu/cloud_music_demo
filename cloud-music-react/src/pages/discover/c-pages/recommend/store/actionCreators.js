import { CHANGE_TOP_BANNER } from "./constant";
import { requestTopBanners } from '@/services/modules/recommend'

/**
 * 更新 topbanners action
 */
const changeTopBannersAction = (banners) => ({
    type: CHANGE_TOP_BANNER,
    banners,
})

/**
 * 请求 topbanners 数据，并发送更新 topbanners action
 */
export const requestTopBannersAction = () => {
    return dispatch => {
        requestTopBanners().then(res => {
            return dispatch(changeTopBannersAction(res.banners))
        })
    }
}