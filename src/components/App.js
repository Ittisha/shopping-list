import React, { Component } from 'react';
import MarkAllUntakenContainer from '../containers/MarkAllUntakenContainer';
import NewItemContainer from '../containers/NewItemContainer';
import TakenItemsContainer from '../containers/TakenItemsContainer';
import UntakenItemsContainer from '../containers/UntakenItemsContainer';
import UntakenFilterContainer from '../containers/UntakenFilterContainer';
import TakenFilterContainer from '../containers/TakenFilterContainer';


import './style/App.css';

class App extends Component {
    render() {
        return (
            <div className="shopping-list">
                <NewItemContainer />
                <UntakenItemsContainer
                    title="Untaken Items"
                    render={() => <UntakenFilterContainer />}
                />
                <TakenItemsContainer
                    title="Taken Items"
                    render={() => <TakenFilterContainer />}
                />
                <MarkAllUntakenContainer />
            </div>
        );
    }
}

export default App;
