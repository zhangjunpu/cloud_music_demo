import styled from "styled-components";

export const PlayListWrapped = styled.div`
  position: absolute;
  bottom: 46px;
  left: 50%;
  transform: translateX(-50%);
  width: 986px;
  height: 301px;

  .content {
    position: absolute;
    width: 100%;
    left: 0;
    top: 41px;
    height: 260px;
    background-position: -1014px 0;
    background-repeat: repeat-y;
    padding: 0 5px;
  }
`;

export const PlayTitle = styled.div`
  display: flex;
  width: 100%;
  height: 41px;
  padding: 0 5px;
  background-position: 0 0;

  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 556px;
    height: 100%;

    .title {
      font-size: 14px;
      color: #e2e2e2;
      line-height: 39px;
      margin-left: 20px;
    }

    .delete {
      display: flex;
      align-items: center;
      height: 25px;
      margin-right: 10px;
      background: none;
      cursor: pointer;

      .icon {
        width: 13px;
        height: 16px;
        background-position: -51px 0;
      }

      &:hover .icon {
        background-position: -51px -20px;
      }

      .text {
        color: #ccc;
        margin-left: 5px;
      }

      &:hover .text {
        color: #fff;
        text-decoration: underline;
      }
    }
  }

  .right {
    position: relative;
    width: 420px;
    height: 100%;

    .lyric-title {
      position: absolute;
      left: 0;
      right: 0;
      width: 346px;
      height: 39px;
      line-height: 39px;
      margin: 0 auto;
      text-align: center;
      font-size: 14px;
      color: #fff;
    }

    .close {
      position: absolute;
      right: 8px;
      top: 0;
      bottom: 0;
      margin: auto 0;
      width: 30px;
      height: 30px;
      text-indent: -9999px;
      cursor: pointer;
      background-position: -195px 9px;

      &:hover {
        background-position: -195px -21px;
      }
    }
  }
`;

export const PlayListPanel = styled.div`
  width: 556px;
  height: 260px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 3px;
    opacity: 0.6;
  }

  &::-webkit-scrollbar-track {
    background-color: #000;
  }

  .item {
    height: 28px;
    line-height: 28px;
    display: flex;
    align-items: center;

    .icon {
      width: 10px;
      height: 13px;
      margin-left: 10px;
    }

    .title {
      flex: 1;
      color: #ccc;
      margin-left: 10px;
    }

    .funs {
      display: none;
      height: 16px;
      margin-bottom: 5px;

      .delete {
        width: 13px;
        height: 16px;
        margin-left: 10px;
        background-position: -51px 0;
        :hover {
          background-position: -51px -20px;
        }
      }
    }

    &:hover .funs {
      display: block;
    }

    .artist {
      width: 80px;
      margin-left: 10px;
      color: #9b9b9b;
    }

    .duration {
      width: 45px;
      margin-left: 10px;
      color: #666;
    }

    .link {
      width: 14px;
      height: 16px;
      margin: 0 10px 0 20px;
      background-position: -80px 0;
      cursor: pointer;

      &:hover {
        background-position: -80px -20px;
      }
    }

    &:hover,
    &.active {
      background-color: #000;
      cursor: pointer;
      .title {
        color: #fff;
      }
      .artist {
        color: #fff;
      }
      .duration {
        color: #fff;
      }
    }

    &.active .icon {
      background-position: -182px 0;
    }
  }
`;

export const LyricPanel = styled.div`
  width: 420px;
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 3px;
    opacity: 0.6;
  }

  &::-webkit-scrollbar-track {
    background-color: #000;
  }

  .item {
    height: 37px;
    line-height: 37px;
    color: #989898;
    display: flex;
    flex-direction: column;
    align-items: center;

    .active {
      font-size: 14px;
      color: #fff;
    }
  }
`;
