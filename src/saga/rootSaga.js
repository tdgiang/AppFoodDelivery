import {call,all} from 'redux-saga/effects';
import {watchFetchFoods} from './foodSagas';
import {watchGetFavorite,watchAddFavorite,watchDeleteFavorite}  from './favoriteSagas';
import {watchGetOrder,watchAddOrder,watchDeleteOrder,watchClearOrder} from './orderSagas';

export default function* rootSaga(){
    yield all([
        call(watchFetchFoods),
        call(watchGetFavorite),
        call(watchAddFavorite),
        call(watchDeleteFavorite),
        call(watchGetFavorite),
        call(watchGetOrder),
        call(watchAddOrder),
        call(watchDeleteOrder),
        call(watchClearOrder)
    ])
}