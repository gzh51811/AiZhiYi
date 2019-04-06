/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{Component} from 'react';

import './User.css';
class User extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    gotoUserInfo = ()=>{
        this.props.history.push('/user_info');
    }
    gotoLogin = ()=>{
        this.props.history.push('/user_login');
    }
    gotoUserSetting = ()=>{
        this.props.history.push('/user_setting');
    }
    render(){
        return <div className="scroller-body">
            <div className="scroller-box">
                {/* <div className='member-top active'>
                    <div className='member-info'>
                        <div className='user-avatar'>
                            <a href="javascript:;" onClick={this.gotoUserInfo}>
                                <img src={require("../../images/minren.jpg")} alt=""/>
                            </a>
                        </div>
                        <a href="javascript:;">
                            <div className='user-name'>
                                <span>
                                    u452564711
                                        <br />
                                    <sup>
                                        级别
                                            <i>V0</i>
                                    </sup>
                                </span>

                            </div>
                        </a>
                    </div>
                    <a href="javascript:;" id="enter_code" className='qrcode_icon'>
                        <span></span>
                        <i></i>
                    </a>
                    <div className='friends_circle'>
                        <a href="javascript:;" className='circle'>
                            <i></i>
                            加入的好友圈 (0)
                        </a>
                        <a href="javascript:;" className='friends'>
                            <i></i>
                            关注的好友 (0)
                        </a>
                    </div>
                </div> */}
                <div className="member-top">
                    <div className="member-info">
                        <a href="javascript:;" className="default-avatar" onClick={this.gotoLogin}></a>
                        <a href="javascritpt:;" className="to-login" onClick={this.gotoLogin}>点击登录</a>
                    </div>
                </div>
                <div className='member-center'>
                    <dl className='mtn my-order'>
                        <dt>
                            <a href="javascript:;" className="order-login">
                                <h3 className="mem-tit">我的订单</h3>
                                <h5>查看全部订单<i className="arrow-r"></i></h5>
                            </a>
                        </dt>
                        <dd>
                            <ul id="order_ul">
                                <li>
                                    <a href="javascript:;">
                                        <i className="cc-01"></i>
                                        <p>待付款</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <i className="cc-02"></i>
                                        <p>待发货</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <i className="cc-03"></i>
                                        <p>待收货</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <i className="cc-04"></i>
                                        <p>待收货</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <i className="cc-05"></i>
                                        <p>退款/退货</p>
                                    </a>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                    <div className='my-service'>
                         我的服务
                    </div>
                    <dl className="mtn type_list">
                        <dt>
                            <a href="javascript:;" id="group-order" className="voucher-login">
                                <h3>
                                    <i className="mc-02"></i>
                                    <p>拼团订单</p>
                                </h3>
                            </a>
                        </dt>
                        <dt>
                            <a href="javascript:;" id="myvoucher" className="voucher-login">
                                <h3>
                                    <i className="mc-04"></i>
                                    <p>代金券</p>
                                </h3>
                            </a>
                        </dt>
                        <dt>
                            <a href="javascript:;" id="giftcard" className="voucher-login">
                                <h3>
                                    <i className="mc-gift"></i>
                                    <p>礼品卡</p>
                                </h3>
                            </a>
                        </dt>
                        <dt>
                            <a href="javascript:;" id="membercenter" className="voucher-login">
                                <h3>
                                    <i className="mc-03"></i>
                                    <p>会员中心</p>
                                </h3>
                            </a>
                        </dt>

                    </dl>
                    <dl className="mtn type_list">
                        <dt>
                            <a href="javascript:;" id="mylove" className="fav-login">
                                <h3>
                                    <i className="mc-06"></i>
                                    <p>我的收藏</p>
                                </h3>
                            </a>
                        </dt>
                        <dt>
                            <a href="javascript:;" id="myhistory" className="view-login">
                                <h3>
                                    <i className="mc-07"></i>
                                    <p>我的足迹</p>
                                </h3>
                            </a>
                        </dt>
                        <dt>
                            <a href="javascript:;" id="address" className="address-login">
                                <h3>
                                    <i className="mc-08"></i>
                                    <p>地址管理</p>
                                </h3>
                            </a>
                        </dt>
                        <dt>
                            <a href="javascript:;" id="mynews" className="news-login">
                                <h3>
                                    <i className="mc-01"> <em></em></i>
                                    <p>我的消息</p>
                                </h3>
                            </a>
                        </dt>
                    </dl>
                    <dl className="mtn type_list bottom">
                        <dt>
                            <a href="javascript:;" id="help" className="account-login">
                                <h3>
                                    <i className="mc-help"></i>
                                    <p>客服与帮助</p>
                                </h3>
                            </a>
                        </dt>
                        <dt>
                            <a href="javascript:;" onClick={this.gotoUserSetting}  id="setting" className="account-login">
                                <h3>
                                    <i className="mc-09"></i>
                                    <p>设置</p>
                                </h3>
                            </a>
                        </dt>
                    </dl>
                </div>
            </div>
        </div>
    }
}


export default User;