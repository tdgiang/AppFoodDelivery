import {put,takeLatest} from 'redux-saga/effects';
import {api}  from './api';

function* getDataOrder(){
    try {
        let arrOrder=yield api.getOrder();
        yield put({type:"GET_ORDERS_SUCCEEDED",arrOrder:arrOrder});
    } catch (err) {
        yield put ({type:"GET_ORDERS_FAILED"})
    }
}
export function* watchGetOrder(){
    yield takeLatest("GET_ORDERS",getDataOrder);
}


function* addOrder(action){
    try {
        let arrOrder=yield api.getOrder();
        let newOrder=yield arrOrder!=[]?arrOrder.concat(action.food):[].concat(action.food);
        yield result=api.storageOrder(newOrder);
        if(result){
            yield put({type:"ADD_ORDER_SUCCEEDED",arrOrder:newOrder});
        }else{
            yield put ({type:"ADD_ORDER_FAILED"})
        }
    } catch (err) {
        yield put ({type:"ADD_ORDER_FAILED"})
    }
}

export function* watchAddOrder(){
    yield takeLatest("ADD_ORDER",addOrder);
}
function* deleteOrder(action){
    try {
        console.log("This is deleteORder saga");
        
        let arrOrder=yield api.getOrder();
        let newOrder=yield arrOrder.filter(e=>e._id!=action.idFood)
        yield result=api.storageOrder(newOrder);
    } catch (err) {
        yield put ({type:"ADD_ORDER_FAILED"})
    }
}

export function* watchDeleteOrder(){
    yield takeLatest("DELETE_ORDER",deleteOrder);
}

