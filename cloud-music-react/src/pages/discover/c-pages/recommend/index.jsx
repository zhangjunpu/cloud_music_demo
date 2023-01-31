import React, { memo } from 'react';

import { RecommendWrapped } from './style';

import TopBanners from './c-cpns/top-banner';

const Recommend = memo(() => {
  return (
    <RecommendWrapped>
      <TopBanners />
    </RecommendWrapped>
  )
})

export default Recommend;