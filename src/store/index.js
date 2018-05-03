import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from './../reducers';
import initialState from './initial-state';
import { loadItems } from '../actions/items-actions';

const middleware = [thunk];
const enchancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enchancers)
);

store.dispatch(loadItems('http://test-thunk.hamsterin.space/anna.json'));

export default store;
