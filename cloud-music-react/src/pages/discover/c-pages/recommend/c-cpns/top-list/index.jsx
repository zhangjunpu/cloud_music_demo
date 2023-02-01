import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { reqeustTopListAction } from '../../store/actionCreators';

import { TopListWrapped } from './style';
import HeaderRCM from '@/components/header-rcm';
import RankingList from './c-cpns/ranking-list';

/**
 * 推荐 - 榜单
 * @author junpu
 * @date 2023-02-01 17:42
 */
const TopList = memo(() => {
  // redux
  const { topList } = useSelector(state => ({
    topList: state.getIn(["recommend", "topList"]),
  }), shallowEqual);
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    dispatch(reqeustTopListAction());
  }, [dispatch]);

  return (
    <TopListWrapped>
      <HeaderRCM title="榜单" more />
      <div className="content">
        {
          topList.map((item, i) => {
            return (
              <RankingList key={i} info={item} />
            )
          })
        }
      </div>
    </TopListWrapped>
  )
})

export default TopList;