import {call,all} from 'redux-saga/effects';
import {watchFetchFoods} from './foodSagas';
import {watchGetFavorite,watchAddFavorite,watchDeleteFavorite}  from './favoriteSagas';
import {watchGetOrder,watchAddOrder,watchDeleteOrder,watchClearOrder} from './orderSagas';
import {watchEditProfile}  from './userSagas';
import {watchFetchCollections}  from './collectionsSagas';
import {watchSendBill}  from './billSagas';
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
        call(watchClearOrder),
        call(watchEditProfile),
        call(watchFetchCollections),
        call(watchSendBill),
        
    ])
}