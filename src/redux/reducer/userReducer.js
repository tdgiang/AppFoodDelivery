
const userReducer=(user={},action)=>{
    switch (action.type) {
        case "GET_USER":
                return user;
        case "LOGIN_SUCCEEDED":
                return action.user;
        case "EDIT_PROFILE_SUCCEEDED":
                return {
                        ...user,
                        name:action.newData.name,
                        gender:action.newData.gender,
                        phone:action.newData.phone,
                        address:action.newData.address,
                        dateOfBirth:action.newData.dateOfBirth
                };
        case "EDIT_PROFILE_FAILED":
                return user;
        default:
            return user;
    }
}

export default userReducer;