const fakeData={
    name:"Trần Đức Giang",
    sdt:"0866 912 436",
    address:"Số 69 Trâu Quỳ,Thị Trấn Trâu Quỳ,Huyện Gia Lâm,TP.Hà Nội",
    img:require('../../constants/images/avatar.jpg'),
}

const userReducer=(user=fakeData,action)=>{
    switch (action) {
        case "GET_USER":
            return action.user;
        default:
            return user;
    }

}


export default userReducer;