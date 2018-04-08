import React, { Component } from 'react';
import uniqueId from 'lodash.uniqueid';

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
            <form className="NewItem" onSubmit={this.onFormSubmit}>
                <input
                    className="NewItem-input"
                    type="text"
                    value={value}
                    onChange={this.onInputChange}
                />
                <input className="NewItem-submit button" type="submit" />
            </form>
        );
    }
}

export default NewItem;
