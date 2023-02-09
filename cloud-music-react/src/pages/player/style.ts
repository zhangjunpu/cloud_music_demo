import styled from "styled-components";

export const PlayerWrapped = styled.div`
  .content {
    display: flex;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    background-color: #fff;
  }
`;

export const PlayerLeft = styled.div`
  width: 710px;
  padding: 33px 30px 40px 34px;

  .song-info {
    display: flex;

    .left {
      width: 206px;

      .cover-info {
        position: relative;
        width: 206px;
        height: 205px;

        .cover {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          width: 132px;
          height: 132px;
        }

        .bg {
          position: absolute;
          display: block;
          width: 100%;
          height: 205px;
          background-position: -140px -580px;
        }
      }
    }

    .right {
      flex: 1;
      padding: 2px 0 30px 24px;

      .title {
        display: flex;
        align-items: center;
        color: #333;
        font-size: 24px;

        .icon {
          display: inline-block;
          width: 54px;
          height: 24px;
          background-position: -1px -463px;
        }

        span {
          margin-left: 5px;
        }
      }

      .artist,
      .album {
        color: #999;
        margin-top: 15px;

        a {
          color: #0c73c2;
        }
      }

      .lyric-list {
        margin-top: 40px;

        .lyric-item {
          height: 23px;
          line-height: 23px;
        }

        .active {
          font-size: 13px;
          color: ${(props) => props.theme.colors.accent_red};
        }
      }
    }
  }
`;

export const PlayerRight = styled.div`
  width: 270px;
  border-left: 1px solid #d3d3d3;
`;
