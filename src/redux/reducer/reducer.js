import {combineReducers} from 'redux';


import foodsReducer from './foodsReducer';
import favoriteReducer from './favoriteReducer';
import orderReducer from './orderReducer';
import userReducer from './userReducer';
import billReducer from './billReducer';
import collectionsReducer from './collectionsReducer';
import historyReducer from './historyReducer';
const reducer=combineReducers({
    foods:foodsReducer,
    favorites:favoriteReducer,
    orders:orderReducer,
    user:userReducer,
    bill:billReducer,
    collections:collectionsReducer,
    history:historyReducer
})


export default reducer;