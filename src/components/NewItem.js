import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style/NewItem.css';

class NewItem extends Component {
    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(evt) {
        const { value } = evt.target;
        this.props.updateNewItemValue(value);
    }

    onFormSubmit(evt) {
        evt.preventDefault();

        const { value } = this.props;
        this.props.addItem(value);
    };

    render() {
        const { value } = this.props;

        return (
            <form className="new-item" onSubmit={this.onFormSubmit}>
                <input
                    className="new-item__input"
                    type="text"
                    value={value}
                    onChange={this.onInputChange}
                />
                <button className="btn new-item__btn" type="submit">
                    Add
                </button>
            </form>
        );
    }
}

NewItem.propTypes = {
    value: PropTypes.string.isRequired,
    updateNewItemValue: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
};

export default NewItem;
