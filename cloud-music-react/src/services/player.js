import request from "./base/request";

/**
 * 获取歌曲详情
 */
export function requestSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids,
    },
  });
}
