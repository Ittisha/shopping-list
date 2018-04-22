import React, { Component } from 'react';

import ItemsList from './ItemsList';
import NewItem from './NewItem';

import { markAllUntaken } from '../actions';
import ItemStore from '../ItemStore';

import './style/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ItemStore.getItems(),
        };

        this.updateItems = this.updateItems.bind(this);
    }

    updateItems() {
        this.setState({items: ItemStore.getItems()});
    }

    componentDidMount() {
        ItemStore.on('change', this.updateItems);
    }

    componentWillUnmount() {
        ItemStore.off('change', this.updateItems);
    }

    render() {
        const { items } = this.state;
        const itemsToBuy = items.filter(item => !item.taken);
        const itemsTaken = items.filter(item => item.taken);

        return (
            <div className="shopping-list">
                <NewItem />
                <ItemsList
                    title="Items to Buy"
                    itemsList={itemsToBuy}
                />
                <ItemsList
                    title="Taken Items"
                    itemsList={itemsTaken}
                />
                <button
                    className="btn untaken-all-btn"
                    onClick={markAllUntaken}
                >
                    Mark All As Untaken
                </button>
            </div>
        );
    }
}

export default App;
