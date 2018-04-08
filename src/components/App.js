import React, { Component } from 'react';
import uniqueId from 'lodash.uniqueid';
import ItemsList from './ItemsList';
import NewItem from './NewItem';

const defaultState = [
    { value: 'Milk', id: uniqueId(), taken: false },
    { value: 'Eggs', id: uniqueId(), taken: false },
    { value: 'Blueberries', id: uniqueId(), taken: false },
    { value: 'Potatoes', id: uniqueId(), taken: false },
    { value: 'Greek Yogurt', id: uniqueId(), taken: true },
    { value: 'Apples', id: uniqueId(), taken: false },
    { value: 'Cauliflower', id: uniqueId(), taken: false },
    { value: 'Carrots', id: uniqueId(), taken: false },
    { value: 'Tomatoes', id: uniqueId(), taken: false },
    { value: 'Spaghetti', id: uniqueId(), taken: true },
    { value: 'Sliced Bread', id: uniqueId(), taken: true },
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: defaultState,
        };

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.onItemCheckOff = this.onItemCheckOff.bind(this);
        this.markAllUntaken = this.markAllUntaken.bind(this);
    }

    addItem(item) {
        console.log({
            items: [item, ...this.state.items],
        });
        this.setState({
            items: [item, ...this.state.items],
        })
    }

    removeItem(item) {
        this.setState({
            items: this.state.items.filter(element => element.id !== item.id),
        })
    }

    onItemCheckOff(item) {
        const otherItems = this.state.items.filter(element => element.id !== item.id);
        const updatedItem = { ...item, taken: !item.taken};
        this.setState({
            items: [updatedItem, ...otherItems],
        });
    }

    markAllUntaken() {
        const untakenItems = this.state.items.map(item => ({...item, taken: false}));
        this.setState({
            items: untakenItems,
        })
    }

    render() {
        const { items } = this.state;
        const itemsToBuy = items.filter(item => !item.taken);
        const itemsTaken = items.filter(item => item.taken);

        return (
            <div className="shopping-list">
                <NewItem
                    onSubmit={this.addItem}
                />
                <ItemsList
                    title="Items to Buy"
                    itemsList={itemsToBuy}
                    onCheckOff={this.onItemCheckOff}
                    onRemove={this.removeItem}
                />
                <ItemsList
                    title="Taken Items"
                    itemsList={itemsTaken}
                    onCheckOff={this.onItemCheckOff}
                    onRemove={this.removeItem}
                />
                <button
                    className="btn btn--remove"
                    onClick={this.markAllUntaken}
                >
                    Mark All As Untaken
                </button>
            </div>
        );
    }
}

export default App;
