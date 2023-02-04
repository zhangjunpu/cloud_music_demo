import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import moment from "moment";
import { prevOrNextAction, requestPlayMusicAction, switchPlaySequenceAction } from "../store";
import { formatImageUrlSize, formatPlayUrl } from "@/utils/format";

import { Slider } from "antd";
import { PlayerBarWrapped, PlayControl, PlayInfo, PlayOperate } from "./style";
import { PlaySequence } from "@/common/constant";

/**
 * 底部播放栏
 * @author junpu
 * @date 2023-02-03 16:42
 */
const PlayerBar = memo(() => {
  // state
  const [curTime, setCurTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTouching, setTouching] = useState(false);
  const [isPlaying, setPlaying] = useState(false);

  // redux
  const dispatch = useDispatch();
  const { song, playSequence, playList } = useSelector(
    (state) => ({
      song: state.getIn(["player", "currentSong"]),
      playSequence: state.getIn(["player", "playSequence"]),
      playList: state.getIn(["player", "playList"]),
    }),
    shallowEqual
  );

  // other
  const audioRef = useRef();
  useEffect(() => {
    dispatch(requestPlayMusicAction(202369));
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = formatPlayUrl(song && song.id);
    audioRef.current
      .play()
      .then(() => {
        setPlaying(true);
      })
      .catch(() => {
        setPlaying(false);
      });
  }, [song]);

  const name = song && song.name;
  const artist = song && song.ar && song.ar[0].name;
  const picUrl = song && song.al && song.al.picUrl && formatImageUrlSize(song.al.picUrl, 34);
  const duration = song && song.dt;

  /**
   * 播放 / 暂停
   */
  const play = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setPlaying(!isPlaying);
  }, [isPlaying]);

  /**
   * 上一首 or 下一首
   */
  const prevOrNext = (tag) => {
    dispatch(prevOrNextAction(tag));
  };

  /**
   * 播放完毕
   */
  const playEnd = () => {
    if (playSequence === PlaySequence.SINGLE) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      return;
    }
    dispatch(prevOrNextAction(1));
  };

  /**
   * audio 播放进度监听
   */
  const onTimeUpdate = (value) => {
    const timemillis = value * 1000;
    if (!isTouching) {
      setCurTime(timemillis);
      setProgress((curTime / duration) * 100);
    }
  };

  /**
   * 进度条拖动监听
   */
  const onProgressChange = useCallback(
    (value) => {
      setTouching(true);
      setProgress(value);
      const timemillis = (value / 100) * duration;
      setCurTime(timemillis);
    },
    [duration]
  );

  /**
   * 进度条拖动完毕监听
   */
  const onProgressAfterChange = useCallback(
    (value) => {
      setProgress(value);
      const timemillis = (value / 100) * duration;
      setCurTime(timemillis);
      audioRef.current.currentTime = timemillis / 1000;
      setTouching(false);

      if (!isPlaying) {
        play();
      }
    },
    [duration, isPlaying, play]
  );

  /**
   * 切换播放模式
   */
  const switchPlaySequence = () => {
    dispatch(switchPlaySequenceAction(playSequence));
  };

  return (
    <PlayerBarWrapped>
      <div className="bg-left sprite_player" />
      <div className="bg-lock sprite_player">
        <button className="lock sprite_player" />
      </div>
      <div className="bg-right sprite_player" />

      <div className="content wrap_2">
        <PlayControl isPlaying={isPlaying}>
          <button className="sprite_player prev" onClick={() => prevOrNext(-1)} />
          <button className="sprite_player play" onClick={() => play()} />
          <button className="sprite_player next" onClick={() => prevOrNext(1)} />
        </PlayControl>

        <PlayInfo>
          <div className="cover">
            <img src={picUrl} alt="" />
            <a href="#/" className="sprite_player">
              {name}
            </a>
          </div>
          <div className="info-right">
            <div className="right-top">
              <a href="/todo" className="name text_nowrap">
                {name}
              </a>
              <a href="/todu" className="artist text_nowrap">
                {artist}
              </a>
            </div>
            <div className="right-bottom">
              <Slider value={progress} onChange={(e) => onProgressChange(e)} onAfterChange={(e) => onProgressAfterChange(e)} />
              <div className="time">
                <span className="cur-time">{moment(curTime).format("mm:ss")}</span>
                <span> / </span>
                <span className="duration">{moment(duration).format("mm:ss")}</span>
              </div>
            </div>
          </div>
        </PlayInfo>

        <PlayOperate sequence={playSequence}>
          <button className="btn lyric" />
          <button className="btn fav sprite_player" />
          <button className="btn share sprite_player" />
          <i className="divider sprite_player" />
          <button className="btn volumn sprite_player" />
          <button className="btn sequence sprite_player" onClick={() => switchPlaySequence()} />
          <button className="btn playlist sprite_player">{playList.length}</button>
        </PlayOperate>
      </div>
      <audio ref={audioRef} onTimeUpdate={(e) => onTimeUpdate(e.target.currentTime)} onEnded={() => playEnd()} />
    </PlayerBarWrapped>
  );
});

export default PlayerBar;
