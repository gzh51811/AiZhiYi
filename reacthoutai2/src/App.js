import React, { Component } from 'react';
import { Route, Redirect, Switch ,withRouter} from 'react-router-dom';
import { Link } from 'react-router';
import AddGood from './pages/addGood.js';
import AddUser from './pages/addUser.js';
import Glist from './pages/Glist.js';
import OrderList from './pages/orderList.js';
import UserList from './pages/UserList.js';
import Login from './pages/login.js';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import "antd/dist/antd.css"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const headerStyle = {
  display:"none"
}
const { Header, Content, Footer, Sider} = Layout;
 const test = true;




class App extends Component {
  constructor() {
    super();
    this.state = {
      current:"/glist"
    }
    this.toGoodlist = this.toGoodlist.bind(this);
    this.toAddgood = this.toAddgood.bind(this);
    this.toAdduser = this.toAdduser.bind(this);
    this.toOrderlist = this.toOrderlist.bind(this);
    this.toUserlist = this.toUserlist.bind(this);
  }
  toGoodlist(){
    console.log(this)
    this.props.history.push('/glist')


  }
  toAddgood(){
    console.log(this)
    this.props.history.push('/addgood')

  }
  toAdduser(){
    console.log(this)
    this.props.history.push('/adduser')
  }
  toOrderlist(){
    console.log(this)
    this.props.history.push('/orderlist')
  }
  toUserlist(){
    console.log(this)
    this.props.history.push('/userlist')

  }
  componentWillMount(){
    console.log(333)
    console.log(this.props.location.pathname)
    this.setState({
      current:this.props.location.pathname
    })
  }

  render() {
    console.log("我在app")
    return test == true? (
    <Layout>
    <Header className="header" style={ this.state.current == '/userlist'?headerStyle:{} }>
    <div style={{width:'200px',float:"left",color:"white",fontSize:"22px"}} >后台管理系统</div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px',float:"right" }}
      > 
          <SubMenu title={<span className="submenu-title-wrapper">我的</span>}>
                
                  <Menu.Item key="setting:1">我的信息</Menu.Item>
                  <Menu.Item key="setting:2">修改信息</Menu.Item>
                
              </SubMenu>
              <Menu.Item key="alipay">
                退出
              </Menu.Item>
        </Menu>
    </Header>

    <Content >
      
      <Layout style={{  background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={[this.state.current]}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" title={<span>商品管理</span>}>
              <Menu.Item key="/glist" onClick={this.toGoodlist}>商品列表</Menu.Item>
              <Menu.Item key="/addgood" onClick={this.toAddgood}>添加商品</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span>用户管理</span>}>
              <Menu.Item key="/userlist" onClick={this.toUserlist}>用户列表</Menu.Item>
              <Menu.Item key="/adduser" onClick={this.toAdduser}>添加用户</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span>订单管理</span>}>
              <Menu.Item key="/orderlist" onClick={this.toOrderlist}>订单列表</Menu.Item>
              
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
         
          <Switch>
            <Route path="/addgood" component={AddGood} />
            <Route path="/adduser" component={AddUser} />
            <Route path="/glist" component={Glist} />
            <Route path="/orderlist" component={OrderList} />
            <Route path="/userlist" component={UserList} />

            <Redirect from="/"  to="/glist" />
          </Switch>

        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
  ):<Login></Login>
  }
}
App = withRouter(App);
export default App;
