import React,{Component} from 'react';
import ReactDom from 'react-dom';




class Glist extends Component{
    constructor(){
        super();
        this.state={
            datalist:[],
        }
    }
    

    render(){
        
        let {path} = this.props.match;
      
        return <div className="fuli" >
        商品列表

        </div>
    }
}


export default Glist;