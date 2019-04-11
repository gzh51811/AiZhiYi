/*
 * @writer: 咕鸽仙人
 * @LastEditors: 咕鸽仙人
 * @Date: 2019-03-01 22:51:52
 * @LastEditTime: 2019-04-11 22:09:05
 * @路由分配
 */
const Koa = require("koa");
const Router = require("koa-router");
const koaBody = require("koa-body");
//创建路由
var router = new Router();

router.use(
  koaBody({
    // 支持formdata
    multipart: true,

    // 文件支持
    formidable: {
      // 指定保存路径
      uploadDir: "./uploads",
      keepExtensions: true,
      // 改文件名
      onFileBegin(filename, file) {
        // filename: 上传文件的原始名
        // file:文件信息对象
        //   * path:
        // file.path = './uploads/'+filename
      }
    }
  })
);

// 引入页面路由
// const userRouter = require('./user');
const homeRouter = require("./home");
// 导出相应路由
// router.use("/login", loginRouter.routes());
const fuliRouter = require("./fuli.js");
const registerRouter = require("./register");
const loginRouter = require("./login");
const cartRouter = require("./cart");
const tokenRouter = require("./tokenverify");
// lmg添加
router.use("/fuli", fuliRouter.routes());
router.use("/register", registerRouter.routes());
router.use("/login", loginRouter.routes());
router.use("/cart", cartRouter.routes());
router.use("/home", homeRouter.routes());
router.use("/tokenverify", tokenRouter.routes());
module.exports = router;
