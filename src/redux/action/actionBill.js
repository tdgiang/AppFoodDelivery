
export const getBill=()=>{
    return{
        type:"GET_BILL"
    }
}
export const addOrderInBill=(dataOrder)=>{
    return{
        type:"ADD_ORDER_IN_BILL",
        dataOrder
    }
}
export const addAddressInBill=(dataAddress)=>{
    return{
        type:"ADD_ADDRESS_IN_BILL",
        dataAddress 
    }
}
export const addPayMethodInBill=(dataPayMethod)=>{
    return{
        type:"ADD_PAY_METHOD_IN_BILL",
        dataPayMethod
    }
}

export const sendBill=(bill)=>{
    return{
        type:"SEND_BILL",
        bill
    }
}
