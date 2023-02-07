import * as actionTypes from "./constant";
import { requestLyric, requestSongDetail } from "@/services/player";
import { PlaySequence } from "@/common/constant";
import { randomInt } from "@/utils/random";
import { parseLyric } from "@/utils/lyric-utils";

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

const changeLyricsListAction = (lyricList) => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList,
});

/**
 * 变更当前歌词索引
 */
export const changeCurrentLyricIndexAction = (lyricIndex) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  lyricIndex,
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
    const song = playList[index];
    dispatch(changeCurrentIndexAction(index));
    dispatch(changeCurrentSongAction(song));
    dispatch(requestLyricAction(song.id));
  };
};

/**
 * 请求播放歌曲
 */
export const requestPlayMusicAction = (id) => {
  return (dispatch, getState) => {
    const state = getState();
    // 1. 在 playlist 中查找 id
    const playList = state.getIn(["player", "playList"]);
    const index = playList.findIndex((item) => item.id === id);

    // 2. 找到了，说明播放列表中有这首歌曲，直接更改 currentIndex、currentSong
    if (index !== -1) {
      // 如果当前正在播放此歌曲，直接返回
      const currentIndex = state.getIn(["player", "currentIndex"]);
      if (currentIndex === index) return;

      const song = playList[index];
      dispatch(changeCurrentIndexAction(index));
      dispatch(changeCurrentSongAction(song));
      dispatch(requestLyricAction(song.id));
    } else {
      // 3. 没找到，请求歌曲详情，添加到 playlist，变更 currentIndex，currentSong
      requestSongDetail(id).then((res) => {
        const song = res && res.songs && res.songs[0];
        if (!song) return;

        const newPlayList = [...playList, song];

        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));
        dispatch(requestLyricAction(song.id));
      });
    }
  };
};

/**
 * 请求歌词
 */
const requestLyricAction = (id) => {
  return (dispatch) => {
    requestLyric(id).then((res) => {
      const lyric = res && res.lrc && res.lrc.lyric;
      if (!lyric) return;
      const lyricList = parseLyric(lyric);
      dispatch(changeLyricsListAction(lyricList));
    });
  };
};

/**
 * 根据 index 删除歌曲
 */
export const deleteSongByIndexAction = (index) => {
  return (dispatch, getState) => {
    const state = getState();
    const playList = state.getIn(["player", "playList"]);
    const currentIndex = state.getIn(["player", "currentIndex"]);

    const newList = playList.filter((_, i) => index !== i);

    dispatch(changePlayListAction(newList));
    console.log(newList, !newList);
    if (!newList || !newList.length) {
      dispatch(changeCurrentIndexAction(0));
      return;
    }

    if (index < currentIndex) {
      dispatch(changeCurrentIndexAction(currentIndex - 1));
    } else if (currentIndex === index) {
      // 删除的是当前正在播放的歌曲
      const newIndex = index >= newList.length ? newList.length - 1 : index;
      const newSong = newList[newIndex];
      dispatch(changeCurrentIndexAction(newIndex));
      dispatch(changeCurrentSongAction(newSong));
      dispatch(requestLyricAction(newSong.id));
    }
  };
};

/**
 * 清空播放列表
 */
export const clearPlayListAction = () => {
  return (dispatch, getState) => {
    const state = getState();
    const playList = state.getIn(["player", "playList"]);
    if (!playList || !playList.length) return;

    dispatch(changeCurrentIndexAction(0));
    dispatch(changePlayListAction([]));
  };
};
