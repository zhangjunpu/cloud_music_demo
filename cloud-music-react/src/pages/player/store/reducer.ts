import { PlaySequence } from "@/common/constant";
import { Lyric, SongDetail } from "@/types/data";
import { PlayerAction } from "@/types/store";
import Immutable, { Map } from "immutable";

export type IPlayerState = Immutable.Map<string, number | SongDetail[] | Lyric[] | SongDetail | null>;

const defaultState: IPlayerState = Map({
  playList: [],
  playSequence: PlaySequence.ORDER,
  currentIndex: 0,
  currentSong: null,
  lyricList: [],
  currentLyricIndex: 0,
});

const reducer = (state: IPlayerState = defaultState, action: PlayerAction) => {
  switch (action.type) {
    case "CHANGE_PLAY_LIST":
      return state.set("playList", action.playList);
    case "CHANGE_PLAY_SEQUENCE":
      return state.set("playSequence", action.playSequence);
    case "CHANGE_CURRENT_INDEX":
      return state.set("currentIndex", action.index);
    case "CHANGE_CURRENT_SONG":
      return state.set("currentSong", action.currentSong);
    case "CHANGE_LYRIC_LIST":
      return state.set("lyricList", action.lyricList);
    case "CHANGE_CURRENT_LYRIC_INDEX":
      return state.set("currentLyricIndex", action.lyricIndex);
    default:
      return state;
  }
};

export default reducer;
