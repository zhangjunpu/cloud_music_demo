import React, { memo } from 'react'
import { useEffect } from 'react';

import request from '@/services/request';

const Recommend = memo(() => {
  useEffect(() => {
    request({
      url: "/banner",
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    });
  }, [])

  return (
    <div>Recommend</div>
  )
})

export default Recommend;