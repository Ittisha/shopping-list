import { applyMiddleware, compose, createStore } from 'redux';

import reducer from './../reducers';
import initialState from './initial-state';

const middleware = [];
const enchancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enchancers)
);

export default store;
