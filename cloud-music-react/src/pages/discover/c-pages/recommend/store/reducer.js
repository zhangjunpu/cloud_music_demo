import { Map } from "immutable";
import * as actionTypes from "./constant";

const defaultState = Map({
    topBanners: [],
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNER:
            return state.set("topBanners", action.banners);
        default:
            return state;
    }
}

export default reducer;