import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { markAllUntaken } from '../actions/items-actions';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ markAllUntaken }, dispatch);
};

export default connect(null, mapDispatchToProps)(({ markAllUntaken }) => (
    <button className="btn untaken-all-btn" onClick={markAllUntaken}>
        Mark All As Untaken
    </button>
));
