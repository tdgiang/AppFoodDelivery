export const  fetchFoods=()=>{
    return{
        type:"FETCH_FOODS"
    }
}

export const fetchSuccess=(receivedFoods)=>{
    return{
        type:"FETCH_SUCCEEDED",
        receivedFoods
    }
}
export const fetchFailed=()=>{
    return{
        type:"FETCH_FAILED"
    }
}

export const getFavorite=()=>{
    return{
        type:"GET_FAVORITES",
    }
}
export const getFavoriteFail=()=>{
    return{
        type:"GET_FAVORITE_FAILED",
    }
}
export const getFavoriteSuccess=(arrFavorite)=>{
    return{
        type:"GET_FAVORITE_SUCCEEDED",
        arrFavorite
    }
}

export const addFavorite=(food)=>{
    return{
        type:"ADD_FAVORITE",
        food
    }
}
export const addFavoriteSuccess=(arrFavorite)=>{
    return{
        type:"ADD_FAVORITE_SUCCEEDED",
        arrFavorite
    }
}
export const addFavoriteFail=()=>{
    return{
        type:"ADD_FAVORITE_FAILED",
    }
}