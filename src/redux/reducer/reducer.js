import {combineReducers} from 'redux';


import foodsReducer from './foodsReducer';


const reducer=combineReducers({
    foods:foodsReducer
})


export default reducer;