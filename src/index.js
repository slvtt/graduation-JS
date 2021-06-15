import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {defaultReducer} from './redux/reducers/defaulReducer'
import {loadState,saveState} from './redux/localStorage/localStorage';
import {BrowserRouter} from "react-router-dom";

import App from './containers/app';

import 'normalize.css';
import './sass/index.scss';
import  cors from 'cors';
import {Route} from "react-router";

const state = loadState()
const store = createStore(defaultReducer,state,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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