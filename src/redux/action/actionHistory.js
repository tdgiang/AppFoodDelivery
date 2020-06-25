export const getHistory=()=>{
    return{
        type:"GET_HISTORY"
    }
}
export const addHistory=(bill)=>{
    return{
        type:"ADD_HISTORY",
        bill
    }
}
