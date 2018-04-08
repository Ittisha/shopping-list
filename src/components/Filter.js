import React, { Component } from 'react';

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
            className="search-term"
            value={searchTerm}
            onChange={this.onInputChange}
            />
        )
    }
}

export default Filter;
