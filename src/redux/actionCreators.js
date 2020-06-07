
//FOODs
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



//Favorites
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
export const deleteFavorite=(idFood)=>{
    return{
        type:"DELETE_FAVORITE",
        idFood
    }
}
export const deleteFavoriteFail=()=>{
    return{
        type:"DELETE_FAVORITE_FAILED",
    }
}

//Orders
export const getOrders=()=>{
    return{
        type:"GET_ORDERS",
    }
}
export const getOrderFail=()=>{
    return{
        type:"GET_ORDERS_FAILED",
    }
}
export const getOrderSuccess=(arrOrder)=>{
    return{
        type:"GET_ORDERS_SUCCEEDED",
        arrOrder
    }
}
export const addOrder=(food)=>{
    return{
        type:"ADD_ORDER",
        food:{...food,count:1}
    }
}
export const addOrderSuccess=(arrOrder)=>{
    return{
        type:"ADD_ORDER_SUCCEEDED",
        arrOrder
    }
}
export const addOrderFail=()=>{
    return{
        type:"ADD_ORDER_FAILED",
    }
}
export const deleteOrder=(idFood)=>{
    return{
        type:"DELETE_ORDER",
        idFood
    }
}

export const deleteOrderFail=()=>{
    return{
        type:"DELETE_ORDER_FAILED",
    }
}

export const increFoodOrder=(idFood)=>{
    return{
        type:"INCREMENT_FOOD_ORDER",
        idFood
    }
}
export const decreFoodOrder=(idFood)=>{
    return{
        type:"DECREMENT_FOOD_ORDER",
        idFood
    }
}

