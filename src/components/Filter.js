import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style/Filter.css';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(evt) {
        const { updateFilter } = this.props;
        const value = evt.target.value;
        updateFilter(value);
    }

    render() {
        const { value } = this.props;
        return (
            <input
            className="filter"
            value={value}
            onChange={this.onInputChange}
            />
        )
    }
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    updateFilter: PropTypes.func.isRequired,
};

export default Filter;
