import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import RootReducer from './reducers/root'

import { Provider }  from 'react-redux';
import { createStore } from 'redux';

let store = createStore(RootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
