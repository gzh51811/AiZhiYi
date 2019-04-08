/*
 * @writer: 咕鸽仙人
 * @LastEditors: 咕鸽仙人
 * @Date: 2019-04-07 22:54:07
 * @LastEditTime: 2019-04-08 22:47:47
 * @ 首页头部菜单
 */
import React from "react";
import { Icon } from "antd";
import "./Top.css";
export default () => {
  return (
    <div className="Home_box">
      {/* 头部搜索框 */}
      <div className="top_box">
        <a href="JavaScript:;" className="log_box">
          <img
            src={require("../../images/top_logo.png")}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              display: "block"
            }}
          />
        </a>
        <h1>
          <div className="header-inp">
            <div className="search-cont">
              <Icon type="search" className="icon" />
              <span className="search-input">文化创意，玩转生活</span>
              <span className="comehere">
                <Icon type="message" className="message" />
              </span>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
};
