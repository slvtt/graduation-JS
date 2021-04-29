import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import 'normalize.css';
import './sass/index.scss';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);