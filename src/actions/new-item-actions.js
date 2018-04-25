import { ItemsActionType } from '../constants';

const updateNewItemValue = (value) => ({
    type: ItemsActionType.UPDATE_NEW_ITEM_VALUE,
    value
});

export default updateNewItemValue;
