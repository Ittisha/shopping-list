import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style/Item.css';

class Item extends Component {
    render() {
        const { taken, id, value, onCheckOff, onRemove } = this.props;
        return(
            <article className="item">
                <button
                    className="btn remove-btn"
                    onClick={onRemove}
                >
                    <span className="visually-hidden">Remove</span>
                </button>
                <label htmlFor={id}>
                    <input
                        className="item__checkbox"
                        type="checkbox"
                        checked={taken}
                        onChange={onCheckOff}
                        id={id}
                    />
                    {value}
                </label>
            </article>
        );
    }
}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    taken: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    onCheckOff: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default Item;
