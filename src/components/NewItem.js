import React, { Component } from 'react';

import { addItem } from '../actions';

import './style/NewItem.css';

class NewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    shouldComponentUpdate(newProps, newState) {
        return this.state.value !== newState.value;
    }

    onInputChange(evt) {
        const { value } = evt.target;
        this.setState({
            value,
        })
    }

    onFormSubmit(evt) {
        const { value } = this.state;

        evt.preventDefault();

        addItem(value);

        this.setState({ value: '' });
    };

    render() {
        const { value } = this.state;

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

export default NewItem;
