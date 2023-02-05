import request from "./base/request";

/**
 * 获取歌曲详情
 */
export const requestSongDetail = (ids) => {
  return request({
    url: "/song/detail",
    params: {
      ids,
    },
  });
};

/**
 * 请求歌词
 */
export const requestLyric = (id) => {
  return request({
    url: "/lyric",
    params: {
      id,
    },
  });
};
