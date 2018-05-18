import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import saga from './saga';
import reducer from './../reducers';
import initialState from './initial-state';
import { fetchItems } from '../actions/items-actions';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const enchancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enchancers)
);

sagaMiddleware.run(saga);
store.dispatch(fetchItems());

export default store;
