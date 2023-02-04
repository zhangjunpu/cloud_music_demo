import React, { memo } from "react";
import { useDispatch } from "react-redux";

import { requestPlayMusicAction } from "@/pages/player/store";
import { formatImageUrlSize } from "@/utils/format";

import { RankingListWrapped } from "./style";

/**
 * 推荐 - 榜单 - 榜单列表
 * @author junpu
 * @date 2023-02-01 17:44
 */
const RankingList = memo((props) => {
  const { info } = props;

  const dispatch = useDispatch();

  const playMusic = (id) => {
    dispatch(requestPlayMusicAction(id));
  };

  return (
    <RankingListWrapped>
      <div className="header">
        <div className="cover">
          <img src={formatImageUrlSize(info.coverImgUrl)} alt={info.name} />
          <a href="/todo" className="sprite_cover">
            {info.name}
          </a>
        </div>
        <div className="info">
          <a href="/todo" className="title">
            {info.name}
          </a>
          <div className="funs">
            <button className="btn play sprite_02" />
            <button className="btn fav sprite_02" />
          </div>
        </div>
      </div>
      <div className="list">
        {info.tracks.slice(0, 10).map((item, i) => {
          return (
            <div key={item.id} className="item">
              <span className="no">{i + 1}</span>
              <div className="info">
                <a href="/todu" className="name text_nowrap">
                  {item.name}
                </a>
                <div className="operate">
                  <button className="btn play sprite_02" onClick={() => playMusic(item.id)} />
                  <button className="btn add sprite_icon" />
                  <button className="btn fav sprite_02" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </RankingListWrapped>
  );
});

export default RankingList;
