/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{Component} from 'react';
import './UserRegister.css';
class UserRegister extends Component{
    goBack = ()=>{
        this.props.history.goBack();
    }
    render(){
        return <div className="Nlogin register_wrap">
            <header id="header" className="fixed">
                <div className="header-wrap">
                    <div className="header-l"><a href="javascript:;" onClick={this.goBack}><i className="back"></i></a></div>
                    <div className="header-title">
                        <h1>注册</h1>
                    </div>
                </div>
            </header>
            <div className="nctouch-main-layout fixed-Width register-top Nfor">
                <div className="nctouch-inp-con new-nctouch">
                    <form>
                        <ul className="form-box">
                            <li className="form-item">
                                <div className="input-box">
                                    <input type="tel" placeholder="请输入手机号" className="inp" name="usermobile" id="usermobile" maxLength="11" />
                                    <span></span>
                                </div>
                            </li>
                            <li className="form-item">
                                <div className="input-box">
                                    <input type="password" id="password" name="password" maxLength="20" size="20" className="inp message-text" autoComplete="off" placeholder="设置密码 (6-20位英文字母或数字)" />      
                                    <span></span>
                                </div>
                            </li>
                            <li className="form-item">
                                <div className="input-box">
                                    <input type="password" id="repassword" name="repassword" maxLength="20" size="20" className="inp message-text" autoComplete="off" placeholder="请再次输入密码" />
                                    <span></span>
                                </div>
                            </li>
                            <li className="form-item">
                                <div className="input-box">
                                    <input type="text" id="captcha" name="captcha" maxLength="4" size="10" className="inp" autoComplete="off" placeholder="输入4位验证码"/>
                                    <span className="input-del code"></span>
                                    <a href="javascript:;" id="refreshcode" class="code-img">
                                        S5SD
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div className="form-btn" style={{marginTop:'1.0rem'}}>
                            <a href="javascript:;" style={{lineHeight:'0.95rem'}} className="btn">
                                确认注册
                            </a>
                        </div>
                        <div className="remember-form">
                            <input type="checkbox" name="" id=""/>
                            <label for="checkbox" class="">阅读并同意</label>
                            <a href="javascript:;" className="reg-cms">
                                《服务协议》
                            </a>
                            <a class="reg-cms" href="javascript:;">《隐私协议》</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default UserRegister;