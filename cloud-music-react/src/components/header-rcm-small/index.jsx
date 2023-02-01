import React, { memo } from 'react'
import { HeaderSmallWrapped } from './style';

/**
 * 通用 Header small，推荐
 * @author junpu
 * @date 2023-02-01 20:39
 */
const HeaderRCMSmall = memo((props) => {
  const { title, more } = props;

  return (
    <HeaderSmallWrapped>
      <h3 className='title'>{title}</h3>
      {
        !more ? null : (<a href="/todo" className='more'>查看全部 &gt;</a>)
      }
    </HeaderSmallWrapped>
  )
})

export default HeaderRCMSmall;