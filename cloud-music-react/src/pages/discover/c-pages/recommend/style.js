import styled from "styled-components";

export const RecommendWrapped = styled.div`
  .content {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
  }
`;

export const RecommendLeft = styled.div`
  width: 730px;
  border-left: 1px solid #d3d3d3;
  padding: 20px 20px 40px;
`;

export const RecommendRight = styled.div`
  width: 250px;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;

  .login {
    width: 100%;
    height: 126px;
    background-position: 0 0;

    .text {
      line-height: 22px;
      padding: 16px 22px;
    }

    .btn {
      display: block;
      width: 100px;
      height: 31px;
      color: #fff;
      background-position: 0 -195px;
      margin: 0 auto;
      text-shadow: 0 1px 0 #8a060b;

      &:hover {
        background-position: -110px -195px;
      }
    }
  }
`;
