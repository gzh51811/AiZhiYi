import {combineReducers} from 'redux';

import loginReducer from './loginReducer';
// import commonReducer from './commonReducer';

//合并Reducer
const rootReducers = combineReducers({
    // common: commonReducer,
    login: loginReducer
});

export default rootReducers;