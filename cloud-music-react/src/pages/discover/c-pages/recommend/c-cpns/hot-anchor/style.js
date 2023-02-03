import styled from "styled-components";

export const HotAnchorWrapped = styled.div`
  padding: 0 20px;

  .list {
    margin-top: 20px;

    .item {
      display: flex;
      width: 210px;
      height: 40px;
      margin-bottom: 10px;

      .cover {
        img {
          width: 40px;
          height: 40px;
        }
      }

      .info {
        width: 160px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0 5px 0 14px;

        .title {
          color: #000;
          margin-bottom: 3px;
        }

        .desc {
          color: #666;
        }
      }
    }
  }
`;
