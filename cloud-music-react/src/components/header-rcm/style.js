import styled from "styled-components";

export const HeaderWrapped = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  color: #666;
  padding: 0 10px 0 34px;
  border-bottom: 2px solid #c10d0c;
  background-position: -226px -156px;

  .left {
    display: flex;
    align-items: center;

    .title {
      color: #333;
      font-size: 20px;
      font-weight: normal;
    }

    .items {
      display: flex;
      margin-left: 20px;

      span {
        color: #ccc;
        margin: 0 10px;
      }
    }
  }

  .more {
    display: flex;
    align-items: center;

    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`;
