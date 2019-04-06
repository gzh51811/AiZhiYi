import React,{Component} from 'react';
import axios from 'axios';
import withAxios from '../hoc/withAxios.js';


const imgStyle={
    width:'2.64rem',
    height:"2.94rem",
    float:"left"
}
const liStyle = {
    boxSizing:"borderBox",
    marginTop:"0.2rem",
    paddingTop:'0.12rem',
    width:'7.5rem',
    height:"3.26rem"
}
const zeroCStyle={
    height:"2.94rem",
    width:'4.46rem',
    float:"left",
    oxSizing:"borderBox",
    paddingLeft:"0.15rem"
}
const h4Style={
    height:"0.8rem",
    lineHeight:"0.8rem",
    width:'4.26rem',
    textOverflow:'ellipsis',
    whiteSpace:"nowrap",
    overflow:"hidden"
}
const p1Style ={
    lineHeight:"0.4rem",

    height:"0.4rem",
    marginBottom:"0.3rem",
    color:"red",
    

}
const p2Style ={
    float:"left",
    width:"4.26rem"
}
const p3Style={
    float:"left",
    color:"red",
    height:"0.6rem",
    lineHeight:"0.6rem",
    fontSize:"16px",
    marginTop:"0.2rem",
    marginBottom:"0.3rem",
}
const p4Style={
    float:"left",
    height:"0.6rem",
    lineHeight:"0.6rem",
    fontSize:"16px",
    textDecoration:"line-through",
    marginRight:"2rem",
    marginTop:"0.2rem",
    marginBottom:"0.3rem",

}
const p5Style={
    float:"right",
    height:"0.6rem",
    lineHeight:"0.4rem",
    fontSize:"16px",
    padding:"0.1rem",
    background:"#ccc",
   



}
const p5Style1={
    float:"right",
    height:"0.6rem",
    lineHeight:"0.4rem",
    fontSize:"16px",
    padding:"0.1rem",
    background:"red",
}
const p6Style={
     float:"left",
     marginTop:"0.3rem"
}
const zhekouStyle={
    marginTop:"0.2rem",
    marginLeft:"0.2rem",
    display:"block",
    height:'0.4rem',
    lineHeight:"0.4rem",
    float:"left",
    padding:"0 0.3rem",
    background:"red"
}

class Limit extends Component{
    constructor(){
        super();
        this.state=({
            datalist:[]
        })
    }
    componentWillMount(){
        
    }

    async componentWillMount(){
        //请求数据
        
      let {data}= await this.props.axios.get('/fuli/limit')
      this.setState({
        datalist:data
      })
      console.log("现在",this.state.datalist)
    }
    render(){

        return <div className="zero">
            <img src={require("../img/limit.jpg")} style={{width:"7.5rem",height:"3.5rem"}} />
            <ul>{
                this.state.datalist.map(item =><li style={liStyle} key={item._id}>
                    <img style={imgStyle } src={item.gImg_240} />

                    <div className="neirong" style={zeroCStyle}>
                    <h4 style={h4Style}><span style={{float:"left"}}>{item.gTitle}</span><span style={zhekouStyle}>8.6者</span></h4>
                    <p style={p3Style}>￥<span>{item.down_price}</span></p>
                    <p style={p4Style}>￥<span>{item.gPrice}</span></p><br/>
                        <p style={p2Style}>已购买：<span>{item.goods_fic_salenum}</span>件</p><br/>
                        <p style={p6Style}>距结束：{

                            (item.end_time-Date.now())/1000
                        }</p>
                       
                        <p style={
                            item.haveQualification?p5Style1:p5Style
                        }>{
                            item.haveQualification?"去抢购":"已结束"
                        }</p>

                    </div>
                </li> )
            }
                
            </ul>


        </div>
    }
}
Limit = withAxios(Limit)
export default Limit;