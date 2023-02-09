import { SongList } from "@/types/data";
import { ResArtists, ResBanner, ResDJAnchor, ResHotRecommend, ResNewAlbum, ResRanking } from "@/types/response";
import request from "./base/request";

/**
 * banner 数据
 */
export function requestTopBanners(): Promise<ResBanner> {
  return request.get("/banner");
}

/**
 * 热门歌单
 */
export function requestHotRecommends(limit: number): Promise<ResHotRecommend> {
  return request({
    url: "/personalized",
    params: {
      limit,
    },
  });
}

/**
 * 新碟上架
 */
export function requestNewAlbums(limit: number): Promise<ResNewAlbum> {
  return request({
    url: "/album/new",
    params: {
      limit,
    },
  });
}

/**
 * 请求单一榜单
 */
export function requestRanking(id: number): Promise<ResRanking> {
  return request({
    url: "/playlist/detail",
    params: {
      id,
      s: 0,
    },
  });
}

/**
 * 请求榜单数据
 */
export function requestToplist(): Promise<SongList[]> {
  return Promise.all([requestRanking(19723756), requestRanking(3779629), requestRanking(2884035)]).then((res) => {
    return res.map((item) => item.playlist);
  });
}

/**
 * 入驻歌手
 */
export function requestSettledSinger(limit: number): Promise<ResArtists> {
  return request({
    url: "/artist/list",
    params: {
      limit,
    },
  });
}

/**
 * 热门主播
 */
export function requestHotAnchor(limit: number): Promise<ResDJAnchor> {
  return request({
    url: "/dj/toplist/popular",
    params: {
      limit,
    },
  });
}
