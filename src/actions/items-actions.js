import uniqueId from 'lodash.uniqueid';
import { ItemsActionType } from "../constants";

const loadItemsDataSuccess = (items) => ({
    type: ItemsActionType.LOAD_ITEMS_DATA_SUCCESS,
    items,
});

const loadItems = (url) => {
    return (dispatch) => {
        fetch(url)
            .then((response) => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then((items) => dispatch(loadItemsDataSuccess(items)));
    }
};

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
    loadItemsDataSuccess,
    loadItems,
    addItem,
    removeItem,
    toggleItem,
    markAllUntaken,
};
