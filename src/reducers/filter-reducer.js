import { FilterActionType } from '../constants';

const initialFiltersState = {
    takenItemsFilter: '',
    untakenItemsFilter: '',
};

const filterReducer = (state = initialFiltersState, action) => {
    if (action.type === FilterActionType.UPDATE_TAKEN_ITEMS_FILTER) {
        return {
            ...state,
            takenItemsFilter: action.text,
        }
    }

    if (action.type === FilterActionType.UPDATE_UNTAKEN_ITEMS_FILTER) {
        return {
            ...state,
            untakenItemsFilter: action.text,
        }
    }

    return state;
};

export default filterReducer;
