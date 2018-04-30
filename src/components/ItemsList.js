import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

import './style/ItemsList.css';

class ItemsList extends Component {
    render() {
        const { title, items, onCheckOff, onRemove, render } = this.props;

        return (
            <section className="items-list">
                <h2>
                    {title} ({items.length})
                </h2>
                { render && render()}
                {items
                    .map(item => (
                        <Item
                            key={item.id}
                            onCheckOff={() => onCheckOff(item.id)}
                            onRemove={() => onRemove(item.id)}
                            {...item}
                        />
                    ))}
            </section>
        );
    }
}

ItemsList.propTypes = {
    render: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
    onCheckOff: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default ItemsList;