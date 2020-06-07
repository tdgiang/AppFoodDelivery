import {combineReducers} from 'redux';


import foodsReducer from './foodsReducer';
import favoriteReducer from './favoriteReducer';
import orderReducer from './orderReducer';

const reducer=combineReducers({
    foods:foodsReducer,
    favorites:favoriteReducer,
    orders:orderReducer
})


export default reducer;