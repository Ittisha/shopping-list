import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import Filter from './Filter';

import './style/ItemsList.css';

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
        const { title, itemsList } = this.props;
        const { searchTerm } = this.state;

        return (
            <section className="items-list">
                <h2>
                    {title} ({itemsList.length})
                </h2>
                <Filter
                    searchTerm={searchTerm}
                    onChange={this.updateSearchTerm}
                />
                {itemsList
                    .filter(item =>
                        item.value.toLowerCase().includes(searchTerm.toLowerCase()),
                    )
                    .map(item => (
                        <Item
                            key={item.id}
                            item={item}
                        />
                    ))}
            </section>
        );
    }
}

ItemsList.propTypes = {
    itemsList: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
};

export default ItemsList;