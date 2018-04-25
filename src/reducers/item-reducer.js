import { ItemsActionType } from '../constants';

const itemsReducer = function (state = [], action) {
    if (action.type === ItemsActionType.ADD_ITEM) {
        const item = action.item;
        return [ ...state, item ];
    }

    if (action.type === ItemsActionType.REMOVE_ITEM) {
        return state.filter(item => item.id !== action.id);
    }

    if (action.type === ItemsActionType.TOGGLE_ITEM) {
        return state.map((item) => {
            if (item.id === action.id) {
                return {
                    ...item,
                    taken: !item.taken,
                };
            }
            return item;
        });
    }

    if (action.type === ItemsActionType.MARK_ALL_UNTAKEN) {
        return state.map((item) => {
            return {
                ...item,
                taken: false,
            };
        });
    }

    return state;
};

export default itemsReducer;
