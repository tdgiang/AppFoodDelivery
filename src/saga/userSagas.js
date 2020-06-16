import {put,takeLatest} from 'redux-saga/effects';
import {api}  from './api';

function* editProfile(action){
    try {
        yield  result=api.editProfileFromAPI(action.newData);
        yield put({type:"EDIT_PROFILE_SUCCEEDED",newData:action.newData});  
    } catch (error) {
        yield put({type:"EDIT_PROFILE_FAILED"}); 
    }
}
export function* watchEditProfile(){
    yield takeLatest("EDIT_PROFILE",editProfile);
}
