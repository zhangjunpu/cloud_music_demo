import React, { memo } from 'react';

import { formatCount, formatImageUrlSize } from '@/utils/format';

import { SongsCoverListWrapped } from './style';

const SongsCoverList = memo((props) => {
  const { list } = props;

  return (
    <SongsCoverListWrapped>
      {
        list.map((item, i) => {
          return (
            <div className='item' key={item.id}>
              <div className="cover">
                <img src={formatImageUrlSize(item.picUrl, 140)} alt={item.name} />
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
            </div>
          )
        })
      }
    </SongsCoverListWrapped>
  )
})

export default SongsCoverList;