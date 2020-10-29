import React from "react";
import {render} from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from "redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./components/App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

render(
    <Provider store={createStore(reducers, composeEnhancers(applyMiddleware()))}>
        <App/>
    </Provider>,
    document.getElementById('root')
);