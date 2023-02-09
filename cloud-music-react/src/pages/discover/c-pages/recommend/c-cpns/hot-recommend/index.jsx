import React, { memo } from "react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { requestHotRecommendsAction } from "../../store";

import { HotRecommendWrapped } from "./style";
import HeaderRCM from "@/components/header-rcm";
import SongsCoverList from "@/components/songs-cover-list";

/**
 * 推荐 - 热门推荐
 * @author junpu
 * @date 2023-02-01 17:49
 */
const HotRecommend = memo(() => {
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestHotRecommendsAction(8));
  }, [dispatch]);

  return (
    <HotRecommendWrapped>
      <HeaderRCM title="热门推荐" items={["华语", "流行", "摇滚", "民谣", "电子"]} more />
      <div className="list">
        <SongsCoverList list={hotRecommends} />
      </div>
    </HotRecommendWrapped>
  );
});

export default HotRecommend;
