import React, { Component } from "react";
import "./index.css";
import { Icon } from "antd";
class Goods extends Component {
  constructor() {
    super();
    this.state = {};
    console.log(this);
  }
  return = () => {
    this.props.history.goBack("key");
  };
  render() {
    return (
      <div
        className="goods"
        style={{
          display: "Flex",
          flexDirection: "column"
        }}
      >
        <div className="Top">
          <div className="header-l" onClick={this.return}>
            <Icon
              type="left"
              style={{
                fontSize: "22px",
                color: "#fff"
              }}
            />
          </div>
          <ul className="header-nav">
            <li className="cur">商品</li>
          </ul>
          <div className="Top_right">
            <Icon type="shopping-cart" />
          </div>
        </div>
        <main className="main">
          {/* 轮播图 */}
          <div className="img_Box">
            <img
              src="https://www.aizhiyi.com/data/upload/shop/store/goods/162/2018/11/08/162_05950052636511687.jpg?v=14"
              alt=""
            />
          </div>
          <div className="goods-detail-cnt">
            <div className="goods-detail-name">
              <span> 龙泉青瓷听香茶杯_ 梅子青 堂悦坊 </span>
              <p>创意带盖茶杯 单只礼盒装 龙泉青瓷 匠心之作 润泽如玉</p>
            </div>
            <div className="goods-detail-price">
              <p>
                <span className="fl">
                  ￥<em>99.00</em>
                </span>
                <span className="discount-test fl">
                  <span className="discounts">购物满99可省5元</span>
                </span>
              </p>
            </div>
            {/* 包邮 */}
            <div className="shipp cfl">
              <div className="goods-detail-item active cfl ">
                <span className="fl">包邮</span>
                <span
                  style={{
                    float: "right"
                  }}
                >
                  销量 : 69
                </span>
              </div>
            </div>
          </div>
        </main>
        <div className="bottom">
          <div className="otreh-handle">
            <li>
              <Icon type="shop" className="tu" />
              <span>店铺</span>
            </li>
            <li>
              <Icon type="customer-service" className="tu" />
              <span>客服</span>
            </li>
            <li>
              <Icon type="heart" className="tu" />
              <span>收藏</span>
            </li>
          </div>
          <div className="buy-handle">
            <span>加入购物车</span>
            <span>并不想购买</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Goods;
