import { createStore } from 'redux';

import reducer from './../reducers';
import initialState from './initial-state';

export default createStore(reducer, initialState);
