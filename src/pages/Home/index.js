/*
 * @writer: 咕鸽仙人
 * @LastEditors: 咕鸽仙人
 * @Date: 2019-04-03 11:13:45
 * @LastEditTime: 2019-04-08 22:47:18
 * @ 首页
 */
import React, { Component } from "react";
import { Carousel } from "antd";
// 获取组件
import Top from "./top";
import "./index.css";
class Home extends Component {
  render() {
    return (
      <div className="home">
        <Top />
        {/* main */}

        <main className="scroll_wrap">
          <div
            style={{
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div className="Box">
              {/* 轮播图 */}
              <Carousel autoplay>
                <div>
                  <h3>
                    <img
                      src={require("../../images/s0_05887823099743207.jpg")}
                      alt=""
                    />
                  </h3>
                </div>
                <div>
                  <h3>
                    <img
                      src={require("../../images/s0_06064954048617157.jpg")}
                      alt=""
                    />
                  </h3>
                </div>
                <div>
                  <h3>
                    <img
                      src={require("../../images/s0_06065063469953376.jpg")}
                      alt=""
                    />
                  </h3>
                </div>
                <div>
                  <h3>
                    <img
                      src={require("../../images/s0_06071963883756446.jpg")}
                      alt=""
                    />
                  </h3>
                </div>
                <div>
                  <h3>
                    <img
                      src={require("../../images/s0_06074671247457566.jpg")}
                      alt=""
                    />
                  </h3>
                </div>
              </Carousel>
              {/* 菜单栏 */}
              <nav className="menu-list">
                <ul className="category_index  clearfix">
                  <li>
                    <i className="icon icon-culture" />
                    <p>传统工艺</p>
                  </li>
                  <li>
                    <i className="icon icon-culture" />
                    <p>民俗文化</p>
                  </li>
                  <li>
                    <i className="icon icon-culture" />
                    <p>茶艺茶道</p>
                  </li>
                  <li>
                    <i className="icon icon-culture" />
                    <p>特产美食</p>
                  </li>
                  <li>
                    <i className="icon icon-culture" />
                    <p>文化创意</p>
                  </li>
                  <li>
                    <i className="icon icon-culture" />
                    <p>个性定制</p>
                  </li>
                  <li>
                    <i className="icon icon-culture" />
                    <p>专馆基地</p>
                  </li>
                  <li>
                    <i className="icon icon-culture" />
                    <p>珠宝首饰</p>
                  </li>
                </ul>
              </nav>
              {/*  主要区 */}
              <div className="main-container2" style={{ width: "100%" }}>
                {/* 广告1 */}
                <div className="voucher-img mid-recommend">
                  <img src={require("../../images/z112.png")} alt="" />
                </div>
                {/* 抢购 */}
                <div className="yuan">
                  <div className="yuan-top free">
                    <i className="one" />
                    <span className="one">0元抢购</span>
                    <span className="three">免费包邮</span>
                    <i className="two" />
                    <div className="yuan-bot">
                      <div className="active-con" />
                    </div>
                  </div>
                  <div className="yuan-bot">
                    <div className="active-con">
                      <div className="wrap">
                        <ul className="clearfix">
                          <li>
                            <i>
                              <span>12人</span>
                            </i>
                            <img
                              src="https://www.aizhiyi.com/data/upload/shop/store/goods/89/2018/11/09/89_05951032489879724_240.jpg?v=14"
                              alt=""
                            />
                            <p>面颂吉祥发财面</p>
                            <p
                              style={{
                                textAlign: "left"
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "0.34rem",
                                  color: "#d33d3c",
                                  marginRight: "0.2rem"
                                }}
                              >
                                ￥0
                              </span>
                              <b>原价 ¥ 68.00</b>
                            </p>
                          </li>
                          <li>
                            <i>
                              <span>12人</span>
                            </i>
                            <img
                              src="https://www.aizhiyi.com/data/upload/shop/store/goods/89/2018/11/09/89_05951032489879724_240.jpg?v=14"
                              alt=""
                            />
                            <p>面颂吉祥发财面</p>
                            <p
                              style={{
                                textAlign: "left"
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "0.34rem",
                                  color: "#d33d3c",
                                  marginRight: "0.2rem"
                                }}
                              >
                                ￥0
                              </span>
                              <b>原价 ¥ 68.00</b>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 精品推荐 */}
                <div className="culture-con guess_contain">
                  <header className="title goods_type">
                    <span>精品推荐</span>
                  </header>
                  {/* 商品 */}
                  <ul className="perfect-recom clearfix">
                    <li>
                      <img
                        src="https://www.aizhiyi.com/data/upload/shop/store/goods/118/2019/03/22/118_06065910278569319_240.jpg?v=14"
                        alt=""
                      />
                      <h2>巧克力蓝牙音箱</h2>
                      <div className="bottom clearfix">
                        <span>
                          <dfn>¥</dfn>298.00
                        </span>
                        <font>销量: 647</font>
                      </div>
                    </li>
                    <li>
                      <img
                        src="https://www.aizhiyi.com/data/upload/shop/store/goods/118/2019/03/22/118_06065910278569319_240.jpg?v=14"
                        alt=""
                      />
                      <h2>巧克力蓝牙音箱</h2>
                      <div className="bottom clearfix">
                        <span>
                          <dfn>¥</dfn>298.00
                        </span>
                        <font>销量: 647</font>
                      </div>
                    </li>
                    <li>
                      <img
                        src="https://www.aizhiyi.com/data/upload/shop/store/goods/118/2019/03/22/118_06065910278569319_240.jpg?v=14"
                        alt=""
                      />
                      <h2>巧克力蓝牙音箱</h2>
                      <div className="bottom clearfix">
                        <span>
                          <dfn>¥</dfn>298.00
                        </span>
                        <font>销量: 647</font>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
