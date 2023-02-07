import { PlaySequence } from "@/common/constant";
import { Map } from "immutable";

import * as actionTypes from "./constant";

const defaultState = Map({
  playList: [],
  playSequence: PlaySequence.ORDER,
  currentIndex: 0,
  currentSong: null,
  lyricList: [],
  currentLyricIndex: 0,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_PLAY_SEQUENCE:
      return state.set("playSequence", action.playSequence);
    case actionTypes.CHANGE_CURRENT_INDEX:
      return state.set("currentIndex", action.index);
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.lyricIndex);
    default:
      return state;
  }
};

export default reducer;
