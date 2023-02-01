import React, { memo } from 'react';

import { RecommendWrapped, RecommendLeft, RecommendRight } from './style';

import TopBanners from './c-cpns/top-banner';
import HotRecommend from './c-cpns/hot-recommend';
import NewAlbum from './c-cpns/new-album';
import TopList from './c-cpns/top-list';

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

        </RecommendRight>
      </div>
    </RecommendWrapped>
  )
})

export default Recommend;