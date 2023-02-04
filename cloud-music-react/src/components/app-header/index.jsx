import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { headerLink } from "@/common/local-data.js";

import { HeaderWrapped, HeaderLeft, HeaderRight } from "./style";

const AppHeader = memo(() => {
  const renderListItem = (item, i) => {
    if (i >= 3) {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.name}
        </a>
      );
    } else {
      return (
        <NavLink to={item.link}>
          {item.name}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    }
  };

  return (
    <HeaderWrapped>
      <div className="content wrap_1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="list">
            {headerLink.map((item, i) => {
              return (
                <div key={item.name} className="item">
                  {renderListItem(item, i)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>

        <HeaderRight>
          <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} className="search" />
          <a href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter" target="_blank" rel="noreferrer" className="author">
            创作者中心
          </a>
          <div className="login">
            <a href="#">登录</a>
          </div>
        </HeaderRight>
      </div>
      <div className="divide"></div>
    </HeaderWrapped>
  );
});

export default AppHeader;
