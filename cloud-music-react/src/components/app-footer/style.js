import styled from "styled-components";
import sprite_footer from "@/assets/img/sprite/sprite_footer.png";
import ic_footer_police from "@/assets/img/ic_footer_police.png";

export const FooterWrapped = styled.div`
  background-color: #f2f2f2;
  border-top: 1px solid #d3d3d3;
  padding-bottom: 52px;

  .funs {
    padding: 0 60px;
    margin-top: 33px;

    ul {
      display: flex;
      justify-content: space-between;

      li {
        width: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
          color: rgba(0, 0, 0, 0.5);
          margin-top: 10px;
        }
      }
    }
  }

  .info {
    margin-top: 60px;
    color: #666;
    line-height: 24px;

    .line1 {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 24px;

      span {
        margin: 0 8px;
        color: #d9d9d9;
      }
    }

    .line2 {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 24px;

      span {
        margin-left: 8px;
      }
    }

    .line3 {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 24px;

      span {
        margin-right: 8px;
      }
    }

    .line4 {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 24px;
      margin-bottom: 4px;

      span {
        margin-right: 8px;
      }

      .icon {
        display: block;
        width: 14px;
        height: 14px;
        background: url(${ic_footer_police});
        background-size: cover;
        margin: 0 2px 0 8px;
        text-indent: -9999px;
      }
    }
  }
`;

export const FooterIcon = styled.a`
  display: inline-block;
  width: 45px;
  height: 45px;
  background: url(${sprite_footer}) no-repeat;
  background-size: 220px 220px;
  background-position: ${(props) => props.icon};

  &:hover {
    background-position: ${(props) => props.icon_sel};
  }
`;
