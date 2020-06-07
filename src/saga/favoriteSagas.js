import {put,takeLatest} from 'redux-saga/effects';
import {api}  from './api';


function* getDataFavorite(){
    try {
        let arrFavorite=yield api.getFavorite();
        yield put({type:"GET_FAVORITE_SUCCEEDED",arrFavorite:arrFavorite});
    } catch (err) {
        yield put ({type:"GET_FAVORITE_FAILED",error})
    }
}

export function* watchGetFavorite(){
    yield takeLatest("GET_FAVORITES",getDataFavorite);
}

function* addFavorite(action){
    try {
        let arrFavorite=yield api.getFavorite();
        let newFavorites=yield arrFavorite!=null?arrFavorite.concat(action.food):[].concat(action.food);
        yield result=api.storageFavorite(newFavorites);
        if(result){
            yield put({type:"ADD_FAVORITE_SUCCEEDED",arrFavorite:newFavorites});
        }else{
            yield put ({type:"ADD_FAVORITE_FAILED",error})
        }
    } catch (err) {
        yield put ({type:"ADD_FAVORITE_FAILED",error})
    }
}

export function* watchAddFavorite(){
    yield takeLatest("ADD_FAVORITE",addFavorite);
}


function* deleteFavorite(action){
    try {
        let arrFavorite=yield api.getFavorite();
        let newFavorites=yield arrFavorite.filter(item=>item._id!=action.idFood);
        yield result=api.storageFavorite(newFavorites);
    } catch (err) {
        yield put ({type:"DELETE_FAVORITE_FAILED"})
    }
}


export function* watchDeleteFavorite(){
    yield takeLatest("DELETE_FAVORITE",deleteFavorite);
}
