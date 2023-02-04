import styled from "styled-components";
import sprite_01 from "@/assets/img/sprite/sprite_01.png";

export const HeaderWrapped = styled.div`
  height: 75px;
  background-color: #242424;

  .content {
    height: 70px;

    display: flex;
    justify-content: space-between;
  }

  .divide {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 100%;
    text-indent: -9999px;
    background-position: 0 0;
  }

  .list {
    display: flex;
    line-height: 70px;
    font-size: 14px;

    .item {
      position: relative;

      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      &:hover a,
      .active {
        text-decoration: none;
        background-color: #000;
        color: #fff;
      }

      .active .icon {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        width: 12px;
        height: 6px;
        background-position: -105px -70px;
        background-size: 120px auto;
      }

      :last-of-type a {
        ::after {
          content: "";
          position: absolute;
          top: 21px;
          left: 100px;
          width: 28px;
          height: 19px;
          background: url(${sprite_01});
          background-position: -191px 0;
        }
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  .search {
    width: 158px;
    height: 32px;
    font-size: 12px;
    border-radius: 16px;
    color: #9b9b9b;

    input {
      &::placeholder {
        color: #9b9b9b;
      }
    }
  }

  .author {
    width: 90px;
    height: 32px;
    line-height: 32px;
    box-sizing: border-box;
    border: 1px solid #4f4f4f;
    border-radius: 20px;
    text-align: center;
    color: #ccc;
    margin-left: 20px;

    :hover {
      color: #fff;
      border: 1px solid #ccc;
      text-decoration: none;
    }
  }

  .login {
    height: 45px;
    line-height: 45px;
    padding: 0 20px;

    a {
      color: #787878;
    }

    :hover a {
      color: #ccc;
    }
  }
`;
