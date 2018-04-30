import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NewItem from '../components/NewItem';
import updateNewItemValue from '../actions/new-item-actions';
import { addItem } from '../actions/items-actions';

const mapStateToProps = ({newItemValue}) => {
    return {
        value: newItemValue,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updateNewItemValue,
        addItem,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
