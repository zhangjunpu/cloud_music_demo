import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import moment from "moment";
import { requestSongDetailAction } from "../store/actionCreates";
import { formatImageUrlSize, formatPlayUrl } from "@/utils/format";

import { Slider } from "antd";
import { PlayerBarWrapped } from "./style";

/**
 * 底部播放栏
 * @author junpu
 * @date 2023-02-03 16:42
 */
const PlayerBar = memo(() => {
  const [curTime, setCurTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTouching, setTouching] = useState(false);
  const [isPlaying, setPlaying] = useState(false);

  const dispatch = useDispatch();
  const { song } = useSelector(
    (state) => ({
      song: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );

  const audioRef = useRef();
  useEffect(() => {
    dispatch(requestSongDetailAction(202369));
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = formatPlayUrl(song && song.id);
  }, [song]);

  const name = song && song.name;
  const artist = song && song.ar && song.ar[0].name;
  const picUrl = song && song.al && song.al.picUrl && formatImageUrlSize(song.al.picUrl, 34);
  const duration = song && song.dt;

  const play = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setPlaying(!isPlaying);
  }, [isPlaying]);

  const onTimeUpdate = (value) => {
    const timemillis = value * 1000;
    if (!isTouching) {
      setCurTime(timemillis);
      setProgress((curTime / duration) * 100);
    }
  };

  const onProgressChange = useCallback(
    (value) => {
      setTouching(true);
      setProgress(value);
      const timemillis = (value / 100) * duration;
      setCurTime(timemillis);
    },
    [duration]
  );

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

  return (
    <PlayerBarWrapped isPlaying={isPlaying}>
      <div className="bg-left sprite_player"></div>
      <div className="bg-lock sprite_player">
        <button className="lock sprite_player"></button>
      </div>
      <div className="bg-right sprite_player"></div>

      <div className="content wrap_2">
        <div className="control">
          <button className="sprite_player prev"></button>
          <button className="sprite_player play" onClick={play}></button>
          <button className="sprite_player next"></button>
        </div>

        <div className="info">
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
              <Slider value={progress} onChange={onProgressChange} onAfterChange={onProgressAfterChange} />
              <div className="time">
                <span className="cur-time">{moment(curTime).format("mm:ss")}</span>
                <span> / </span>
                <span className="duration">{moment(duration).format("mm:ss")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="operate">
          <button className="btn lyric"></button>
          <button className="btn fav sprite_player"></button>
          <button className="btn share sprite_player"></button>
          <i className="divider sprite_player"></i>
          <button className="btn volumn sprite_player"></button>
          <button className="btn mode sprite_player"></button>
          <button className="btn playlist sprite_player">1</button>
        </div>
      </div>
      <audio ref={audioRef} onTimeUpdate={(e) => onTimeUpdate(e.target.currentTime)} />
    </PlayerBarWrapped>
  );
});

export default PlayerBar;
