import {call,all} from 'redux-saga/effects';
import {watchFetchFoods} from './foodSagas';
import {watchGetFavorite,watchAddFavorite,watchDeleteFavorite}  from './favoriteSagas';


export default function* rootSaga(){
    yield all([
      //  call(watchFetchFoods),
        call(watchGetFavorite),
        call(watchAddFavorite),
        call(watchDeleteFavorite),
    ])
}