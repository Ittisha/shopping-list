import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style/Filter.css';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(evt) {
        const { onChange } = this.props;
        const value = evt.target.value;
        onChange(value);
    }

    render() {
        const { searchTerm } = this.props;
        return (
            <input
            className="filter"
            value={searchTerm}
            onChange={this.onInputChange}
            />
        )
    }
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired,
};

export default Filter;
