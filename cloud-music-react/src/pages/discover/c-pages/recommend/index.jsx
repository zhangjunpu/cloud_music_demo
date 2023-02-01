import React, { memo } from 'react';

import { RecommendWrapped, RecommendLeft, RecommendRight } from './style';

import TopBanners from './c-cpns/top-banner';
import HotRecommend from './c-cpns/hot-recommend';
import NewAlbum from './c-cpns/new-album';
import TopList from './c-cpns/top-list';
import SettledSinger from './c-cpns/settled-singer';
import HotAnchor from './c-cpns/hot-anchor';

/**
 * 发现 - 推荐
 * @author junpu
 * @date 2023-02-01 17:49
 */
const Recommend = memo(() => {
  return (
    <RecommendWrapped>
      <TopBanners />
      <div className="content wrap_2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <TopList />
        </RecommendLeft>

        <RecommendRight>
          <div className="login sprite_02">
            <p className="text">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <button className="btn sprite_02">用户登录</button>
          </div>
          <SettledSinger />
          <HotAnchor />
        </RecommendRight>
      </div>
    </RecommendWrapped>
  )
})

export default Recommend;