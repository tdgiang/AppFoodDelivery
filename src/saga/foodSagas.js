import {put,takeLatest} from 'redux-saga/effects';
import {api}  from './api';

function* fetchFoods(){
    try {
        console.log("This is func fetchFoods");
        const receivedFoods=yield api.getFoodsFromAPI();
        yield put({type:"FETCH_SUCCEEDED",receivedFoods:receivedFoods});
        
    } catch (error) {
        yield put ({type:"FETCH_FAILED",error})
    }
}


export function* watchFetchFoods(){
    yield takeLatest("FETCH_FOODS",fetchFoods);
}