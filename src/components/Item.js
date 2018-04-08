import React, { Component } from 'react';

import './Item.css';

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

export default Item;