/**
 * 歌曲详情
 */
export type SongDetail = {
  name: string;
  id: number;
  ar: Artist[];
  al: Album;
  dt: number;
};

/**
 * 艺术家
 */
export type Artist = {
  id: number;
  name: string;
  picUrl: string;
  img1v1Url: string;
  followed: boolean;
  musicSize: number;
  albumSize: number;
  alias: string[];
};

/**
 * 专辑
 */
export type Album = {
  id: number;
  name: string;
  blurPicUrl: string;
  picUrl: string;
  picId: number;
  publishTime: number;
  company: string;
  tags: string;
  description: string;
  status: number;
  subType: string;
  type: string;
  size: number;
  artists: Artist[];
  artist: Artist;
};

/**
 * 歌词
 */
export type Lyric = {
  time: number;
  content: string;
};

/**
 * banner
 */
export type Banner = {
  imageUrl: string;
  targetId: number;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  exclusive: boolean;
  encodeId: string;
  scm: string;
  bannerBizType: string;
};

/**
 * 热门推荐
 */
export type HotRecommend = {
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
  trackCount: number;
};

/**
 * 歌单
 */
export type SongList = {
  id: number;
  name: string;
  coverImgUrl: string;
  description: string;
  trackCount: number;
  playCount: number;
  subscribedCount: number;
  shareCount: number;
  commentCount: number;
  tracks: SongDetail[];
};

/**
 * DJ主播
 */
export type DJAnchor = {
  id: number;
  rank: number;
  lastRank: number;
  score: number;
  nickName: string;
  avatarUrl: string;
  userType: number;
  userFollowedCount: number;
  mainAuthDesc: string;
  liveStatus: number;
  liveType: number;
  liveId: number;
  avatarDetail: {
    userType: number;
    identityLevel: number;
    identityIconUrl: string;
  };
  roomNo: number;
};
