import EventEmitter from 'events';
import AppDispatcher from './AppDispatcher';
import uniqueId from 'lodash.uniqueid';

let items = [
    {value: 'Milk', id: uniqueId(), taken: false},
    {value: 'Eggs', id: uniqueId(), taken: false},
    {value: 'Blueberries', id: uniqueId(), taken: false},
    {value: 'Potatoes', id: uniqueId(), taken: false},
    {value: 'Greek Yogurt', id: uniqueId(), taken: true},
    {value: 'Apples', id: uniqueId(), taken: false},
    {value: 'Cauliflower', id: uniqueId(), taken: false},
    {value: 'Carrots', id: uniqueId(), taken: false},
    {value: 'Tomatoes', id: uniqueId(), taken: false},
    {value: 'Spaghetti', id: uniqueId(), taken: true},
    {value: 'Sliced Bread', id: uniqueId(), taken: true},
];

class ItemStore extends EventEmitter {
    constructor() {
        super();

        AppDispatcher.register((action) => {
            if (action.type === 'ADD_NEW_ITEM') {
                return this.addItem(action.item);
            }

            if (action.type === 'REMOVE_ITEM') {
                return this.removeItem(action.item);
            }

            if (action.type === 'MARK_ALL_ITEMS_UNTAKEN') {
                return this.markAllUntaken();
            }

            if (action.type === 'TOGGLE_ITEM') {
                return this.toggleItem(action.item);
            }
        })
    }

    getItems() {
        return items;
    }

    addItem(item) {
        items.push(item);
        this.emit('change');
    }

    removeItem(item) {
        items = items.filter(element => element.id !== item.id);
        this.emit('change');
    }

    markAllUntaken() {
        items = items.map(item => ({...item, taken: false}));
        this.emit('change');
    }

    toggleItem(switchedItem) {
        items = items.map(item => {
            if (item.id !== switchedItem.id) {
                return item;
            }

            return switchedItem;
        });

        this.emit('change');
    }

}

export default new ItemStore();

