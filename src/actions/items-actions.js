import { ItemsActionType } from "../constants";

const fetchItems = () => ({
    type: ItemsActionType.FETCH_ITEMS,
});

const updateAllItems = (items) => ({
    type: ItemsActionType.UPDATE_ALL_ITEMS,
    items,
});

const addItem = (value) => ({
    type: ItemsActionType.ADD_ITEM,
    item: {
        value,
        id: Date.now().toString(),
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
    fetchItems,
    updateAllItems,
    addItem,
    removeItem,
    toggleItem,
    markAllUntaken,
};
