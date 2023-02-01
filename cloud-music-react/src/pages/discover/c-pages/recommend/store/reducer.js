import { Map } from "immutable";
import * as actionTypes from "./constant";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  topList: [],
  settledSinger: [],
  hotAnchor: [],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set("topBanners", action.banners);
    case actionTypes.CHANGE_HOT_RECOMMENT:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums);
    case actionTypes.CHANGE_TOP_LIST:
      return state.set("topList", action.topList);
    case actionTypes.CHANGE_SETTLED_SINGER:
      return state.set("settledSinger", action.settledSinger);
    case actionTypes.CHANGE_HOT_ANCHOR:
      return state.set("hotAnchor", action.hotAnchor);
    default:
      return state;
  }
}

export default reducer;