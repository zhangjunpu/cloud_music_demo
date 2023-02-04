import React, { memo } from "react";

import { footerFuns, footerText } from "@/common/local-data";

import { FooterWrapped, FooterIcon } from "./style";
import { Fragment } from "react";

const AppFooter = memo(() => {
  return (
    <FooterWrapped>
      <div className="funs wrap_2">
        <ul>
          {footerFuns.map((item, i) => {
            return (
              <li key={item.name}>
                <FooterIcon href={item.link} target="_blank" rel="noreferrer" icon={item.icon} icon_sel={item.icon_sel}></FooterIcon>
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="info wrap_2">
        <div className="line1">
          {footerText.map((item, i, arr) => {
            return (
              <Fragment key={item.name}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
                {i !== arr.length - 1 ? <span>|</span> : null}
              </Fragment>
            );
          })}
        </div>
        <div className="line2">
          <a href="https://jubao.163.com/" target="_blank" rel="noreferrer">
            廉正举报
          </a>
          <span>不良信息举报邮箱: 51jubao@service.netease.com</span>
          <span>客服热线：95163298</span>
        </div>
        <div className="line3">
          <span>互联网宗教信息服务许可证：浙（2022）0000120</span>
          <span>增值电信业务经营许可证：浙B2-20150198</span>
          <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noreferrer">
            粤B2-20090191-18 工业和信息化部备案管理系统网站
          </a>
        </div>
        <div className="line4">
          <span>网易公司版权所有©1997-2023</span>
          <span>杭州乐读科技有限公司运营：</span>
          <a
            href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png"
            target="_blank"
            rel="noreferrer"
          >
            浙网文[2021] 1186-054号
          </a>
          <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" target="_blank" rel="noreferrer" className="icon">
            police
          </a>
          <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" target="_blank" rel="noreferrer">
            浙公网安备 33010902002564号
          </a>
        </div>
      </div>
    </FooterWrapped>
  );
});

export default AppFooter;
