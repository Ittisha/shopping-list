import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { updateUntakenItemsFilter }  from '../actions/filter-actions';

const mapStateToProps = ({ filter }) => {
    return {
        value: filter.untakenItemsFilter,
    };
};

const mapDispatchToProps = dispatch => ({
    updateFilter(value) {
        dispatch(updateUntakenItemsFilter(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
