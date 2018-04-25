import { combineReducers } from 'redux';

import filterReducer from './filter-reducer';
import itemReducer from './item-reducer';
import newItemValueReducer from './new-item-reducer';

export default combineReducers({
    filterReducer,
    itemReducer,
    newItemValueReducer,
});
