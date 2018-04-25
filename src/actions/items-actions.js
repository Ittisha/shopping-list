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

const removeItem = (id) => ({
    type: ItemsActionType.REMOVE_ITEM,
    id: id,
});

const toggleItem = (id) => ({
    type: ItemsActionType.TOGGLE_ITEM,
    id: id,
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