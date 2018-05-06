import { ItemsActionType } from "../constants";

const loadItems = () => {
    return (dispatch) => {
        return fetch('http://test-thunk.hamsterin.space/anna.json')
            .then((response) => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then((items) => dispatch({
                type: ItemsActionType.LOAD_ITEMS_DATA_SUCCESS,
                items,
            }));
    }
};

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
    loadItems,
    addItem,
    removeItem,
    toggleItem,
    markAllUntaken,
};
