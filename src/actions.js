import AppDispatcher from './AppDispatcher';
import uniqueId from 'lodash.uniqueid';

/**
 * Enum action types
 * @readonly
 * @enum {string}
 */
const ActionType = {
    ADD_ITEM: 'ADD_NEW_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    TOGGLE_ITEM: 'TOGGLE_ITEM',
    MARK_ALL_UNTAKEN: 'MARK_ALL_ITEMS_UNTAKEN',
};

const addItem = (value) => {
    AppDispatcher.dispatch({
        type: ActionType.ADD_ITEM,
        item: {
            value,
            id: uniqueId(),
            taken: false,
        },
    });
};

const removeItem = (item) => {
    AppDispatcher.dispatch({
        type: ActionType.REMOVE_ITEM,
        item,
    });
};

const toggleItem = (item) => {
    AppDispatcher.dispatch({
        type: ActionType.TOGGLE_ITEM,
        item: {
            ...item,
            taken: !item.taken,
        },
    });
};

const markAllUntaken = () => {
    AppDispatcher.dispatch({
        type: ActionType.MARK_ALL_UNTAKEN,
    })
};


export {
    addItem,
    removeItem,
    toggleItem,
    markAllUntaken,
}