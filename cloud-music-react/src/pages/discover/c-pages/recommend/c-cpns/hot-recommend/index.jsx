import React, { memo } from 'react';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { requestHotRecommendAction } from '../../store/actionCreators';
import { formatCount } from '@/utils/format';

import { HotRecommendWrapped } from './style';
import HeaderRCM from '@/components/header-rcm';

const HotRecommend = memo(() => {
  const { hotRecommend } = useSelector(state => ({
    hotRecommend: state.getIn(["recommend", "hotRecommend"]),
  }), shallowEqual)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestHotRecommendAction());
  }, [dispatch])

  return (
    <HotRecommendWrapped>
      <HeaderRCM title="热门推荐" items={["华语", "流行", "摇滚", "民谣", "电子"]} more />
      <ul className='hot-list'>
        {
          hotRecommend.map((item, i) => {
            return (
              <li className='item' key={item.id}>
                <div className="cover">
                  <img src={item.picUrl} alt={item.name} />
                  <a href="todu" className="cover-a sprite_cover"></a>
                  <div className="info sprite_cover">
                    <span className="icon sprite_iconall"></span>
                    <span className="count">{formatCount(item.playCount)}</span>
                    <a href="todu" className="play sprite_iconall"></a>
                  </div>
                </div>
                <p className="text">
                  <a href="todo">{item.name}</a>
                </p>
              </li>
            )
          })
        }
      </ul>
    </HotRecommendWrapped>
  )
})

export default HotRecommend;