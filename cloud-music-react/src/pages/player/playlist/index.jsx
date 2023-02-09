import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import moment from "moment";
import { requestPlayMusicAction, deleteSongByIndexAction, clearPlayListAction } from "../store";

import classNames from "classnames";
import { PlayListWrapped, PlayTitle, PlayListPanel, LyricPanel } from "./style";
import { scrollTo } from "@/utils/ui-helper";

/**
 * 播放列表
 * @author junpu
 * @date 2023-02-06 17:50
 */
const PlayList = memo((props) => {
  const dispatch = useDispatch();
  const { currentSong, currentIndex, playList, lyricList, currentLyricIndex } = useSelector((state) => {
    const player = state.get("player");
    return {
      currentSong: player.get("currentSong"),
      currentIndex: player.get("currentIndex"),
      playList: player.get("playList"),
      lyricList: player.get("lyricList"),
      currentLyricIndex: player.get("currentLyricIndex"),
    };
  }, shallowEqual);

  const lyricRef = useRef();
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    scrollTo(lyricRef.current, (currentLyricIndex - 3) * 37, 300);
  }, [currentLyricIndex]);

  /**
   * 删除歌曲
   */
  const deleteSong = (e, i) => {
    e.stopPropagation(); // 阻止事件冒泡
    dispatch(deleteSongByIndexAction(i));
  };

  return (
    <PlayListWrapped>
      <PlayTitle className="sprite_playlist">
        <div className="left">
          <h4 className="title">
            播放列表(<span>{playList.length}</span>)
          </h4>
          <button className="delete" onClick={() => dispatch(clearPlayListAction())}>
            <i className="icon sprite_player_icon" />
            <span className="text">清空</span>
          </button>
        </div>

        <div className="right">
          <span className="lyric-title">{currentSong.name}</span>
          <button className="close sprite_player_icon" onClick={() => props.closeClick()} />
        </div>
      </PlayTitle>

      <div className="content sprite_playlist">
        <PlayListPanel>
          {playList.map((item, i) => {
            return (
              <div
                key={item.id}
                className={classNames("item", { active: currentIndex === i })}
                onClick={() => dispatch(requestPlayMusicAction(item.id))}
              >
                <i className="icon sprite_player_icon" />
                <span className="title text_nowrap">{item.name}</span>
                <div className="funs">
                  <button className="sprite_player_icon delete" onClick={(e) => deleteSong(e, i)} />
                </div>
                <a href="/todu" className="artist text_nowrap">
                  {item.ar && item.ar[0].name}
                </a>
                <span className="duration">{item.dt && moment(item.dt).format("mm:ss")}</span>
                <button className="link sprite_player_icon" />
              </div>
            );
          })}
        </PlayListPanel>

        <LyricPanel ref={lyricRef}>
          {lyricList.map((item, i) => {
            return (
              <div key={item.time} className="item">
                <span className={classNames({ active: currentLyricIndex === i })}>{item.content}</span>
              </div>
            );
          })}
        </LyricPanel>
      </div>
    </PlayListWrapped>
  );
});

export default PlayList;
