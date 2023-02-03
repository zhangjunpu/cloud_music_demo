import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { requestHotAnchorAction } from "../../store/actionCreators";
import { formatImageUrlSize } from "@/utils/format";

import { HotAnchorWrapped } from "./style";
import HeaderRCMSmall from "@/components/header-rcm-small";

/**
 * 推荐 - 热门主播
 * @author junpu
 * @date 2023-02-01 20:37
 */
const HotAnchor = memo(() => {
  const { hotAnchor } = useSelector(
    (state) => ({
      hotAnchor: state.getIn(["recommend", "hotAnchor"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestHotAnchorAction(5));
  }, [dispatch]);

  return (
    <HotAnchorWrapped>
      <HeaderRCMSmall title="热门主播" />

      <div className="list">
        {hotAnchor.map((item, i) => {
          return (
            <div key={item.id} className="item">
              <a href="/todu" className="cover">
                <img src={formatImageUrlSize(item.avatarUrl, 40)} alt="" />
              </a>
              <div className="info">
                <a href="/todu" className="title text_nowrap">
                  {item.nickName}
                </a>
                <span className="desc text_nowrap">{item.nickName}</span>
              </div>
            </div>
          );
        })}
      </div>
    </HotAnchorWrapped>
  );
});

export default HotAnchor;
