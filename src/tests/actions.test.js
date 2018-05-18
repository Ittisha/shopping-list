import { ItemsActionType, FilterActionType } from '../constants';
import {
    addItem, markAllUntaken, removeItem,
    toggleItem, fetchItems, updateAllItems
} from '../actions/items-actions';
import { updateUntakenItemsFilter, updateTakenItemsFilter } from '../actions/filter-actions';
import updateNewItemValue from '../actions/new-item-actions';

describe('Item actions', () => {
    describe('fetchItems', () => {
        it('should return FETCH_ITEMS as the action type', () => {
            const action = fetchItems();
            expect(action.type).toBe(ItemsActionType.FETCH_ITEMS);
        });
    });

    describe('updateAllItems', () => {
       it('should return UPDATE_ALL_ITEMS as the action type', () => {
           const action = updateAllItems([]);
           expect(action.type).toBe(ItemsActionType.UPDATE_ALL_ITEMS);
       });

        it('should return the provided items array', () => {
            const items = [
                {value: 'Milk', id: '20', taken: false},
                {value: 'Eggs', id: '30', taken: false},
                {value: 'Blueberries', id: '50', taken: false}
            ];
            const action = updateAllItems(items);
            expect(action.items).toEqual(items);
        })
    });

    describe('addItem', () => {
        it('should return ADD_NEW_ITEM as the action type', () => {
            const action = addItem('item name');
            expect(action.type).toBe(ItemsActionType.ADD_ITEM);
        });

        it('should return the provided value on the action', () => {
            const value = 'item name';
            const action = addItem(value);
            expect(action.item.value).toBe(value);
        });

        it('should default taken to be false', () => {
            const action = addItem('item name');
            expect(action.item.taken).toBe(false);
        });

        it('provide a string id', () => {
            const action = addItem('item name');
            expect(typeof action.item.id).toBe('string');
        });
    });

    describe('toggleItem', () => {
        it('should return TOGGLE_ITEM as the action type', () => {
            const action = toggleItem('item name');
            expect(action.type).toBe(ItemsActionType.TOGGLE_ITEM);
        });

        it('should return the provided id on the action', () => {
            const id = '123';
            const action = toggleItem(id);
            expect(action.id).toBe(id);
        });
    });

    describe('removeItem', () => {
        it('should return REMOVE_ITEM as the action type', () => {
            const action = removeItem('item name');
            expect(action.type).toBe(ItemsActionType.REMOVE_ITEM);
        });

        it('should return the provided id on the action', () => {
            const id = '123';
            const action = removeItem(id);
            expect(action.id).toBe(id);
        });
    });

    describe('markAllUntaken', () => {
        it('should return MARK_ALL_ITEMS_UNTAKEN as the action type', () => {
            const action = markAllUntaken('item name');
            expect(action.type).toBe(ItemsActionType.MARK_ALL_UNTAKEN);
        });
    });
});

describe('New Item Actions', () => {

    describe('updateNewItemValue', () => {
        it('should return UPDATE_NEW_ITEM_VALUE as the action type', () => {
            const action = updateNewItemValue('item name');
            expect(action.type).toBe(ItemsActionType.UPDATE_NEW_ITEM_VALUE);
        });

        it('should return the provided text', () => {
            const value = 'item name';
            const action = updateNewItemValue(value);
            expect(action.value).toBe(value);
        });
    });

});

describe('Filter Actions', () => {

    describe('updateUntakenItemsFilter', () => {
        it('should return UPDATE_UNTAKEN_ITEMS_FILTER as the action type', () => {
            const action = updateUntakenItemsFilter('item name');
            expect(action.type).toBe(FilterActionType.UPDATE_UNTAKEN_ITEMS_FILTER);
        });

        it('should return the provided text', () => {
            const text = 'item name';
            const action = updateUntakenItemsFilter(text);
            expect(action.text).toBe(text);
        });
    });

    describe('updateTakenItemsFilter', () => {
        it('should return UPDATE_TAKEN_ITEMS_FILTER as the action type', () => {
            const action = updateTakenItemsFilter('item name');
            expect(action.type).toBe(FilterActionType.UPDATE_TAKEN_ITEMS_FILTER);
        });

        it('should return the provided text', () => {
            const text = 'item name';
            const action = updateTakenItemsFilter(text);
            expect(action.text).toBe(text);
        });
    });

});
