import styled from "styled-components";

export const AlbumCoverWrapped = styled.div`
  display: inline-block;
  width: ${(props) => props.info.width};
  height: ${(props) => props.info.height};
  background-position: -260px 100px;

  .cover {
    position: relative;
    width: ${(props) => props.info.size};
    height: ${(props) => props.info.size};

    img {
      width: 100%;
      height: 100%;
    }

    .img {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: ${(props) => props.info.width};
      height: ${(props) => props.info.size};
      background-position: 0 ${(props) => props.info.bgp};
    }

    .play {
      position: absolute;
      bottom: 5px;
      right: 5px;
      display: block;
      width: ${(props) => props.info.play_size};
      height: ${(props) => props.info.play_size};
      background-position: 0 ${(props) => props.info.play};
      visibility: hidden;

      &:hover {
        background-position: 0 ${(props) => props.info.play_sel};
      }
    }

    &:hover .play {
      visibility: visible;
    }
  }

  .info {
    width: 90%;
    line-height: 18px;
    font-size: 12px;
    margin-top: 7px;

    .title {
      display: block;
      color: #000;
      font-size: ${(props) => props.info.title_font_size};
    }

    .artist {
      display: block;
      color: #666;
    }
  }
`;
