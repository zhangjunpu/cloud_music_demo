import { CHANGE_HOT_ANCHOR, CHANGE_HOT_RECOMMENT, CHANGE_NEW_ALBUM, CHANGE_SETTLED_SINGER, CHANGE_TOP_BANNER, CHANGE_TOP_LIST } from "./constant";
import {
  requestTopBanners,
  requestHotRecommends,
  requestNewAlbums,
  requestToplist,
  requestSettledSinger,
  requestHotAnchor,
} from '@/services/modules/recommend'

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
const changeHotRecommendsAction = (hotRecommends) => ({
  type: CHANGE_HOT_RECOMMENT,
  hotRecommends,
})

/**
 * 更新新碟上架
 */
const changeNewAlbumsAction = (newAlbums) => ({
  type: CHANGE_NEW_ALBUM,
  newAlbums,
})

/**
 * 更新榜单数据
 */
const changeTopListAction = (topList) => ({
  type: CHANGE_TOP_LIST,
  topList,
})

/**
 * 更新入驻歌手
 */
const changeSettledSingerAction = (settledSinger) => ({
  type: CHANGE_SETTLED_SINGER,
  settledSinger,
})

/**
 * 更新热门主播
 */
const changeHotAnchorAction = (hotAnchor) => ({
  type: CHANGE_HOT_ANCHOR,
  hotAnchor,
})

/**
 * 请求 topbanners 数据
 */
export const requestTopBannersAction = () => {
  return dispatch => {
    requestTopBanners().then(res => dispatch(changeTopBannersAction(res && res.banners)));
  }
}

/**
 * 请求热门推荐
 */
export const requestHotRecommendsAction = (limit) => {
  return dispatch => {
    requestHotRecommends(limit).then(res => dispatch(changeHotRecommendsAction(res && res.result)));
  }
}

/**
 * 请求新碟上架
 */
export const requestNewAlbumsAction = (limit) => {
  return dispatch => {
    requestNewAlbums(limit).then(res => dispatch(changeNewAlbumsAction(res && res.albums)));
  }
}

/**
 * 请求榜单数据
 */
export const reqeustTopListAction = () => {
  return dispatch => {
    requestToplist().then(res => dispatch(changeTopListAction(res)));
  }
}

/**
 * 请求入驻歌手
 */
export const requestSettledSingerAction = (limit) => {
  return dispatch => {
    requestSettledSinger(limit).then(res => dispatch(changeSettledSingerAction(res.artists)));
  }
}

/**
 * 请求热门主播
 */
export const requestHotAnchorAction = (limit) => {
  return dispatch => {
    requestHotAnchor(limit).then(res => {
      return dispatch(changeHotAnchorAction(res.data.list));
    });
  }
}