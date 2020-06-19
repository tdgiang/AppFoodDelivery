const billReducer=(bill={},action)=>{
    switch (action.type) {
        case "GET_BILL":
            return bill;
        case "ADD_ORDER_IN_BILL":
            return action.dataOrder;
        case "ADD_ADDRESS_IN_BILL":
            return{
                ...bill,
                contact:action.dataAddress
            }
        case "ADD_PAY_METHOD_IN_BILL":
            return{
                ...bill,
                payMethod:action.dataPayMethod
            }
            case "SEND_BILL_SUCCEEDED":
                return{
                    ...bill,
                    status:3,
                    idServer:action.idBill
                }
        case "SEND_BILL_FAILED":
                return{
                    ...bill,
                    status:2
                }
        default:
            return bill;
    }
}

export default billReducer;