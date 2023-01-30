import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';

import { discoverLink } from '@/common/local-data';
import { DiscoverWrapped } from './style'

const Discover = memo((props) => {
  const { route } = props;

  return (
    <DiscoverWrapped>
      <div className="top wrap_1">
        <div className='menu'>
          {
            discoverLink.map((item, i) => {
              return (
                <NavLink key={item.name} className="item" to={item.link}>{item.name}</NavLink>
              )
            })
          }
        </div>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapped>
  )
})

export default Discover;