/*
 * @writer: 咕鸽仙人
 * @LastEditors: 咕鸽仙人
 * @Date: 2019-04-10 17:21:33
 * @LastEditTime: 2019-04-10 21:14:15
 * @ 首页api
 */
//引入模块
const Router = require("koa-router");
const db = require("../db");
var ObjectId = require("mongoose").Types.ObjectId;
// 路由
var router = new Router();
// post
router.post("/", async (ctx, next) => {
  let { a } = ctx.request.body;
  let res = {};
  // 热销推荐
  if (a === "saleNum") {
    let { num } = ctx.request.body;
    res = await db.find("goods", { goods_fic_salenum: { $gt: num } });
  }
  ctx.body = res;
});
module.exports = router;
