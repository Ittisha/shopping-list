import uniqueId from 'lodash.uniqueid';

const items = [
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

const filter = {
    takenItemsFilter: '',
    untakenItemsFilter: '',
};



export default {
    items,
    filter,
    newItemValue: '',
}
