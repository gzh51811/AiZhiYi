/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import './UserInfo.css';
class Cart extends Component {
    goBack=()=>{
        this.props.history.goBack();
    }
    render() {
        return <div className="cart">
            <header className="personal_header">
                <div className="header-wrap">
                    <div className="header-l">
                        <a href="javascript:;" onClick={this.goBack}>
                            <i className="back"></i>
                        </a>
                    </div>
                    <div className="header-title">
                        <h1>个人资料</h1>
                    </div>
                </div>
            </header>
            <div className="scroller-body personal_body" id="personal_body">
                <div className="scroller-box" id="scroller-box">
                    <div className="scroller-box" id="scroller-box">
                        <div className="member-center" id="personal_mess">
                            <dl className="mtm">
                                <dt className="mem_pho">
                                    <a href="javascript:;"> </a>
                                    <h3>头像</h3>
                                    <input type="file" className="file_head" name="file_head" id="" style={{ "height": "100%", "left": 0, "zIndex": 50 }}>

                                    </input>
                                    <h5>
                                        <a href="javascript:;"></a>
                                        <div className="person_pho_b">
                                            <a href="javascript:;"></a>
                                            <a href="javascript:;" className="person_pho_box">
                                                <img src="https://www.aizhiyi.com/data/upload/shop/avatar/avatar_64711_new.jpg?timestemp=1554296382659" className="person_pho personal-appen" id="face" />
                                            </a>
                                        </div>
                                    </h5>


                                </dt>
                                <dt className="mem_count">
                                    <a href="javascript:;">
                                        <h3>账号</h3>
                                        <h5><em className="person_count">17328294525</em></h5>
                                    </a>
                                </dt>
                                <dt className="nickname">
                                    <a href="javascript:;" id="nickname">
                                        <h3>昵称</h3>
                                        <h5><em className="person_count"></em><i className="arrow-r"></i></h5>
                                    </a>
                                </dt>
                                <dt className="sexbox">
                                    <a href="javascript:;">
                                        <h3>性别</h3>
                                        <h5><em className="person_count">男</em><i className="arrow-r"></i></h5>
                                    </a>
                                </dt>

                                <dt className="birth_day">
                                    <h3>生日</h3>
                                    <h5><em className="person_count ui-alert" id="result"></em><i className="arrow-r"></i></h5>

                                </dt>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Cart;