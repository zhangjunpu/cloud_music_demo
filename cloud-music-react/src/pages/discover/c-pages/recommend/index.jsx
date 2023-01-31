import React, { memo } from 'react';

import { RecommendWrapped, RecommendLeft, RecommendRight } from './style';

import TopBanners from './c-cpns/top-banner';
import HotRecommend from './c-cpns/hot-recommend';
import NewAlbum from './c-cpns/new-album';
import RecommendRanking from './c-cpns/recommend-ranking';

const Recommend = memo(() => {
  return (
    <RecommendWrapped>
      <TopBanners />
      <div className="content wrap_2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RecommendRanking />
        </RecommendLeft>

        <RecommendRight>

        </RecommendRight>
      </div>
    </RecommendWrapped>
  )
})

export default Recommend;