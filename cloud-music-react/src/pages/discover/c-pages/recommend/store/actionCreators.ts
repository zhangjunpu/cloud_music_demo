import {
  requestTopBanners,
  requestHotRecommends,
  requestNewAlbums,
  requestToplist,
  requestSettledSinger,
  requestHotAnchor,
} from "@/services/recommend";
import { Album, Artist, Banner, DJAnchor, HotRecommend, SongList } from "@/types/data";
import { RecommendAction } from "@/types/store";
import { Dispatch } from "redux";

const changeTopBannersAction = (banners: Banner[]): RecommendAction => ({
  type: "CHANGE_TOP_BANNER",
  banners,
});

const changeHotRecommendsAction = (hotRecommends: HotRecommend[]): RecommendAction => ({
  type: "CHANGE_HOT_RECOMMENT",
  hotRecommends,
});

const changeNewAlbumsAction = (newAlbums: Album[]): RecommendAction => ({
  type: "CHANGE_NEW_ALBUM",
  newAlbums,
});

const changeTopListAction = (topList: SongList[]): RecommendAction => ({
  type: "CHANGE_TOP_LIST",
  topList,
});

const changeSettledSingerAction = (settledSinger: Artist[]): RecommendAction => ({
  type: "CHANGE_SETTLED_SINGER",
  settledSinger,
});

const changeHotAnchorAction = (hotAnchor: DJAnchor[]): RecommendAction => ({
  type: "CHANGE_HOT_ANCHOR",
  hotAnchor,
});

/**
 * 请求 topbanners 数据
 */
export const requestTopBannersAction = () => {
  return async (dispatch: Dispatch) => {
    const res = await requestTopBanners();
    dispatch(changeTopBannersAction(res && res.banners));
  };
};

/**
 * 请求热门推荐
 */
export const requestHotRecommendsAction = (limit: number) => {
  return async (dispatch: Dispatch) => {
    const res = await requestHotRecommends(limit);
    dispatch(changeHotRecommendsAction(res && res.result));
  };
};

/**
 * 请求新碟上架
 */
export const requestNewAlbumsAction = (limit: number) => {
  return async (dispatch: Dispatch) => {
    const res = await requestNewAlbums(limit);
    dispatch(changeNewAlbumsAction(res && res.albums));
  };
};

/**
 * 请求榜单数据
 */
export const reqeustTopListAction = () => {
  return async (dispatch: Dispatch) => {
    const res = await requestToplist();
    dispatch(changeTopListAction(res));
  };
};

/**
 * 请求入驻歌手
 */
export const requestSettledSingerAction = (limit: number) => {
  return async (dispatch: Dispatch) => {
    const res = await requestSettledSinger(limit);
    dispatch(changeSettledSingerAction(res && res.artists));
  };
};

/**
 * 请求热门主播
 */
export const requestHotAnchorAction = (limit: number) => {
  return async (dispatch: Dispatch) => {
    const res = await requestHotAnchor(limit);
    dispatch(changeHotAnchorAction(res && res.data.list));
  };
};
