import {put,takeLatest} from 'redux-saga/effects';
import {api}  from './api';

function* fetchCollections(){
    try {
        const receivedCollections=yield api.getCollectionsFromAPI();
        yield put({type:"FETCH_COLLECTIONS_SUCCEEDED",collections:receivedCollections});
    } catch (error) {
        yield put ({type:"FETCH_COLLECTIONS_FAILED",error})
    }
}
export function* watchFetchCollections(){
    yield takeLatest("FETCH_COLLECTIONS",fetchCollections);
}