import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";

import 'normalize.css';
import './sass/index.scss';

import App from './containers/app';
import reducer from './redux/reducers/indexReducer'
import {loadState,saveState} from './redux/localStorage/localStorage';

const state = loadState()
const store = createStore(reducer,state,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
    saveState(store.getState())
})

ReactDOM.render(
    <BrowserRouter>
        <Provider store ={store}>
            <React.StrictMode>
                <Route path="/" component={App}/>
            </React.StrictMode>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);