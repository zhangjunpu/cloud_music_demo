import styled from "styled-components";

export const DiscoverWrapped = styled.div`
  .top {
    width: 100%;
    height: 35px;
    line-height: 35px;
    margin-top: -5px;
    background-color: #c20c0c;

    .menu {
      padding-left: 180px;

      .item {
        height: 20px;
        line-height: 20px;
        padding: 3px 13px;
        margin: 0 17px;
        color: #fff;

        &.active,
        &:hover {
          background-color: #9b0909;
          border-radius: 10px;
          text-decoration: none;
        }
      }
    }
  }
`;
