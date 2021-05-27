import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {defaultReducer} from './redux/reducers/defaulReducer'
import {loadState,saveState} from './redux/localStorage/localStorage'

import App from './containers/app';

import 'normalize.css';
import './sass/index.scss';

const state = loadState()
const store = createStore(defaultReducer,state,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
    saveState(store.getState())
})
ReactDOM.render(
    <Provider store ={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);