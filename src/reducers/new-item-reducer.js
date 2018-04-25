import { ItemsActionType } from '../constants';

const newItemValueReducer = (state = '', action) => {
    if (action.type === ItemsActionType.UPDATE_NEW_ITEM_VALUE) {
        return action.value;
    }
    return state;
};

export default newItemValueReducer;
