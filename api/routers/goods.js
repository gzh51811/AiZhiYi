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
    let res = await db.find('goods', {
    });
    ctx.body = res;
})
module.exports = router;
