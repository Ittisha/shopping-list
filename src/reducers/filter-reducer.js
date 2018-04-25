import { FilterActionType } from '../constants';

const initialFiltersState = {
    takenItemsFilter: '',
    untakenItemsFilter: '',
};

const filterReducer = (state = initialFiltersState, action) => {
    return state;
};

export default filterReducer;
