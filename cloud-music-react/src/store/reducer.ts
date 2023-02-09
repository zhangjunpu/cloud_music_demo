import { combineReducers } from "redux-immutable";
import { reducer as recommentReducer } from "@/pages/discover/c-pages/recommend/store";
import { reducer as playerReducer } from "@/pages/player/store";

const reducer = combineReducers({
  recommend: recommentReducer,
  player: playerReducer,
});

export default reducer;
