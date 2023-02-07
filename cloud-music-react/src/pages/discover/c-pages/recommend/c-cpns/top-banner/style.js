import styled from "styled-components";
import sprite_download from "@/assets/img/sprite/sprite_download.png";
import sprite_banner from "@/assets/img/sprite/sprite_banner.png";

export const TopBannersWrapped = styled.div`
  height: 285px;
  background: url(${(props) => props.bg + "?imageView&blur=40x20"}) center/6000px;

  .banner {
    position: relative;
    display: flex;
    width: 982px;
    height: 100%;
    margin: 0 auto;

    .btn {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto 0;
      width: 37px;
      height: 67px;
      text-indent: -9999px;
      cursor: pointer;
    }

    .left {
      left: -67px;
      background-position: 0 -360px;

      &:hover {
        background-position: 0 -430px;
      }
    }

    .right {
      right: -67px;
      background-position: 0 -508px;

      &:hover {
        background-position: 0 -578px;
      }
    }

    .slick-dots {
      z-index: auto;
      bottom: 5px;

      li {
        width: 20px;
        height: 20px;

        button {
          width: 20px;
          height: 20px;
          background: url(${sprite_banner}) no-repeat 3px -343px;
          opacity: 1;
          transition: none;
        }
      }

      li.slick-active {
        button {
          background-position: -16px -343px;
        }
      }
    }
  }
`;

export const BannerLeft = styled.div`
  width: 730px;

  .item {
    width: 100%;
    height: 100%;
    background-color: #f00;
  }
`;

export const BannerA = styled.a`
  display: block;
  width: 100%;
  height: 285px;
  margin: 0 auto;
  background: url(${(props) => props.src}) center/cover;
`;

export const BannerRight = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: -1px;
  width: 254px;
  background: url(${sprite_download}) no-repeat;

  a {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    text-indent: -9999px;

    &:hover {
      background: url(${sprite_download}) no-repeat 0 -290px;
    }
  }

  span {
    display: block;
    color: #8d8d8d;
    margin: 10px auto;
    text-align: center;
  }
`;
