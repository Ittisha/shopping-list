import React, { Component } from 'react';
import Item from './Item';
import Filter from './Filter';

class ItemsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };

        this.updateSearchTerm = this.updateSearchTerm.bind(this);
    }

    updateSearchTerm(searchTerm) {
        this.setState({searchTerm});
    }

    render() {
        const { title, itemsList, onCheckOff, onRemove } = this.props;
        const { searchTerm } = this.state;

        return (
            <section className="items-list">
                <h2>
                    {title} ({itemsList.length})
                </h2>
                <Filter searchTerm={searchTerm} onChange={this.updateSearchTerm} />
                {itemsList
                    .filter(item =>
                        item.value.toLowerCase().includes(searchTerm.toLowerCase()),
                    )
                    .map(item => (
                        <Item
                            key={item.id}
                            onCheckOff={() => {onCheckOff(item)}}
                            onRemove={() => { onRemove(item)}}
                            item={item}
                        />
                    ))}
            </section>
        );
    }
}

export default ItemsList;