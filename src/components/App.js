import React, { Component } from 'react';

import ItemsList from './ItemsList';
import NewItem from './NewItem';
import initialState from  './../store/initial-state';

import './style/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: initialState.items,
        };

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.onItemCheckOff = this.onItemCheckOff.bind(this);
        this.markAllUntaken = this.markAllUntaken.bind(this);
    }

    addItem(item) {
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
                    className="btn untaken-all-btn"
                    onClick={this.markAllUntaken}
                >
                    Mark All As Untaken
                </button>
            </div>
        );
    }
}

export default App;
