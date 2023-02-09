import { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import type { SongDetail, Lyric } from "@/types/data";

import { PlayerWrapped, PlayerLeft, PlayerRight } from "./style";
import classNames from "classnames";
import { RootState } from "@/types/store";

/**
 * 播放页面
 * @author junpu
 * @date 2023-02-02 14:18
 */
const Player = memo(() => {
  const dispatch = useDispatch();
  const { song, lyricList, lyricIndex } = useSelector(
    (state: RootState) => ({
      song: state.getIn(["player", "currentSong"]) as SongDetail,
      lyricList: state.getIn(["player", "lyricList"]) as Lyric[],
      lyricIndex: state.getIn(["player", "currentLyricIndex"]) as number,
    }),
    shallowEqual
  );

  const name = song && song.name;
  const picUrl = song && song.al && song.al.picUrl;
  const albumName = song && song.al && song.al.name;
  const artistName = song && song.ar && song.ar[0].name;

  return (
    <PlayerWrapped>
      <div className="content wrap_2">
        <PlayerLeft>
          <div className="song-info">
            <div className="left">
              <div className="cover-info">
                <img className="cover" src={picUrl} alt={albumName} />
                <i className="bg sprite_cover" />
              </div>
            </div>

            <div className="right">
              <div className="title">
                <i className="icon sprite_icon" />
                <span>{name}</span>
              </div>

              <div className="artist">
                歌手：
                <a href="/todu">{artistName}</a>
              </div>

              <div className="album">
                所属专辑：
                <a href="/todu">{albumName}</a>
              </div>

              <div className="lyric-list">
                {lyricList.map((item, i) => {
                  return (
                    <div key={item.time} className={classNames("lyric-item", { active: i === lyricIndex })}>
                      {item.content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </PlayerLeft>
        <PlayerRight></PlayerRight>
      </div>
    </PlayerWrapped>
  );
});

export default Player;
