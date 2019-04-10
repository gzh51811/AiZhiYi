/*
 * @writer: 咕鸽仙人
 * @LastEditors: 咕鸽仙人
 * @Date: 2019-04-09 11:17:38
 * @LastEditTime: 2019-04-09 14:15:45
 * @ store
 */
import { createStore } from "redux";
//reducers模块
import rootReducer from "./reducers";

// 创建一个store
let store = createStore(rootReducer);
export default store;
