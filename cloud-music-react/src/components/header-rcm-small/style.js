import styled from "styled-components";

export const HeaderSmallWrapped = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid #ccc;
  padding-bottom: 6px;

  .title {
    display: inline-block;
    color: #333;
    font-size: 12px;
  }

  .more {
    /* position: absolute; */
    /* right: 0; */
    display: inline-block;
    color: #666;
  }
`;
