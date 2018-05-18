import { all, call, put, takeEvery } from 'redux-saga/effects';

import { ItemsActionType } from '../constants';

import { updateAllItems } from '../actions/items-actions';

const loadItemsData = () => {
   return fetch('http://test-thunk.hamsterin.space/anna.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
};

function* makeItemsDataRequest() {
    const items = yield call(loadItemsData);
    yield put(updateAllItems(items));
}

function* fetchItemsData() {
    yield takeEvery(ItemsActionType.FETCH_ITEMS, makeItemsDataRequest);
}

function* rootSaga() {
    yield all([fetchItemsData()]);
}

export default rootSaga;
