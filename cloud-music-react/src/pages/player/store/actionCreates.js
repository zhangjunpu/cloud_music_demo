import * as actionTypes from "./constant";
import { requestSongDetail } from "@/services/player";
import { PlaySequence } from "@/common/constant";
import { randomInt } from "@/utils/random";

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
});

const changePlaySequenceAction = (playSequence) => ({
  type: actionTypes.CHANGE_PLAY_SEQUENCE,
  playSequence,
});

const changeCurrentIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  index,
});

/**
 * 切换播放顺序模式
 */
export const switchPlaySequenceAction = (playSequence) => {
  return (dispatch) => {
    playSequence = playSequence + 1;
    if (playSequence > 2) {
      playSequence = 0;
    }
    dispatch(changePlaySequenceAction(playSequence));
  };
};

/**
 * 上一首 or 下一首
 */
export const prevOrNextAction = (tag) => {
  return (dispatch, getState) => {
    const state = getState();
    const playList = state.getIn(["player", "playList"]);
    const playSequence = state.getIn(["player", "playSequence"]);
    let currentIndex = state.getIn(["player", "currentIndex"]);

    if (playList.length <= 1) return;

    let index;
    if (playSequence === PlaySequence.RANDOM) {
      do {
        index = randomInt(playList.length);
      } while (index === currentIndex);
    } else {
      index = currentIndex + tag;
      if (index >= playList.length) index = 0;
      if (index < 0) index = playList.length - 1;
    }
    dispatch(changeCurrentIndexAction(index));
    dispatch(changeCurrentSongAction(playList[index]));
  };
};

/**
 * 请求歌曲详情
 */
export const requestPlayMusicAction = (id) => {
  return (dispatch, getState) => {
    const state = getState();
    // 1. 在 playlist 中查找 id
    const playList = state.getIn(["player", "playList"]);
    const index = playList.findIndex((item) => item.id === id);

    // 2. 如果找到了，直接更改 currentIndex、currentSong
    if (index !== -1) {
      // 如果当前正在播放此歌曲，直接返回
      const currentIndex = state.getIn(["player", "currentIndex"]);
      if (currentIndex === index) return;

      dispatch(changeCurrentIndexAction(index));
      dispatch(changeCurrentSongAction(playList[index]));
    } else {
      // 3. 如果没找到，请求歌曲详情，添加到 playlist结尾，变更 currentIndex，currentSong
      requestSongDetail(id).then((res) => {
        const song = res && res.songs && res.songs[0];
        const newPlayList = [...playList, song];

        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));
      });
    }
  };
};
