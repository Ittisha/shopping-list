import { addItem, markAllUntaken, removeItem, toggleItem, updateAllItems } from '../actions/items-actions';
import { updateUntakenItemsFilter, updateTakenItemsFilter } from '../actions/filter-actions';
import updateNewItemValue from '../actions/new-item-actions';

import reducer from '../reducers';

const initialState = {
    items: [
        {value: 'Milk', id: "12", taken: false},
        {value: 'Eggs', id: "24", taken: false},
        {value: 'Blueberries', id: "36", taken: false},
    ],
    filter: {
        takenItemsFilter: '',
        untakenItemsFilter: '',
    },
    newItemValue: '',
};

describe('Combined reducer', () => {
    it('should match the initial state', () => {
        expect(reducer(initialState, {})).toBe(initialState);
    });

    it('addItem', () => {
        const value = 'item name';
        const action = addItem(value);
        const item = action.item;
        const state = reducer(initialState, action);

        expect(state.items).toContain(item);
    });

    it('removeItem', () => {
        const [ item ] = initialState.items;
        const action = removeItem(item.id);
        const state = reducer(initialState, action);

        expect(state.items).not.toContain(item);
    });

    it('toggleitem', () => {
        const [ item ] = initialState.items;
        const expectedStatus = !item.taken;
        const action = toggleItem(item.id);
        const state = reducer(initialState, action);
        const [ resultingItem ] = state.items;

        expect(resultingItem.taken).not.toContain(expectedStatus);
    });

    it('markAllUntaken', () => {
        const action = markAllUntaken();
        const state = reducer(initialState, action);

        const areAllUntaken = state.items.every(item => !item.packed);

        expect(areAllUntaken).toBe(true);
    });

    it('updateAllItems', () => {
       const action = updateAllItems(initialState.items);
       const state = reducer({}, action);
       expect(state.items).toEqual(initialState.items);
    });

    describe('updateNewItemValue', () => {
        it('should update the newItemValue field on the resulting state', () => {
            const value = 'item name';
            const action = updateNewItemValue(value);
            const state = reducer(initialState, action);
            expect(state.newItemValue).toBe(value);
        });
    });

    describe('updateTakenItemsFilter', () => {
        it('should update the takenItemsFilter field on the resulting state', () => {
            const value = 'item name';
            const action = updateTakenItemsFilter(value);
            const state = reducer(initialState, action);
            expect(state.filter.takenItemsFilter).toBe(value);
        });
    });

    describe('updateUntakenItemsFilter', () => {
        it('should update the untakenItemsFilter field on the resulting state', () => {
            const value = 'item name';
            const action = updateUntakenItemsFilter(value);
            const state = reducer(initialState, action);
            expect(state.filter.untakenItemsFilter).toBe(value);
        });
    });
});