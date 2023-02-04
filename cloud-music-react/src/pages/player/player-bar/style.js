import styled from "styled-components";
import sprite_player_progress from "@/assets/img/sprite/sprite_player_progress.png";
import sprite_iconall from "@/assets/img/sprite/sprite_iconall.png";
import sprite_player_lyric from "@/assets/img/sprite/sprite_player_lyric.png";

export const PlayerBarWrapped = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;

  .bg-left {
    position: absolute;
    left: 0;
    right: 67px;
    height: 52px;
    background-position: 0 0;
    background-repeat: repeat;
  }

  .bg-lock {
    position: absolute;
    top: -14px;
    right: 15px;
    width: 52px;
    height: 67px;
    background-position: 0 -380px;

    .lock {
      display: block;
      width: 18px;
      height: 18px;
      margin: 6px auto 0;
      background-position: -100px -380px;
      cursor: pointer;

      &:hover {
        background-position: -100px -400px;
      }
    }
  }

  .bg-right {
    position: absolute;
    right: 0;
    top: -1px;
    width: 15px;
    height: 53px;
    background-position: -52px -393px;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 47px;
    display: flex;
    justify-content: space-between;
  }
`;

export const PlayControl = styled.div`
  display: flex;
  align-items: center;

  .prev {
    width: 28px;
    height: 28px;
    margin-top: 2px;
    background-position: 0 -130px;
    cursor: pointer;

    &:hover {
      background-position: -30px -130px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${(props) => (props.isPlaying ? "-165px" : "-204px")};
    cursor: pointer;

    &:hover {
      background-position: -40px ${(props) => (props.isPlaying ? "-165px" : "-204px")};
    }
  }

  .next {
    width: 28px;
    height: 28px;
    margin-top: 2px;
    background-position: -80px -130px;
    cursor: pointer;

    &:hover {
      background-position: -110px -130px;
    }
  }
`;

export const PlayInfo = styled.div`
  display: flex;
  align-items: center;

  .cover {
    position: relative;
    display: inline-block;
    width: 34px;
    height: 34px;

    img {
      width: 100%;
      height: 100%;
    }

    a {
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
      width: 100%;
      height: 100%;
      background-position: 0 -80px;
      text-indent: -9999px;
    }
  }

  .info-right {
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    .right-top {
      height: 16px;
      line-height: 16px;

      .name {
        display: inline-block;
        max-width: 300px;
        color: #e8e8e8;
      }

      .artist {
        display: inline-block;
        max-width: 220px;
        color: #9b9b9b;
        margin-left: 15px;
      }
    }

    .right-bottom {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 466px;
        margin: 0 12px 0 0;

        .ant-slider-rail {
          height: 9px;
          background: url(${sprite_player_progress}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${sprite_player_progress}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 22px;
          margin-top: -5px;
          background: url(${sprite_iconall}) -1px -250px;
          border: none;

          &:hover {
            background-position: 0 -280px;
          }

          ::before,
          ::after {
            content: none;
          }
        }
      }

      .time {
        color: #797979;

        .cur-time {
          color: #a1a1a1;
        }
      }
    }
  }
`;

export const PlayOperate = styled.div`
  display: flex;
  align-items: center;

  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
    margin-right: 2px;
  }

  .lyric {
    background: url(${sprite_player_lyric}) no-repeat 0 0;
    &:hover {
      background-position: 0 -25px;
    }
  }

  .fav {
    background-position: -88px -163px;
    &:hover {
      background-position: -88px -189px;
    }
  }

  .share {
    background-position: -114px -163px;
    &:hover {
      background-position: -114px -189px;
    }
  }

  .divider {
    width: 10px;
    height: 25px;
    background-position: -147px -249px;
    margin: 0 4px 0 4px;
  }

  .volumn {
    background-position: -2px -248px;
    &:hover {
      background-position: -31px -248px;
    }
  }

  .sequence {
    background-position: ${(props) => {
      switch (props.sequence) {
        case 1:
          return "-66px -248px";
        case 2:
          return "-66px -344px";
        default:
          return "-3px -344px";
      }
    }};
    &:hover {
      background-position: ${(props) => {
        switch (props.sequence) {
          case 1:
            return "-93px -248px";
          case 2:
            return "-93px -344px";
          default:
            return "-33px -344px";
        }
      }};
    }
  }

  .playlist {
    width: 59px;
    color: #666;
    padding-left: 21px;
    line-height: 26px;
    background-position: -42px -68px;
    &:hover {
      background-position: -42px -98px;
    }
  }
`;
