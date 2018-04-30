import { connect } from 'react-redux';
import ItemList from '../components/ItemsList';

import { toggleItem, removeItem } from '../actions/items-actions';

const mapStateToProps = ({ items, filter }) => {
    return {
        items: items.filter(item => !item.taken && item.value.toLowerCase().includes(filter.untakenItemsFilter.toLowerCase()))
    };
};

const mapDispatchToProps = dispatch => ({
    onCheckOff(id) {
        dispatch(toggleItem(id));
    },
    onRemove(id) {
        dispatch(removeItem(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
