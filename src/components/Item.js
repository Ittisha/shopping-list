import React, { Component } from 'react';

class Item extends Component {
    render() {
        const { item, onCheckOff, onRemove } = this.props;
        return(
            <article>
                <label htmlFor={item.id}>
                    <input
                    type="checkbox"
                    checked={item.taken}
                    onChange={onCheckOff}
                    id={item.id}
                    />
                    {item.value}
                </label>
                <button
                    className="btn remove-btn"
                    onClick={onRemove}
                >
                    Remove
                </button>
            </article>
        );
    }
}

export default Item;