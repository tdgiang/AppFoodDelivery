import {combineReducers} from 'redux';


import foodsReducer from './foodsReducer';
import favoriteReducer from './favoriteReducer';
import orderReducer from './orderReducer';
import userReducer from './userReducer';
import billReducer from './billReducer';
import collectionsReducer from './collectionsReducer';
const reducer=combineReducers({
    foods:foodsReducer,
    favorites:favoriteReducer,
    orders:orderReducer,
    user:userReducer,
    bill:billReducer,
    collections:collectionsReducer
})


export default reducer;