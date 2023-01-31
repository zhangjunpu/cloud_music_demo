import React, { memo } from 'react';

import { RecommendRankingWrapped } from './style';
import HeaderRCM from '@/components/header-rcm';

const RecommendRanking = memo(() => {
  return (
    <RecommendRankingWrapped>
      <HeaderRCM title="榜单" more />
    </RecommendRankingWrapped>
  )
})

export default RecommendRanking;