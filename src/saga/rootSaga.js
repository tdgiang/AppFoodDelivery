import {call,all} from 'redux-saga/effects';
import {watchFetchFoods} from './foodSagas';


export default function* rootSaga(){
    yield all([
        call(watchFetchFoods),
    ])
}