import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { requestSettledSingerAction } from '../../store/actionCreators';
import { formatImageUrlSize } from '@/utils/format';

import { SettledSingerWrapped } from './style';
import HeaderRCMSmall from '@/components/header-rcm-small';

/**
 * 推荐 - 入驻歌手
 * @author junpu
 * @date 2023-02-01 20:36
 */
const SettledSinger = memo(() => {
  // redux
  const { settledSinger } = useSelector(state => ({
    settledSinger: state.getIn(["recommend", "settledSinger"]),
  }), shallowEqual);
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    dispatch(requestSettledSingerAction(5));
  }, [dispatch]);

  return (
    <SettledSingerWrapped>
      <HeaderRCMSmall title="入驻歌手" more />

      <div className="list">
        {
          settledSinger.map((item, i) => {
            return (
              <a href="/todu" key={item.id} className="item">
                <img src={formatImageUrlSize(item.picUrl, 62)} alt="" />
                <div className="info">
                  <span className="title text_nowrap">{item.name}</span>
                  <span className="desc text_nowrap">{item.alias.join(" / ") || item.name}</span>
                </div>
              </a>
            )
          })
        }
      </div>
    </SettledSingerWrapped>
  )
})

export default SettledSinger;