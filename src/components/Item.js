import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toggleItem, removeItem } from '../actions';

import './style/Item.css';

class Item extends Component {
    constructor(props) {
        super(props);

        this.onItemToggle = this.onItemToggle.bind(this);
        this.onItemRemove = this.onItemRemove.bind(this);
    }

    onItemToggle() {
        toggleItem(this.props.item);
    }

    onItemRemove() {
        removeItem(this.props.item);
    }

    render() {
        const { item } = this.props;
        return(
            <article className="item">
                <button
                    className="btn remove-btn"
                    onClick={this.onItemRemove}
                >
                    <span className="visually-hidden">Remove</span>
                </button>
                <label htmlFor={item.id}>
                    <input
                        className="item__checkbox"
                        type="checkbox"
                        checked={item.taken}
                        onChange={this.onItemToggle}
                        id={item.id}
                    />
                    {item.value}
                </label>
            </article>
        );
    }
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        taken: PropTypes.bool.isRequired,
        value: PropTypes.string.isRequired,
    }).isRequired,
};

export default Item;