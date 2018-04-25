import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style/Item.css';

class Item extends Component {
    render() {
        const { item, onCheckOff, onRemove } = this.props;
        return(
            <article className="item">
                <button
                    className="btn remove-btn"
                    onClick={onRemove}
                >
                    <span className="visually-hidden">Remove</span>
                </button>
                <label htmlFor={item.id}>
                    <input
                        className="item__checkbox"
                        type="checkbox"
                        checked={item.taken}
                        onChange={onCheckOff}
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
    onCheckOff: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default Item;