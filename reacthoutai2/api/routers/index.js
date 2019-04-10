const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

// 创建路由
var router = new Router(); 

// 引入页面路由

// lmg添加
const fuliRouter = require('./fuli.js');
const adduserRouter = require('./adduser.js');

router.use(koaBody({

 multipart:true,

 
 formidable:{
     
     uploadDir:'./uploads',
     keepExtensions:true,
     
     onFileBegin(filename,file){
         
     }
 }
}));





// lmg添加
router.use('/fuli',fuliRouter.routes());
router.use('/adduser',adduserRouter.routes());
module.exports = router;