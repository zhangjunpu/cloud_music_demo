import styled from 'styled-components';

export const SettledSingerWrapped = styled.div`
  padding: 20px;

  .list {
    margin-top: 20px;

    .item {
      display: flex;
      width: 210px;
      height: 62px;
      margin-bottom: 14px;
      background-color: #fafafa;

      img {
        width: 62px;
        height: 62px;
      }

      .info {
        width: 148px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding:0 5px 0 14px;
        border: 1px solid #e9e9e9;

        .title {
          color: #333;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 7px;
        }

        .desc {
          color: #666;
        }
      }

      &:hover {
        text-decoration: none;
      }
    }
  }
`