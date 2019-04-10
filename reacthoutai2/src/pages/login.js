import React,{Component} from 'react';
import { Button } from 'antd';
import withAxios from '../hoc/withAxios.js'
class login extends Component{
    constructor(){
        super();
        this.state = {
        }
    }
    toGoodlist(){
        console.log("我在登录也")
        this.props.history.push('/glist')
    }
    render(){
        return <div className="login">
            <Button type="primary" onClick={this.toGoodlist.bind}>Primary</Button>
        </div>
    }
}

login  = withAxios(login)
export default login;

