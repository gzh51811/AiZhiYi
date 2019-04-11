const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

// 创建路由
var router = new Router(); 

// 引入页面路由

// lmg添加
const fuliRouter = require('./fuli.js');
const registerRouter = require('./register');
const loginRouter = require('./login');
const goodsRouter = require('./goods');

const tokenRouter = require("./tokenverify");
router.use(koaBody({
 // 支持formdata
 multipart:true,

 // 文件支持
 formidable:{
     // 指定保存路径
     uploadDir:'./uploads',
     keepExtensions:true,
     // 改文件名
     onFileBegin(filename,file){
         // filename: 上传文件的原始名
         // file:文件信息对象
         //   * path:

         // file.path = './uploads/'+filename
     }
 }
}));





// lmg添加
router.use('/fuli',fuliRouter.routes());
router.use('/register',registerRouter.routes());
router.use('/login',loginRouter.routes());
router.use('/goods',goodsRouter.routes());

router.use("/tokenverify", tokenRouter.routes());
module.exports = router;