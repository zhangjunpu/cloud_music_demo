import { Banner, HotRecommend, Album, Artist } from "./data";

export type ResSongDetail = {
  songs: SongDetail[];
};

export type ResLyric = {
  lrc: {
    lyric: string;
  };
};

export type ResBanner = {
  banners: Banner[];
};

export type ResHotRecommend = {
  result: HotRecommend[];
};

export type ResNewAlbum = {
  albums: Album[];
};

export type ResRanking = {
  playlist: SongList;
};

export type ResArtists = {
  artists: Artist[];
};

export type ResDJAnchor = {
  data: {
    list: List[];
  };
};
