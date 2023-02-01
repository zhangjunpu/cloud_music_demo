import { Map } from "immutable";
import * as actionTypes from "./constant";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set("topBanners", action.banners);
    case actionTypes.CHANGE_HOT_RECOMMENT:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums);
    default:
      return state;
  }
}

export default reducer;