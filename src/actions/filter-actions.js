import { FilterActionType } from '../constants';

const updateTakenItemsFilter = (text) => ({
    type: FilterActionType.UPDATE_TAKEN_ITEMS_FILTER,
    text,
});

const updateUntakenItemsFilter = (text) => ({
    type: FilterActionType.UPDATE_UNTAKEN_ITEMS_FILTER,
    text,
});

export {
    updateTakenItemsFilter,
    updateUntakenItemsFilter,
};
