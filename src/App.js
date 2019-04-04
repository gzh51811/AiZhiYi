import React, { Component } from 'react';
import {  Icon } from 'antd';
import Home from './pages/Home';
import Fuli from './pages/Fuli';
import Cate from './pages/Cate';
import Cart from './pages/Cart';
import User from './pages/User/User';
import UserInfo from './pages/UserInfo/UserInfo'

import './App.css';
import './rem';


import { Route, Redirect, Switch ,withRouter} from 'react-router-dom';
class App extends Component {
  constructor() {
    super();
    this.state = {
      navs: [
        {
          text: '首页',
          name: 'Home',
          path: '/home',
          icon: 'home'
        },
        {
          text: '福利',
          name: 'Fuli',
          path: '/fuli',
          icon: 'gift'
        },
        {
          text: '分类',
          name: 'Cate',
          path: '/cate',
          icon: 'appstore'
        },
        {
          text: '购物车',
          name: 'Cart',
          path: '/cart',
          icon: 'shopping-cart'
        },
        {
          text: '我的',
          name: 'User',
          path: '/user',
          icon: 'user'
        },
      ],
      current: 'Home'
    }
  }
  handleClick(key){
      this.setState({
        current: key
      }, () => {
        this.props.history.push('/' + key.toLowerCase());
      });
      console.log(this);
  }
  render() {
    let {history} = this.props;
    let {location} = history;
    return (
      <div>
        <div className='head'>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/fuli" component={Fuli} />

            {/* 动态路由 */}
            <Route path="/cate" component={Cate} />
            <Route path="/cart" component={Cart} />
            <Route path="/user" component={User} />
            <Route path="/user_info" component={UserInfo} />
            {/* <Route path="/" render={()=><div>我的首页</div>} exact/> */}
            <Redirect from="/" to="/home" />{/* 404 */}
          </Switch>
        </div>
        {
          this.state.navs.some((item)=>{
            if(item.path===location.pathname){
              return true;
            }else{
              return false;
            }
          })?<footer className="footer-nav" id="footer">
          <ul>
            {this.state.navs.map(item => <li key={item.name} onClick={this.handleClick.bind(this,item.name)}>
              <Icon type={item.icon}  style={{ 'fontSize': '.42rem','color':(item.name===this.state.current?'red':'')}} /><p>{item.text}</p>
            </li>)}
          </ul>
        </footer>:''
        }
      </div>
      
    )
  }
}
App = withRouter(App);
export default App;
