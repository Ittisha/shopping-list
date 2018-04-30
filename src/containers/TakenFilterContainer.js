import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { updateTakenItemsFilter } from '../actions/filter-actions';

const mapStateToProps = ({ filter }) => {
    return {
        value: filter.takenItemsFilter,
    };
};

const mapDispatchToProps = dispatch => ({
    updateFilter(value) {
        dispatch(updateTakenItemsFilter(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
