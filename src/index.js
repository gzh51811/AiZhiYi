import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from 'react-router-dom';

// 引入store
import store from './store';

// 引入react-redux
import {Provider} from 'react-redux';
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    , 
    document.getElementById('root')
);


