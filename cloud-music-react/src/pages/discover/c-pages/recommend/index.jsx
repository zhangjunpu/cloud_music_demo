import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { requestTopBannersAction } from './store/actionCreators';

const Recommend = memo(() => {
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(["recommend", "topBanners"]),
  }), shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTopBannersAction());
  }, [dispatch]);

  return (
    <div>Recommend banner.length = {topBanners.length}</div>
  )
})

export default Recommend;