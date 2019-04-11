/* eslint-disable no-undef */
const Router = require('koa-router');
//const md5=require('md5');
const db = require('../db');
// 创建路由
var router = new Router();


/**
 * ctx
 */

router.get('/',async(ctx,next)=>{
    // let {
    //     telNumber
    // } = ctx.query;
    let res = await db.find('cart', {
    });
    ctx.body = res;
})
exports.update = async (colName,query,newData)=>{

    let {db,client} = await connect();

    let collection = db.collection(colName);
    let res = await collection['updateMany'](query,newData);

    client.close();

    return res;
}


module.exports = router;
