const { default: styled } = require("styled-components");

export const NewAlbumWrapped = styled.div`
  .out {
    height: 186px;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;

    .inner {
      position: relative;
      height: 184px;
      background-color: #f5f5f5;
      border: 1px solid #fff;

      .banner {
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 645px;
        height: 100%;

        .list {
          margin-top: 28px;
          width: 645px;
          height: 150px;
          display: flex !important;
          justify-content: space-between;
          align-items: center;
        }
      }

      .btn {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        width: 17px;
        height: 17px;
        cursor: pointer;
      }

      .left {
        left: 2px;
        background-position: -260px -75px;
        &:hover {
          background-position: -280px -75px;
        }
      }

      .right {
        right: 2px;
        background-position: -300px -75px;
        &:hover {
          background-position: -320px -75px;
        }
      }
    }
  }
`;
