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