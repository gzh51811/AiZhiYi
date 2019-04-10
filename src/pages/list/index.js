import React, { Component } from "react";
import Top from "../Home/top";
import { Icon } from "antd";
import "./index.css";
class List extends Component {
  constructor(params) {
    super();
    this.state = {
      hist: "1"
    };
    console.log(this);
  }
  // 跳转详情页
  detail = ev => {
    // ev.preventDefault();
    this.props.history.push({
      pathname: "/goods",
      search: "_id=123",
      state: { _id: "123" }
    });
    if (ev.target.tagName === "IMG" || ev.target.tagName === "H4") {
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.hist == this.state.hist) {
      return false;
    }
  }
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Top />
        <div className="goods-search-list-nav clear_float">
          <div className="TopNav">
            <ul className="nav_ul clear_float">
              <li className="hover">综合</li>
              <li>销量</li>
              <li>价格</li>
            </ul>
            <Icon
              type="shopping-cart"
              style={{
                fontSize: "26px"
              }}
              className="shop-cart"
            />
          </div>
          <div className="nctouch-main-layout  mb20">
            <div style={{ overflowX: "hidden", height: "100%" }}>
              <ul
                className="goods-secrch-list clear_float"
                onClick={this.detail}
              >
                <li className="goods-item">
                  <span className="goods-pic">
                    <img
                      src="https://www.aizhiyi.com/data/upload/shop/store/goods/94/2018/12/28/94_05993287052278317_360.jpg?v=14"
                      alt=""
                    />
                  </span>
                  <div className="goods-info">
                    <div className="goods-name">
                      <h4> 龙泉青瓷听香茶杯</h4>
                    </div>
                    <div className="goods-sale">
                      <span className="goods-price">
                        <i>￥</i>
                        <em>99.00</em>
                      </span>
                    </div>
                    <p className="por-fk">
                      <span>235</span>人已付款
                    </p>
                    <Icon
                      type="shopping-cart"
                      style={{
                        color: "#d62327",
                        fontSize: "20px",
                        position: "absolute",
                        right: "20px",
                        bottom: "12px"
                      }}
                    />
                  </div>
                </li>
                <li className="goods-item">
                  <span className="goods-pic">
                    <img
                      src="https://www.aizhiyi.com/data/upload/shop/store/goods/94/2018/12/28/94_05993287052278317_360.jpg?v=14"
                      alt=""
                    />
                  </span>
                  <div className="goods-info">
                    <div className="goods-name">
                      <h4> 龙泉青瓷听香茶杯</h4>
                    </div>
                    <div className="goods-sale">
                      <span className="goods-price">
                        <i>￥</i>
                        <em>99.00</em>
                      </span>
                    </div>
                    <p className="por-fk">
                      <span>235</span>人已付款
                    </p>
                    <Icon
                      type="shopping-cart"
                      style={{
                        color: "#d62327",
                        fontSize: "20px",
                        position: "absolute",
                        right: "20px",
                        bottom: "12px"
                      }}
                    />
                  </div>
                </li>
                <li className="goods-item">
                  <span className="goods-pic">
                    <img
                      src="https://www.aizhiyi.com/data/upload/shop/store/goods/94/2018/12/28/94_05993287052278317_360.jpg?v=14"
                      alt=""
                    />
                  </span>
                  <div className="goods-info">
                    <div className="goods-name">
                      <h4> 龙泉青瓷听香茶杯</h4>
                    </div>
                    <div className="goods-sale">
                      <span className="goods-price">
                        <i>￥</i>
                        <em>99.00</em>
                      </span>
                    </div>
                    <p className="por-fk">
                      <span>235</span>人已付款
                    </p>
                    <Icon
                      type="shopping-cart"
                      style={{
                        color: "#d62327",
                        fontSize: "20px",
                        position: "absolute",
                        right: "20px",
                        bottom: "12px"
                      }}
                    />
                  </div>
                </li>
                <li className="goods-item">
                  <span className="goods-pic">
                    <img
                      src="https://www.aizhiyi.com/data/upload/shop/store/goods/94/2018/12/28/94_05993287052278317_360.jpg?v=14"
                      alt=""
                    />
                  </span>
                  <div className="goods-info">
                    <div className="goods-name">
                      <h4> 龙泉青瓷听香茶杯</h4>
                    </div>
                    <div className="goods-sale">
                      <span className="goods-price">
                        <i>￥</i>
                        <em>99.00</em>
                      </span>
                    </div>
                    <p className="por-fk">
                      <span>235</span>人已付款
                    </p>
                    <Icon
                      type="shopping-cart"
                      style={{
                        color: "#d62327",
                        fontSize: "20px",
                        position: "absolute",
                        right: "20px",
                        bottom: "12px"
                      }}
                    />
                  </div>
                </li>
                <li className="goods-item">
                  <span className="goods-pic">
                    <img
                      src="https://www.aizhiyi.com/data/upload/shop/store/goods/94/2018/12/28/94_05993287052278317_360.jpg?v=14"
                      alt=""
                    />
                  </span>
                  <div className="goods-info">
                    <div className="goods-name">
                      <h4> 龙泉青瓷听香茶杯</h4>
                    </div>
                    <div className="goods-sale">
                      <span className="goods-price">
                        <i>￥</i>
                        <em>99.00</em>
                      </span>
                    </div>
                    <p className="por-fk">
                      <span>235</span>人已付款
                    </p>
                    <Icon
                      type="shopping-cart"
                      style={{
                        color: "#d62327",
                        fontSize: "20px",
                        position: "absolute",
                        right: "20px",
                        bottom: "12px"
                      }}
                    />
                  </div>
                </li>
                <li className="goods-item">
                  <span className="goods-pic">
                    <img
                      src="https://www.aizhiyi.com/data/upload/shop/store/goods/94/2018/12/28/94_05993287052278317_360.jpg?v=14"
                      alt=""
                    />
                  </span>
                  <div className="goods-info">
                    <div className="goods-name">
                      <h4> 龙泉青瓷听香茶杯</h4>
                    </div>
                    <div className="goods-sale">
                      <span className="goods-price">
                        <i>￥</i>
                        <em>99.00</em>
                      </span>
                    </div>
                    <p className="por-fk">
                      <span>235</span>人已付款
                    </p>
                    <Icon
                      type="shopping-cart"
                      style={{
                        color: "#d62327",
                        fontSize: "20px",
                        position: "absolute",
                        right: "20px",
                        bottom: "12px"
                      }}
                    />
                  </div>
                </li>
                <li className="goods-item">
                  <span className="goods-pic">
                    <img
                      src="https://www.aizhiyi.com/data/upload/shop/store/goods/94/2018/12/28/94_05993287052278317_360.jpg?v=14"
                      alt=""
                    />
                  </span>
                  <div className="goods-info">
                    <div className="goods-name">
                      <h4> 龙泉青瓷听香茶杯</h4>
                    </div>
                    <div className="goods-sale">
                      <span className="goods-price">
                        <i>￥</i>
                        <em>99.00</em>
                      </span>
                    </div>
                    <p className="por-fk">
                      <span>235</span>人已付款
                    </p>
                    <Icon
                      type="shopping-cart"
                      style={{
                        color: "#d62327",
                        fontSize: "20px",
                        position: "absolute",
                        right: "20px",
                        bottom: "12px"
                      }}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default List;
