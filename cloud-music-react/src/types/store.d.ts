import Immutable from "immutable";
import { ReducersMapObject } from "redux";
import { ThunkAction } from "redux-thunk";
import type { SongDetail, Lyric, Banner, HotRecommend, Album, SongList, Artist, DJAnchor } from "./data";

// 1. RootState
// export type RootState = ReturnType<typeof store.getState>;
export type RootState = Immutable.Map<any, number | never[] | ReducersMapObject<any, RootAction> | null>;

// 播放器 Action
export type PlayerAction =
  | {
      type: "CHANGE_CURRENT_SONG";
      currentSong: SongDetail;
    }
  | {
      type: "CHANGE_PLAY_LIST";
      playList: SongDetail[];
    }
  | {
      type: "CHANGE_PLAY_SEQUENCE";
      playSequence: number;
    }
  | {
      type: "CHANGE_CURRENT_INDEX";
      index: number;
    }
  | {
      type: "CHANGE_LYRIC_LIST";
      lyricList: Lyric[];
    }
  | {
      type: "CHANGE_CURRENT_LYRIC_INDEX";
      lyricIndex: number;
    };

// 推荐页 Action
export type RecommendAction =
  | {
      type: "CHANGE_TOP_BANNER";
      banners: Banner[];
    }
  | {
      type: "CHANGE_HOT_RECOMMENT";
      hotRecommends: HotRecommend[];
    }
  | {
      type: "CHANGE_NEW_ALBUM";
      newAlbums: Album[];
    }
  | {
      type: "CHANGE_TOP_LIST";
      topList: SongList[];
    }
  | {
      type: "CHANGE_SETTLED_SINGER";
      settledSinger: Artist[];
    }
  | {
      type: "CHANGE_HOT_ANCHOR";
      hotAnchor: DJAnchor[];
    };

// 2. RootAction
export type RootAction = SongAction | RecommendAction;

// 3. RootThunkAction
export type RootThunkAction = ThunkAction<any, RootState, unknown, RotAction>;

// 4. RootThunkDispatch
export type RootThunkDispatch = ThunkDispatch<RootState, unknown, RootAction>;
