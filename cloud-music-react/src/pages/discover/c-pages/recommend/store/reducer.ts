import { RecommendAction } from "@/types/store";
import { Map } from "immutable";
import { Banner, HotRecommend, Album, SongList, Artist, DJAnchor } from "@/types/data";

export type IRecommendState = Immutable.Map<
  String,
  Banner[] | HotRecommend[] | Album[] | SongList[] | Artist[] | DJAnchor[]
>;

const defaultState: IRecommendState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  topList: [],
  settledSinger: [],
  hotAnchor: [],
});

const reducer = (state = defaultState, action: RecommendAction) => {
  switch (action.type) {
    case "CHANGE_TOP_BANNER":
      return state.set("topBanners", action.banners);
    case "CHANGE_HOT_RECOMMENT":
      return state.set("hotRecommends", action.hotRecommends);
    case "CHANGE_NEW_ALBUM":
      return state.set("newAlbums", action.newAlbums);
    case "CHANGE_TOP_LIST":
      return state.set("topList", action.topList);
    case "CHANGE_SETTLED_SINGER":
      return state.set("settledSinger", action.settledSinger);
    case "CHANGE_HOT_ANCHOR":
      return state.set("hotAnchor", action.hotAnchor);
    default:
      return state;
  }
};

export default reducer;
