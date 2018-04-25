import { combineReducers } from 'redux';

import filter from './filter-reducer';
import items from './item-reducer';
import newItemValue from './new-item-reducer';

export default combineReducers({
    items,
    filter,
    newItemValue,
});
