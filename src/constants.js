/**
 * Enum items action types
 * @readonly
 * @enum {string}
 */
const ItemsActionType = {
    ADD_ITEM: 'ADD_NEW_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    TOGGLE_ITEM: 'TOGGLE_ITEM',
    MARK_ALL_UNTAKEN: 'MARK_ALL_ITEMS_UNTAKEN',
    UPDATE_NEW_ITEM_VALUE: 'UPDATE_NEW_ITEM_VALUE',
};

/**
 * Enum filters action types
 * @readonly
 * @enum {string}
 */
const FilterActionType = {
    UPDATE_UNTAKEN_ITEMS_FILTER: 'UPDATE_UNTAKEN_ITEMS_FILTER',
    UPDATE_TAKEN_ITEMS_FILTER: 'UPDATE_TAKEN_ITEMS_FILTER',
};

export {
    ItemsActionType,
    FilterActionType,
};
