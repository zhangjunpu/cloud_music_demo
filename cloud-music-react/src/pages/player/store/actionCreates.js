import * as actionTypes from "./constant";
import { requestSongDetail } from "@/services/player";

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

/**
 * 请求歌曲详情
 */
export function requestSongDetailAction(ids) {
  return (dispatch) => {
    requestSongDetail(ids).then((res) => {
      const song = res && res.songs && res.songs[0];
      dispatch(changeCurrentSongAction(song));
    });
  };
}
