import React, { Fragment, memo } from 'react';

import { HeaderWrapped } from './style';

/**
 * 通用 Header 标题，推荐页面
 * @author junpu
 * @date 2023-02-01 17:43
 */
const HeaderRCM = memo((props) => {
  const { title, items = [], more } = props;

  const renderItem = (item, i) => {

  }

  return (
    <HeaderWrapped className='sprite_02'>
      <div className="left">
        <h3 className='title'>{title}</h3>
        <div className="items">
          {
            items.map((item, i, arr) => {
              return (
                <div className='item' key={item}>
                  <a href="tudo">{item}</a>
                  {i === arr.length - 1 ? null : <span>|</span>}
                </div>
              )
            })
          }
        </div>
      </div>
      {
        more ? (
          <div className="more">
            <a href="todu">更多</a>
            <i className='sprite_02 icon'></i>
          </div>
        ) : null
      }

    </HeaderWrapped>
  )
})

export default HeaderRCM