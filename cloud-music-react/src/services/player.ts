import { ResLyric, ResSongDetail } from "@/types/response";
import request from "./base/request";

/**
 * 获取歌曲详情
 */
export const requestSongDetail = (ids: number): Promise<ResSongDetail> => {
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
export const requestLyric = (id: number): Promise<ResLyric> => {
  return request({
    url: "/lyric",
    params: {
      id,
    },
  });
};
