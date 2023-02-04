import styled from "styled-components";

export const SongsCoverListWrapped = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .item {
    width: 140px;
    height: 204px;
    margin-bottom: 20px;

    .cover {
      position: relative;
      width: 100%;
      height: 140px;

      img {
        width: 100%;
      }

      .cover-a {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        background-position: 0 0;
      }

      .info {
        position: absolute;
        top: 113px;
        width: 100%;
        height: 27px;
        background-position: 0 -537px;

        .icon {
          display: inline-block;
          width: 14px;
          height: 11px;
          margin: 9px 10px;
          background-position: 0 -24px;
        }

        .count {
          display: inline-block;
          color: #ccc;
          vertical-align: top;
          margin-top: 8px;
        }

        .play {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto 10px;
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;

          &:hover {
            background-position: 0 -60px;
          }
        }
      }
    }

    .text {
      margin: 8px 0 3px;

      a {
        font-size: 14px;
        color: #000;
        height: auto;
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
`;
