
const historyReducer=(history=[],action)=>{
    switch (action.type) {
        case "GET_HISTORY_SUCCEEDED":
                return action.arrHistory;
        case "GET_HISTORY_FAILED":
                return [];
        case "ADD_HISTORY_SUCCEEDED":
                return(
                   action.arrHistory
                );
        case "ADD_HISTORY_FAILED":
                return(
                    history
                );
        default:
            return history;
    }
}


export default historyReducer;