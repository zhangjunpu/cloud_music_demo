import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { requestTopBannersAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import { TopBannersWrapped, BannerLeft, BannerRight, BannerA } from "./style";

/**
 * 推荐 - 轮播图
 * @author junpu
 * @date 2023-02-01 17:50
 */
const TopBanners = memo(() => {
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const bannerRef = useRef();
  useEffect(() => {
    dispatch(requestTopBannersAction());
  }, [dispatch]);

  // const [getIndex, setIndex] = userState
  const [curIndex, setCurIndex] = useState(0);
  const changeBanners = useCallback((from, to) => {
    setCurIndex(to);
  });

  return (
    <TopBannersWrapped bg={topBanners[curIndex] && topBanners[curIndex].imageUrl}>
      <div className="banner">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={(from, to) => changeBanners(from, to)}>
            {topBanners.map((item, i) => {
              return (
                <div className="item" key={item.scm}>
                  <BannerA href="todo" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>

        <BannerRight>
          <a href="https://music.163.com/#/download" target="_blank" rel="noreferrer">
            下载客户端
          </a>
          <span>PC 安卓 iPhone WP iPad Mac 六大客户端</span>
        </BannerRight>

        <button className="btn left sprite_banner" onClick={(e) => bannerRef.current.prev()}>
          left
        </button>
        <button className="btn right sprite_banner" onClick={(e) => bannerRef.current.next()}>
          right
        </button>
      </div>
    </TopBannersWrapped>
  );
});

export default TopBanners;
