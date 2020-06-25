import {put,takeLatest} from 'redux-saga/effects';
import {api}  from './api';


function* getDataHistory(){
    try {
        let arrHistory=yield api.getHistory();
        yield put({type:"GET_HISTORY_SUCCEEDED",arrHistory})
        
    } catch (err) {
        yield put({type:"GET_HISTORY_FAILED"})
    }
}

export function* watchGetHistory(){
    yield takeLatest("GET_HISTORY",getDataHistory);
}


function* addHistory(action){
    try {
        console.log("This is addhistory saga");
        console.log(action.bill);
        let arrHistory=yield api.getHistory();
        let newHistory=yield arrHistory!=null?arrHistory.concat(action.bill):[].concat(action.bill);
        yield result=api.storageHistory(newHistory);
        if(result){
            yield put({type:"ADD_HISTORY_SUCCEEDED",arrHistory:newHistory});
        }else{
            yield put({type:"ADD_HISTORY_FAILED"})
        }
        
    } catch (err) {
        yield put({type:"ADD_HISTORY_FAILED"})
    }   
}


export function* watchAddHistory(){
    yield takeLatest("ADD_HISTORY",addHistory)
}