```javascript
/*
 * @writer: 咕鸽仙人
 * @LastEditors: 咕鸽仙人
 * @Date: 2019-04-1 15:35:38
 * @LastEditTime: 2019-04-03 11:22:46
 */
```

##  爱之依
> aizhiyi

#### 技术支持

    UI框架 : Ant Design
    前端框架 : ReactJS
    后端语言 : nodeJS
    数据库 : MongoDB

#### 说明

  * 项目名称 : 爱之依
  * 人员结构 : 组长 : `黄理强`    组员 :  `李明钢` `曾晓添` `袁家建`
  * 官方地址 : https://www.aizhiyi.com/wap/
  * 演示地址 : 148.70.88.193:1822
  * github地址:https://github.com/gzh51811/AiZhiYi

#### 目录树



#### 页面划分

* 模块一 `袁家建`
```javascript

* 登录注册
* 购物车页
* (有时间就做订单页)

```
* 模块二 `黄理强`
```javascript

* 首页(内容)
* 搜索页
* 列表页
* 详情页

```
* 模块三 `李明钢`
```javascript

* 福利页 (打折多少在数据库写好)
* 后台管理
  *  (商品管理 打折功能 修改商品是否打折,输入折扣)

```
* 模块四 `曾晓添`
```javascript

* 分类页
* 后台

```

#### 数据库

* goods (商品表)
  * gTitle        // 商品标题    (string)
  * gDescribe     // 商品描述    (string)
  * gPrice        // 商品价格    (number)
  * gDiscount     // 折扣        (0 - 9.5)
  * gWelcome      // 销量        (number) (购物车点击购买 + n)
  * gSort         // 分类页      (string) (例 : 传统工艺 民俗文化等)
  * gSonSort      // 子分类      (string) (例 : 红茶 绿茶 服饰等)
  * gShop         // 专馆(店铺)  (string) (例 : 文创生活馆)
  * gImg          // 商品图片    (图片地址)

* shop (专馆)
  * sName         // 店名        (string)
  * sImg          // 店头像       (例子 : https://www.aizhiyi.com/data/upload/shop/store/05875850289035485_sm.jpg?v=14)

  * sPicture      // 店图片       (例子 : https://www.aizhiyi.com/data/upload/shop/store_joinin/05875850026611223.jpg)

  * sWelcome      // 收藏人数      (string)

* cart (购物车)
  * userName      //用户名
  * cNum          //商品数量       (number)
  * u_id          //商品的 _id     (objectNumber)

* user (用户)
  * uImg          //用户头像        (统一用 : https://www.aizhiyi.com/data/upload/shop/avatar/1.png?timestemp=1554122083174)

  * name          // 用户名         (string)
  * phone         // 手机号         (string)
  * pass          // 密码           (string)
  * sex           // 性别           (string) (默认保密 可更改?)


