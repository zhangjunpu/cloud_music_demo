import styled from 'styled-components';

export const RankingListWrapped = styled.div`
  width: 229px;
  

  .header {
    height: 120px;
    padding: 20px 0 0 20px;
    display: flex;

    .cover {
      position: relative;
      width: 80px;
      height: 80px;

      img {
        width: 100%;
        height: 100%;
      }

      a {
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        background-position: -145px -57px;
        text-indent: -9999px;
      }
    }

    .info {
      padding: 6px 0 0 10px;

      .title {
        font-size: 14px;
        font-weight: 700;
        color: #333;
      }

      .funs {
        margin-top: 10px;

        .btn {
          display: inline-block;
          width: 22px;
          height: 22px;
          text-indent: -9999px;
        }

        .play {
          background-position: -267px -205px;

          :hover {
            background-position: -267px -235px;
          }
        }

        .fav {
          margin-left: 10px;
          background-position: -300px -205px;

          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }

  .list {
    .item {
      display: flex;
      height: 32px;
      line-height: 32px;

      .no {
        width: 35px;
        font-size: 16px;
        color: #666;
        margin-left: 12px;
        text-align: center;
      }

      &:nth-child(-n+3) .no {
        color: #c01c0c;
      }

      .info {
        display: flex;
        width: 170px;
        justify-content: space-between;
        align-items: center;

        .name {
          flex: 1;
          color: #000;
        }

        .operate {
          width: 67px;
          height: 19px;
          padding-top: 2px;
          display: none;

          .btn {
            display: inline-block;
            width: 17px;
            height: 17px;
            text-indent: -9999px;
          }

          .play {
            background-position: -267px -268px;
            &:hover {
              background-position: -267px -288px;
            }
          }

          .add {
            margin-left: 8px;
            background-position: 2px -698px;
            &:hover {
              background-position: -20px -698px;
            }

          }

          .fav {
            margin-left: 8px;
            background-position: -297px -268px;
            &:hover {
              background-position: -297px -288px;
            }
          }
        }

        &:hover .operate {
          display: block;
        }
      }
    }
  }

  .footer {
    position: relative;
    height: 32px;
    line-height: 32px;

    a {
      position: absolute;
      right: 20px;
      color: #000;
    }
  }
`