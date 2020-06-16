const collectionsReducer=(collections=[],action)=>{
    switch(action.type){
        case "FETCH_COLLECTIONS_SUCCEEDED":
            return  action.collections;
        case "FETCH_COLLECTIONS_FAILED":
                return collections;
        default:
                return collections;
    }
}


export default collectionsReducer;