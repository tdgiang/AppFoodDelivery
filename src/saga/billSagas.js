import {put,takeLatest} from 'redux-saga/effects';
import {api}  from './api';

function* sendBill(action){
    try {
        console.log("Hello send bill saga");
        let result=yield api.sendBill(action.bill);
        console.log(result);
        if(result)
            yield put({type:"SEND_BILL_SUCCEEDED",idBill:result});
        else
            yield put({type:"SEND_BILL_FAILED"});
    } catch (error) {
        yield put({type:"SEND_BILL_FAILED"});
    }
}
export function* watchSendBill(){
    yield takeLatest("SEND_BILL",sendBill);
}
// function* completedBill(action){
//     try {
//         let result=yield api.completedBill(action.id);
//         console.log(result);
//         if(result)
//             yield put({type:"COMPLETED_BILL_SUCCEEDED"});
//         else
//             yield put({type:"COMPLETED_BILL_FAILED"});
//     } catch (error) {
//         yield put({type:"COMPLETED_BILL_FAILED"});
//     }
// }
// export function* watchCompletedBill(){
//     yield takeLatest("COMPLETED_BILL",completedBill);
// }