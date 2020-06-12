const orderReducer=(orders=[],action)=>{
    switch (action.type) {
        case "GET_ORDERS_FAILED":
                return [];
        case "GET_ORDERS_SUCCEEDED":
                return action.arrOrder;
        case "ADD_ORDER_FAILED":
                return orders;
        case "ADD_ORDER_SUCCEEDED":
                return action.arrOrder;
        case "DELETE_ORDER":
                return orders.filter(e=>e._id!=action.idFood);
        case "DELETE_ORDER_FAILED":
                return orders;
        case "INCREMENT_FOOD_ORDER":
                return orders.map(e=>{
                        if(e._id!=action.idFood)        
                                return e;
                        else{
                                return{
                                ...e,
                                count:e.count+1
                                }
                        }
                });
        case "DECREMENT_FOOD_ORDER":
                return orders.map(e=>{
                        if(e._id!=action.idFood)        
                                return e;
                        else{
                                return{
                                ...e,
                                count:e.count-1
                                }
                        }
                });
        case "CLEAR_ORDER":
                return [];
        case "CLEAR_ORDER_FAILED":
                return [];
        default:
               return orders;
    }
}

export default orderReducer;