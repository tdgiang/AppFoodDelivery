const foodsReducer=(foods=[],action)=>{
    switch(action.type){
        case "FETCH_SUCCEEDED":
            return  action.receivedFoods;
        case "FETCH_FAILED":
                return [];
        default:
                return foods;
    }
}


export default foodsReducer;