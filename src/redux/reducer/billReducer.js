const billReducer=(bill={},action)=>{
    switch (action.type) {
        case "GET_BILL":
            return bill;
        case "ADD_ORDER_IN_BILL":
            return action.dataOrder;
        case "ADD_ADDRESS_IN_BILL":
            return{
                ...bill,
                address:action.dataAddress
            }
        case "ADD_PAY_METHOD_IN_BILL":
            return{
                ...bill,
                payMethod:action.dataPayMethod
            }
        default:
            return bill;
    }
}

export default billReducer;