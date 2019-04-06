/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */


import React,{Component} from 'react';
import './UserLogin.css'
class UserLogin extends Component{
    goBack = ()=>{
        this.props.history.goBack();
    }
    gotoRegsiter = ()=>{
        this.props.history.push('/user_register');
    }
    render(){
        return <div className="Nlogin">
            <header id="header">
                <div className="header-wrap">
                    <div className="header-l">
                        <a href="javascript:;" onClick={this.goBack}>
                            <i className="back"></i>
                        </a>
                    </div>
                    <div className="header-title">
                        <h1>账号登录 </h1>
                    </div>
                </div>
            </header>
            <div className="horn">
                <div className="img_box clearfix" id="img_box"></div>
                <h3>新用户注册立送160元大礼包</h3>
            </div>
            <div className="Nlogin-sc">
                <div className="portrait"> 
                    <span></span>
                </div>
                <div className="nctouch-main-layout fixed-Width">
                    <div className='nctouch-inp-con'>
                        <div>
                            <ul className="form-box">
                                <li className="form-item name">
                                    <i className="nameico"></i>
                                    <div className="input-box  login-btn">
                                        <input type="tel" placeholder="请输入手机号" maxLength="11" className="inp" name="username" id="username"/>
                                    </div>
                                </li>
                                <li className="form-item name">
                                    <i className="pwdico"></i>
                                    <div className="input-box  login-btn">
                                        <input type="password" placeholder="请输入密码" className="inp" name="pwd" id="userpwd"/>
                                        
                                    </div>
                                    <em className="eye"></em>
                                </li>
                            </ul>
                            <div className="remember-form">
                                <div className="form-btn go tel ok">
                                    <a href="javasript:;" onClick={this.gotoRegsiter} className="btn">
                                    手机快速注册
                                    </a>
                                </div>
                                <a href="javascript:;" className="forgot-password">
                                    忘记密码
                                </a>
                            </div>
                            <div className="form-btn ok confirm active">
                            <input type="button" className="btn" id="loginbtn" value="登 录" />
                            </div>
                        </div>
                    </div>
                    <div className="joint-login active">
                        <h2>
                            <span>合作账号登录</span>
                        </h2>
                        <ul>
                        <li style={{display: 'listItem'}}>
                            <div className="disclick"></div>
                            <a className="qq" href="javascript:;"> <i></i></a>
                        </li>
                        <li style={{display: 'listItem'}}><div className="disclick"></div><a className="weibo" href="javascript: void(0);"> <i></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    }
}

export default UserLogin;