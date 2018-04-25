import uniqueId from 'lodash.uniqueid';
import { ItemsActionType } from "../constants";

const addItem = (value) => ({
    type: ItemsActionType.ADD_ITEM,
    item: {
        value,
        id: uniqueId(),
        taken: false,
    },
});

const removeItem = (item) => ({
    type: ItemsActionType.REMOVE_ITEM,
    item,
});

const toggleItem = (item) => ({
    type: ItemsActionType.TOGGLE_ITEM,
    item: {
        ...item,
        taken: !item.taken,
    },
});

const markAllUntaken = () => ({
    type: ItemsActionType.MARK_ALL_UNTAKEN,
});


export {
    addItem,
    removeItem,
    toggleItem,
    markAllUntaken,
}