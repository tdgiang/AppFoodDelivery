

export const loginSucceeded=(user)=>{
    return{
        type:"LOGIN_SUCCEEDED",
        user
    }
}
export const getUser=()=>{
    return{
        type:"GET_USER",
    }
}
export const editProfile=(newData)=>{
    return{
        type:"EDIT_PROFILE",
        newData
    }
}