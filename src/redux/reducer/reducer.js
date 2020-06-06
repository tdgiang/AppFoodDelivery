import {combineReducers} from 'redux';


import foodsReducer from './foodsReducer';
import favoriteReducer from './favoriteReducer';

const reducer=combineReducers({
    foods:foodsReducer,
    favorites:favoriteReducer
})


export default reducer;