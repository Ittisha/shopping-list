import React, { Component } from 'react';
import uniqueId from 'lodash.uniqueid';
import PropTypes from 'prop-types';

import './NewItem.css';

class NewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(evt) {
        const { value } = evt.target;
        this.setState({
            value,
        })
    }

    onFormSubmit(evt) {
        const { onSubmit } = this.props;
        const { value } = this.state;

        evt.preventDefault();

        onSubmit({
            value,
            id: uniqueId(),
            taken: false,
        });

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

NewItem.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default NewItem;
