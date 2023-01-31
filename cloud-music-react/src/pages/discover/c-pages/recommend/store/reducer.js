import { Map } from "immutable";
import * as actionTypes from "./constant";

const defaultState = Map({
  topBanners: [],
  hotRecommend: [],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set("topBanners", action.banners);
    case actionTypes.CHANGE_HOT_RECOMMENT:
      return state.set("hotRecommend", action.hotRecommend);
    default:
      return state;
  }
}

export default reducer;