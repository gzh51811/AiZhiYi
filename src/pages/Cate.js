import React,{Component} from 'react';
import withAxios from '../hoc/withAxios';
import { Tabs, Select,Icon } from 'antd';
import '../css/cate.css'
const TabPane = Tabs.TabPane;


class Cate extends Component{
	constructor(){
		super();
		this.state={
			cate:["专馆基地","活动专区","传统工艺","民俗文化","茶艺茶道","特色美食","珠宝首饰","文化创意","个性定制"]
		}
		this.onTabClick=this.onTabClick.bind(this)
	}
// 	async componentWillMount() {
// 	        let { data } = await this.props.axios.get('/cate/init');
// 	        console.log(data);
// 	        this.setState({
// 	            datalist: data.datas.goods_list
// 	        });
// 	
// 	
// 	    }
	async onTabClick(key){
		
		console.log(this.state.cate[key])
		
		
	}
    render(){
		let {match} = this.props;
        return( <div className="cate">
					<span className="cate_header">分类<Icon type="message"  style={{ "position":'absolute','right':'0.4rem','top':'0.26rem' }}/></span>
					<Tabs tabPosition='left' onTabClick={this.onTabClick}>
					{this.state.cate.map((item,idx) =>  <TabPane tab={item} key={idx}>
						{
							item=='活动专区'?(<dl className="brands-recommend hot-area">
		<div className="categroy-banner top_banner"><a href="javascript;;">
			<img src={require("../img/z142.jpg")}  className="cate_hearder_img"/></a></div>
		<dd>
			<a href="javascript:;" className="seckill_zone" id="toseckill" seckill_type="xsm" >
				<span><img src={require("../img/z170.png")}/></span>
				<p>首发体验</p>
			</a>
		</dd>
		<dd>
			<a href="javascript:;" className="seckill_zone" id="togroupbuy" seckill_type="abt" >
				<span><img src={require("../img/abt.png")}/></span>
				<p>拼团</p>
			</a>
		</dd>
		<dd>
			<a href="javascript:;" className="seckill_zone" id="tolimitbuy" seckill_type="xsg" >
				<span><img src={require("../img/xsg.png")}/></span>
				<p>限时购</p>
			</a>
		</dd>	
		<dd>
			<a href="javascript:;" className="lastGoods" >
				<span><img src={require("../img/newgoods.png")}/></span>
				<p>新品上市</p>
			</a>
		</dd>	
	</dl>):<div>{item=='专馆基地'?(<dl className="brands-recommend hot-area">
		<div className="categroy-banner top_banner"><a href="javascript;;">
			<img src={require("../img/z142.jpg")}  className="cate_hearder_img"/></a></div>
		<dt>
			<a href="javascript:;">
				<img src="https://www.aizhiyi.com/wap/images/cloud.png?999"/>
				<span className="cat-two">热门专馆</span>
			</a>
		</dt>
		<dd>
			<a href="javascript:;" className="seckill_zone" id="toseckill" seckill_type="xsm" >
				<span><img src={require("../img/z170.png")}/></span>
				<p>首发体验</p>
			</a>
		</dd>
		<dd>
			<a href="javascript:;" className="seckill_zone" id="togroupbuy" seckill_type="abt" >
				<span><img src={require("../img/abt.png")}/></span>
				<p>拼团</p>
			</a>
		</dd>
		<dd>
			<a href="javascript:;" className="seckill_zone" id="tolimitbuy" seckill_type="xsg" >
				<span><img src={require("../img/xsg.png")}/></span>
				<p>限时购</p>
			</a>
		</dd>	
		<dd>
			<a href="javascript:;" className="lastGoods" >
				<span><img src={require("../img/newgoods.png")}/></span>
				<p>新品上市</p>
			</a>
		</dd>
	</dl>):<h1>bb</h1>}</div>
						}
					</TabPane>)}
					</Tabs>		
				</div>
				)
    }
}

Cate=withAxios(Cate);
export default Cate;